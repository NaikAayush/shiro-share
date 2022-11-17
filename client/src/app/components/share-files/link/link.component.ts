import { Clipboard } from '@angular/cdk/clipboard';
import { Component, OnInit } from '@angular/core';
import { openCloseAnimation } from 'src/app/services/animation.service';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.css'],
  animations: [openCloseAnimation],
})
export class LinkComponent implements OnInit {
  constructor(public store: StoreService, private clipboard: Clipboard) {}

  ngOnInit(): void {}

  copyToClipboard() {
    this.clipboard.copy(this.store.fileURL);
    this.store.success = true;
    this.store.toastTitle = 'Success';
    this.store.toastBody = 'Link Copied to Clipboard.';
    this.store.isToastVisible = true;
  }
}
