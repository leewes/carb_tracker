import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '../Interface';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input() user: User = {first_name: "none", last_name: "none"};
  @Output() nameSelect = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  onName() {
    this.nameSelect.emit(this.user.id)
  }
}
