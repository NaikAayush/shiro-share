import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { IpfsService } from 'src/app/services/ipfs.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.css'],
})
export class FilesComponent implements OnInit {
  cid!: string;
  fileName!: string;
  fileURL!: string;
  constructor(
    private route: ActivatedRoute,
    private ipfs: IpfsService,
    private http: HttpClient
  ) {
    this.route.params.subscribe((params: any) => {
      this.cid = params.cid;
    });
  }

  async ngOnInit() {
    const fileNameResponse: any = await lastValueFrom(
      this.http.get(`${environment.SHIRO_STORE_API}/filename`, {
        params: {
          cid: this.cid,
        },
        observe: 'response',
      })
    );
    this.fileName = fileNameResponse.body.status;
    this.fileURL = this.ipfs.generateDownloadableFileUrl(
      this.cid,
      this.fileName
    );
  }
}
