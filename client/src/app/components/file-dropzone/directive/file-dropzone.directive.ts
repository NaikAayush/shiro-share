import {
  Directive,
  Output,
  EventEmitter,
  HostBinding,
  HostListener,
} from '@angular/core';
@Directive({
  selector: '[appFileDropzone]',
})
export class FileDropzoneDirective {
  @HostBinding('class.fileover')
  fileOver: boolean = false;
  @Output() fileDropped = new EventEmitter<any>();

  // Dragover listener
  @HostListener('dragover', ['$event']) onDragOver(event: {
    dataTransfer: { files: any };
    preventDefault: () => void;
    stopPropagation: () => void;
  }) {
    event.preventDefault();
    event.stopPropagation();
    this.fileOver = true;
  }

  // Dragleave listener
  @HostListener('dragleave', ['$event']) public onDragLeave(event: {
    preventDefault: () => void;
    stopPropagation: () => void;
  }) {
    event.preventDefault();
    event.stopPropagation();
    this.fileOver = false;
  }

  // Drop listener
  @HostListener('drop', ['$event']) public ondrop(event: {
    preventDefault: () => void;
    stopPropagation: () => void;
    dataTransfer: { items: any; files: any };
  }) {
    event.preventDefault();
    event.stopPropagation();
    this.fileOver = false;
    let files = event.dataTransfer.files;

    if (event.dataTransfer.items) {
      // Use DataTransferItemList interface to access the file(s)
      [...event.dataTransfer.items].forEach((item, i) => {
        // If dropped items aren't files, reject them
        if (item.kind === 'file') {
          const file = item.getAsFile();
          // console.log(`… file[${i}].name = ${file.name}`);
          if (files.length > 0) {
            this.fileDropped.emit(files);
          }
        }
      });
    } else {
      // Use DataTransfer interface to access the file(s)
      [...event.dataTransfer.files].forEach((file, i) => {
        // console.log(`… file[${i}].name = ${file.name}`);
        this.fileDropped.emit(files);
      });
    }
  }
}
