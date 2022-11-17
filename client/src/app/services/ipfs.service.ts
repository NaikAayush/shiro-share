import { EventEmitter, Injectable, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { create, IPFSHTTPClient } from 'ipfs-http-client';
import { MagicService } from './magic.service';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class IpfsService {
  public progress: number = 0;
  public size: number = 0;
  private ipfs: IPFSHTTPClient;

  constructor(private magic: MagicService, private http: HttpClient) {
    this.ipfs = create({
      url: environment.IPFS_URL,
    });
  }

  public async upload(file: File) {
    try {
      this.size = file.size;
      const ipfsResponse = await this.ipfs.add(
        { path: file.name, content: file },
        {
          progress: (prog) => {
            this.progress = prog;
          },
        }
      );

      const cid = ipfsResponse.cid.toString();
      await lastValueFrom(
        this.http.post(`${environment.SHIRO_STORE_API}/filename`, {
          cid: cid,
          fileName: file.name,
        })
      );
      const estimatePrice = await this.magic.estimatePrice(
        cid,
        environment.DEFAULT_VALIDITY
      );
      const getSize = await this.magic.getSize(cid);
      const tx = await this.magic.putFile({
        cid: cid,
        validity: environment.DEFAULT_VALIDITY,
        provider: environment.DEFAULT_PROVIDER,
        size: getSize.size,
        price: estimatePrice.price,
      });
      const success = true ? tx.status == 'success' : false;
      const fileURL = this.generateFileURL(cid);
      return { success, fileURL };
    } catch (error) {
      const success = false;
      return { success };
    }
  }

  public async getFile(cid: string) {
    const data = this.ipfs.ls(cid);

    for await (const x of data) {
      console.log(x);
    }
  }

  generateDownloadableFileUrl(cid: string, fileName: string) {
    return `${environment.IPFS_URL}/ipfs/${cid}?filename=${fileName}&download=true`;
  }

  generateFileURL(cid: string) {
    if (window.location.href.includes('localhost')) {
      return `http://localhost:4200/#/files/${cid}`;
    } else {
      return `https://share.shiro.network/#/files/${cid}`;
    }
  }
}
