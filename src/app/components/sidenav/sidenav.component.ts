import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

type Option = {
  icon: string;
  name: string;
  path: string;
};

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
})
export class SidenavComponent implements OnInit {
  @Output() closeSideNav = new EventEmitter();

  options: Option[] = [
    { icon: 'home', name: 'Home', path: '' },
    { icon: 'fitness_center', name: 'Exercises', path: 'exercises' },
  ];

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {}

  changeRoute(path: string) {
    this.router.navigateByUrl(`/${path}`);
    this.closeSideNav.emit();
  }
}
