import { Component, OnInit } from '@angular/core';
import { MagicService } from 'src/app/services/magic.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  menuOpen = false;

  constructor(public magic: MagicService) {}

  ngOnInit(): void {}

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  connectWallet() {}
}
