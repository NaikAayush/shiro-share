import { Component, OnInit } from '@angular/core';
import { openCloseAnimation } from 'src/app/services/animation.service';
import { IpfsService } from 'src/app/services/ipfs.service';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-file-dropzone',
  templateUrl: './file-dropzone.component.html',
  styleUrls: ['./file-dropzone.component.css'],
  animations: [openCloseAnimation],
})
export class FileDropzoneComponent implements OnInit {
  isUploading: boolean = false;
  files: any[] = [];
  bytes: number = 0;
  size: string = '';
  file!: File;
  fileName: string = '';
  fileExtension: string = '';
  fileIconPath: string = '';
  ipfsUrl: string = '';
  success: boolean = true;
  loadingMessage: string = '';
  loading: boolean = false;

  constructor(public ipfs: IpfsService, public storeService: StoreService) {}

  ngOnInit(): void {}

  /**
   * on file drop handler
   */
  onFileDropped($event: any) {
    this.prepareFilesList($event);
  }

  /**
   * handle file from browsing
   */
  fileBrowseHandler(files: any) {
    this.prepareFilesList(files.target.files);
  }

  /**
   * Delete file from files list
   * @param index (File index)
   */
  deleteFile(index: number) {
    this.files.splice(index, 1);
  }

  /**
   * Convert Files list to normal array list
   * @param files (Files List)
   */
  async prepareFilesList(files: Array<any>) {
    this.loading = true;
    this.loadingMessage = 'Processing File';
    for (const item of files) {
      item.progress = 0;
      this.files.push(item);
    }
    this.file = this.files[0];
    this.bytes = this.file.size;
    this.fileName = this.file.name;
    this.size = this.formatBytes(this.file.size, 0);
    this.setFileExtension(this.file);
    this.isUploading = true;
    this.loadingMessage =
      'Processing Transaction. Sign the Transaction with your wallet.';
    const { success, fileURL } = await this.ipfs.upload(this.file);
    if (success) {
      if (fileURL) {
        this.storeService.fileURL = fileURL;
      }
      this.storeService.toastTitle = 'Success';
      this.storeService.toastBody = 'File upload and transation successful';
    } else {
      this.isUploading = false;
      this.files = [];
      this.storeService.toastTitle = 'Error';
      this.storeService.toastBody =
        'File upload or transation failed. Please try again';
    }
    this.storeService.isToastVisible = true;
    this.storeService.success = success;
    this.success = success;
    this.loading = false;
  }

  /**
   * format bytes
   * @param bytes (File size in bytes)
   * @param decimals (Decimals point)
   */
  formatBytes(bytes: number, decimals: number) {
    if (bytes === 0) {
      return '0 Bytes';
    }
    const k = 1024;
    const dm = decimals <= 0 ? 0 : decimals || 2;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
  }

  setFileExtension(file: File) {
    this.fileExtension = file.name.split('.').pop()?.toUpperCase() as string;
    this.fileIconPath = `assets/file-icons/${this.fileExtension}.svg`;
  }
}
