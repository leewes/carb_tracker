import { Component, Input, OnInit } from '@angular/core';
import { User } from '../Interface';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input() user: User = {first_name: "none", last_name: "none"};
  constructor() { }

  ngOnInit(): void {
  }

}
