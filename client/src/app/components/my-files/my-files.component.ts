import { Component, OnInit } from '@angular/core';
import { MagicService } from 'src/app/services/magic.service';

@Component({
  selector: 'app-my-files',
  templateUrl: './my-files.component.html',
  styleUrls: ['./my-files.component.css'],
})
export class MyFilesComponent implements OnInit {
  data: any;
  loading = true;
  constructor(private magic: MagicService) {}

  async ngOnInit() {
    this.loading = true;
    this.data = await this.magic.getFiles();
    console.log(this.data);
    this.loading = false;
  }
}
