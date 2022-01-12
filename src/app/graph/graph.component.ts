import { Component, Input, OnInit } from '@angular/core';
import { UiService } from '../services/ui.service';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css'],
})
export class GraphComponent implements OnInit {
  @Input() chartType: any = 'bar';
  @Input() chartOptions: any = {};
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
  
  showGraph: boolean = true;

  constructor(private uiService: UiService) {
  }

  ngOnInit(): void {
    this.uiService.getGraph().subscribe(value => this.showGraph = value);
  }
}
