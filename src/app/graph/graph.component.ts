import { Component, OnInit } from '@angular/core';
import { Meal, User } from '../Interface';
import { DietApiService } from '../services/diet-api.service';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css'],
})
export class GraphComponent implements OnInit {
  meals: Meal[] = [{ users_id: -1, week: -1, days_id: -1, carbs_id: -1 }];
  constructor(private dietApiService: DietApiService) {}

  ngOnInit(): void {
    this.dietApiService
      .getResource('users')
      .subscribe((meals) => (this.meals = meals));
  }
}
