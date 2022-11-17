import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Magic } from 'magic-sdk';
import { ConnectExtension } from '@magic-ext/connect';
import { ContractInterface, ethers, providers, Signer } from 'ethers';
import ShiroShare from '../../assets/ShiroShare.json';
import MinimalForwarder from '../../assets/MinimalForwarder.json';
import { SignerService } from './signer.service';
import { lastValueFrom } from 'rxjs';
import { EstimatePrice } from '../models/estimatePrice';
import { GetSize } from '../models/getSize';
import { PutFile } from '../models/putFile';
import { AutotaskResponse } from '../models/autotaskResponse';

@Injectable({
  providedIn: 'root',
})
export class MagicService {
  customNodeOptions = {
    rpcUrl: environment.PROVIDER_URL,
    chainId: 80001,
  };
  magic;
  provider: providers.Web3Provider;
  signer: Signer;
  account: string | boolean;
  shiroShareContract: any;
  shiroShareContractSigned: any;

  minimalForwarder: any;
  registry: any;

  constructor(private signerService: SignerService, private http: HttpClient) {
    this.magic = new Magic(environment.MAGIC_API_KEY, {
      network: this.customNodeOptions,
      extensions: [new ConnectExtension()],
    });
    this.provider = new ethers.providers.Web3Provider(
      this.magic.rpcProvider as any
    );

    this.signer = this.provider.getSigner();
    this.account = this.getAccount();

    // Create Forwarder
    this.minimalForwarder = new ethers.Contract(
      environment.MINIMAL_FORWARDER_ADDRESS,
      MinimalForwarder,
      this.provider
    );

    // Create ShiroShare
    this.shiroShareContract = new ethers.Contract(
      environment.SHIRO_SHARE_ADDRESS,
      ShiroShare as ContractInterface,
      this.provider
    );

    // Create ShiroShare without Relayer
    this.shiroShareContractSigned = new ethers.Contract(
      environment.SHIRO_SHARE_ADDRESS,
      ShiroShare as ContractInterface,
      this.signer
    );
  }

  async login() {
    await this.provider
      .listAccounts()
      .then((accounts) => {
        this.setAccount(accounts[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  async logout() {
    await this.magic.connect.disconnect().catch((e) => {
      console.log(e);
    });
    this.removeAccount();
  }

  setAccount(account: string): void {
    localStorage.setItem('account', account);
    this.account = this.getAccount();
  }

  removeAccount(): void {
    localStorage.removeItem('account');
    this.account = this.getAccount();
  }

  getAccount(): string | boolean {
    const account = localStorage.getItem('account');
    if (account != null) {
      return account;
    } else {
      return false;
    }
  }

  async putFile(data: PutFile) {
    return this.sendMetaTx(data);
  }

  async getFiles() {
    const tx = await this.shiroShareContractSigned.getFiles();
    console.log(tx);
  }

  async sendTx(registry: any, name: any) {
    // TODO: Non Meta Tx
    // return registry.register(name);
  }

  async sendMetaTx(txData: PutFile) {
    console.log(`Sending register meta-tx to set name=${name}`);
    const defenderURL = environment.DEFENDER_WEBHOOK_URL;
    if (!defenderURL) throw new Error(`Missing relayer url`);

    const forwarder = this.minimalForwarder;
    const from = await this.signer.getAddress();
    const data = this.shiroShareContract.interface.encodeFunctionData(
      'putFile',
      [txData.cid, txData.validity, txData.provider, txData.size]
    );
    const to = this.shiroShareContract.address;

    const request = await this.signerService.signMetaTxRequest(
      this.provider,
      forwarder,
      {
        to,
        from,
        data,
      },
      txData.price
    );
    console.log({ request });
    return await lastValueFrom(
      this.http.post<AutotaskResponse>(defenderURL, JSON.stringify(request), {
        headers: { 'Content-Type': 'application/json' },
      })
    );
  }

  async estimatePrice(cid: string, validity: number) {
    return await lastValueFrom(
      this.http.get<EstimatePrice>(
        `${environment.SHIRO_STORE_API}/estimatePrice?cid=${cid}&validity=${validity}`
      )
    );
  }

  async getSize(cid: string) {
    return await lastValueFrom(
      this.http.get<GetSize>(
        `${environment.SHIRO_STORE_API}/fileSizeOnly?cid=${cid}`
      )
    );
  }
}
