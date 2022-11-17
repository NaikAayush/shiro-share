import { Component, Input, OnInit } from '@angular/core';
import { BigNumber, ethers } from 'ethers';
import { IpfsService } from 'src/app/services/ipfs.service';

@Component({
  selector: 'app-my-files-item',
  templateUrl: './my-files-item.component.html',
  styleUrls: ['./my-files-item.component.css'],
})
export class MyFilesItemComponent implements OnInit {
  @Input() cid!: string;
  @Input() validity!: BigNumber;
  @Input() validityNumber!: number;
  @Input() timestamp!: number;

  filename: string = '';
  date: string = '';
  constructor(public ipfs: IpfsService) {}

  async ngOnInit() {
    this.filename = await this.ipfs.fetchFilename(this.cid);
    const expiryInSeconds =
      ethers.BigNumber.from(this.validity).toNumber() +
      ethers.BigNumber.from(this.timestamp).toNumber();
    this.date = new Date(expiryInSeconds * 1000).toLocaleString();
  }
}
