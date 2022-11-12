import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Magic } from 'magic-sdk';
import { ConnectExtension } from '@magic-ext/connect';
import { ethers } from 'ethers';

@Injectable({
  providedIn: 'root',
})
export class MagicService {
  customNodeOptions = {
    rpcUrl: environment.PROVIDER_URL,
    chainId: 137,
  };
  magic;
  provider;
  account: string | boolean;

  constructor() {
    this.magic = new Magic(environment.MAGIC_API_KEY, {
      network: this.customNodeOptions,
      extensions: [new ConnectExtension()],
    });
    this.provider = new ethers.providers.Web3Provider(
      this.magic.rpcProvider as any
    );
    this.account = this.getAccount();
    console.log(this.account);
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
}
