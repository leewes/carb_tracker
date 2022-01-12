import { Component, Input, OnInit } from '@angular/core';
import { User } from '../Interface';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.css'],
})
export class UserMenuComponent implements OnInit {
  @Input() users: User[] = [];
  constructor() {}

  ngOnInit(): void {}

  handleName($event: any) {
    console.log($event);
  }
}
