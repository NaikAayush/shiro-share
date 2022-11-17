import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-share-files',
  templateUrl: './share-files.component.html',
  styleUrls: ['./share-files.component.css'],
})
export class ShareFilesComponent implements OnInit {
  @Input() fileURL: string = '';

  constructor() {}

  ngOnInit(): void {}
}
