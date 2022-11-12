import { Injectable } from '@angular/core';
import { ethers } from 'ethers';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class EthersService {
  provider: ethers.providers.JsonRpcProvider;
  contract: ethers.Contract;

  constructor() {
    this.provider = new ethers.providers.JsonRpcProvider(
      environment.PROVIDER_URL
    );
    const contractAddress = '';
    this.contract = new ethers.Contract(contractAddress, 'abi', this.provider);
    this.contract.on('Log', (sender, message, event) => {
      let info = {
        sender: sender,
        message: message,
      };
      console.log(info);
    });
  }
}
