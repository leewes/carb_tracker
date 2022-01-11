import { Component, OnInit } from '@angular/core';
import { Meal } from '../Interface';
import { DietApiService } from '../services/diet-api.service';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {
  meals: Meal[] = [];
  constructor(private dietApiService: DietApiService) {}

  ngOnInit(): void {
    this.dietApiService.getMeals().subscribe((meal) => this.meals = meal)
  }
}
