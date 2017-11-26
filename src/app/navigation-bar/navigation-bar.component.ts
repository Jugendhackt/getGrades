import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {
  group = localStorage.getItem('group');

  constructor() { }

  ngOnInit() {
  }
  logout() {
    localStorage.clear();
    location.reload();
  }
}
