import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
@Input() name: string = '';
@Input() type: string = '';
@Output() clicked = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.clicked.emit(this.type)
  }
}
