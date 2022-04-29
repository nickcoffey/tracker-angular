import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  @Output() toggleSideNav = new EventEmitter();

  onMenuClick() {
    this.toggleSideNav.emit();
  }

  constructor() {}

  ngOnInit(): void {}
}
