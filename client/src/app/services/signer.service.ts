import { Injectable } from '@angular/core';
// import { signTypedData } from '@metamask/eth-sig-util';
import { BigNumber, ethers } from 'ethers';

@Injectable({
  providedIn: 'root',
})
export class SignerService {
  constructor() {}

  EIP712Domain = [
    { name: 'name', type: 'string' },
    { name: 'version', type: 'string' },
    { name: 'chainId', type: 'uint256' },
    { name: 'verifyingContract', type: 'address' },
  ];

  ForwardRequest = [
    { name: 'from', type: 'address' },
    { name: 'to', type: 'address' },
    { name: 'value', type: 'uint256' },
    { name: 'gas', type: 'uint256' },
    { name: 'nonce', type: 'uint256' },
    { name: 'data', type: 'bytes' },
  ];

  getMetaTxTypeData(chainId: number, verifyingContract: any) {
    return {
      types: {
        EIP712Domain: this.EIP712Domain,
        ForwardRequest: this.ForwardRequest,
      },
      domain: {
        name: 'MinimalForwarder',
        version: '0.0.1',
        chainId,
        verifyingContract,
      },
      primaryType: 'ForwardRequest',
    };
  }

  async signTypedData(signer: any, from: any, data: any) {
    const [method, argData] = ['eth_signTypedData_v4', data];
    return await signer.send(method, [from, argData]);

    // If signer is a private key, use it to sign
    // if (typeof signer === 'string') {
    //   const privateKey = Buffer.from(signer.replace(/^0x/, ''), 'hex');
    //   return signTypedData(privateKey,  data );
    // }

    // Otherwise, send the signTypedData RPC call
    // Note that hardhatvm and metamask require different EIP712 input
    // const isHardhat = data.domain.chainId == 31337;
    // const [method, argData] = isHardhat
    //   ? ['eth_signTypedData', data]
    //   : ['eth_signTypedData_v4', data];
  }

  async buildRequest(forwarder: any, input: any, price: number) {
    const nonce = await forwarder
      .getNonce(input.from)
      .then((nonce: { toString: () => any }) => nonce.toString());

    return {
      value: price,
      // value: BigNumber.from(price)
      //   .add(BigNumber.from(1000000).mul(BigNumber.from(10).pow(9)))
      //   .toString(),
      // value: ethers.utils.parseEther('1').toString(),
      gas: 1e6,
      nonce,
      ...input,
    };
  }

  async buildTypedData(forwarder: any, request: any) {
    const chainId = await forwarder.provider
      .getNetwork()
      .then((n: { chainId: any }) => n.chainId);
    const typeData = this.getMetaTxTypeData(chainId, forwarder.address);
    return { ...typeData, message: request };
  }

  async signMetaTxRequest(
    signer: any,
    forwarder: any,
    input: any,
    price: number
  ) {
    const request = await this.buildRequest(forwarder, input, price);
    const toSign = await this.buildTypedData(forwarder, request);
    const signature = await this.signTypedData(signer, input.from, toSign);
    return { signature, request };
  }
}
