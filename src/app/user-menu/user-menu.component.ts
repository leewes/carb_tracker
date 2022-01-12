import { Component, Input, OnInit } from '@angular/core';
import { User } from '../Interface';
import { UiService } from '../services/ui.service';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.css'],
})
export class UserMenuComponent implements OnInit {
  @Input() users: User[] = [];
  constructor(private uiService: UiService) {}

  ngOnInit(): void {}

  handleName($event: any) {
    this.uiService.selectUser(Number.parseInt($event));
  }
}
