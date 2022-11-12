import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { create, IPFSHTTPClient } from 'ipfs-http-client';

@Injectable({
  providedIn: 'root',
})
export class IpfsService {
  private ipfs: IPFSHTTPClient;

  constructor() {
    this.ipfs = create({
      url: environment.IPFS_URL,
    });
  }

  public async upload(file: File) {
    let cid = await this.ipfs.add(file);
    console.log(cid);
    let pinnedCid = await this.ipfs.pin.add(cid.cid);
    console.log(pinnedCid);
    return pinnedCid.toString();
  }
}
