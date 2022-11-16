import { Component, OnInit } from '@angular/core';
import { IpfsService } from 'src/app/services/ipfs.service';

@Component({
  selector: 'app-file-dropzone',
  templateUrl: './file-dropzone.component.html',
  styleUrls: ['./file-dropzone.component.css'],
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

  constructor(public ipfs: IpfsService) {}

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
    for (const item of files) {
      item.progress = 0;
      this.files.push(item);
    }
    console.log(this.files[0]);
    this.file = this.files[0];
    this.bytes = this.file.size;
    this.fileName = this.file.name;
    this.size = this.formatBytes(this.file.size, 0);
    this.isUploading = true;
    this.setFileExtension(this.file);
    console.log(this.fileExtension);
    await this.ipfs.upload(this.file);
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
