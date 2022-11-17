import { EventEmitter, Injectable, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { create, IPFSHTTPClient } from 'ipfs-http-client';
import { MagicService } from './magic.service';

@Injectable({
  providedIn: 'root',
})
export class IpfsService {
  public progress: number = 0;
  public size: number = 0;
  private ipfs: IPFSHTTPClient;

  constructor(private magic: MagicService) {
    this.ipfs = create({
      url: environment.IPFS_URL,
    });
  }

  public async upload(file: File) {
    try {
      this.size = file.size;
      const ipfsResponse = await this.ipfs.add(file, {
        progress: (prog) => {
          this.progress = prog;
        },
      });
      const cid = ipfsResponse.cid.toString();
      const estimatePrice = await this.magic.estimatePrice(
        cid,
        environment.DEFAULT_VALIDITY
      );

      console.log(estimatePrice.price);
      const getSize = await this.magic.getSize(cid);
      const tx = await this.magic.putFile({
        cid: cid,
        validity: environment.DEFAULT_VALIDITY,
        provider: environment.DEFAULT_PROVIDER,
        size: getSize.size,
        price: estimatePrice.price,
      });
      console.log(tx);
      const success = true ? tx.status == 'success' : false;
      const fileURL = this.generateFileUrl(cid);
      return { success, fileURL };
    } catch (error) {
      const success = false;
      return { success };
    }
  }

  generateFileUrl(cid: string) {
    return `${environment.IPFS_URL}/ipfs/${cid}`;
  }
}
