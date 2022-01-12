import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css'],
})
export class GraphComponent implements OnInit {
  @Input() chartType: any = 'bar';
  @Input() chartData: any = {
    datasets: [
      {
        label: 'Monday',
        data: [200, 500, 600],
        backgroundColor: ['blue', 'green', 'red']
      },
    ],
    labels: ['breakfast', 'lunch', 'dinner'],
  };
  @Input() chartOptions: any = {};

  constructor() {
  }

  ngOnInit(): void {
  }
}
