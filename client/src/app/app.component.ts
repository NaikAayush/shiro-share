import { Component, OnInit } from '@angular/core';
import { openCloseAnimation } from './services/animation.service';
import { MagicService } from './services/magic.service';
import { StoreService } from './services/store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [openCloseAnimation],
})
export class AppComponent implements OnInit {
  title = 'Shiro Share';

  constructor(public store: StoreService) {}

  async ngOnInit() {}
}
