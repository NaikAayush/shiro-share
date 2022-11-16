import { Component, OnInit } from '@angular/core';
import { MagicService } from './services/magic.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Shiro Share';

  constructor(private magic: MagicService) {}

  async ngOnInit() {
    await this.magic.getFiles();
  }
}
