import { Component, OnInit } from '@angular/core';
import { Carb, Day, Meal, User } from './Interface';
import { DietApiService } from './services/diet-api.service';
import { UiService } from './services/ui.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title: string = 'Carb Tracker';

  //API states
  meals: Meal[] = [{ users_id: -1, week: -1, days_id: -1, carbs_id: -1 }];
  users: User[] = [{ first_name: 'none', last_name: 'none' }];
  days: Day[] = [{ name: 'No Day' }];
  carbs: Carb[] = [{ breakfast: 0, lunch: 0, dinner: 0 }];
  selectUser: number = 0;

  //Graph.js states
  type: string = 'bar';
  data: any = {
    datasets: [
      {
        label: 'No Data Set',
        data: [0, 0, 0],
        backgroundColor: ['blue', 'green', 'red'],
      },
    ],
    labels: ['breakfast', 'lunch', 'dinner'],
  };
  option: any = {
    maintainAspectRatio: false,
  };

  constructor(
    private dietApiService: DietApiService,
    private uiService: UiService
  ) {}

  ngOnInit(): void {
    this.dietApiService.getResource('users').subscribe((users) => {
      this.users = users;
    });
    this.dietApiService
      .getResource('meals')
      .subscribe((meals) => (this.meals = meals));
    this.dietApiService
      .getResource('days')
      .subscribe((days) => (this.days = days));
    this.dietApiService
      .getResource('carbs')
      .subscribe((carbs) => (this.carbs = carbs));

    this.uiService.getId().subscribe((id) => (this.selectUser = id));
  }
  changeChart($event: string) {
    this.type = $event;

    if ($event === 'pie') {
      this.sortDistributionData();
    } else if ($event === 'line') {
      this.sortTrendData();
    } else {
      this.sortDailyData();
    }
  }

  sortDistributionData() {
    const data: any = this.meals
      .filter((meal) => meal.users_id === this.selectUser)
      .map((meal) => meal.carbs_id)
      .map((id) => this.carbs.find((carb) => carb.id === id))
      .reduce(
        (sum: number[], carb: any) => {
          sum[0] += carb.breakfast;
          sum[1] += carb.lunch;
          sum[2] += carb.dinner;

          return sum;
        },
        [0, 0, 0]
      );
    this.data = {
      datasets: [
        {
          data: data,
          backgroundColor: ['blue', 'green', 'red'],
        },
      ],
      labels: ['breakfast', 'lunch', 'dinner'],
    };
  }
  sortTrendData() {
    //organize data into line form then pass down as props
  }
  sortDailyData() {
    //organize data into bar form then pass down as props
  }
}
