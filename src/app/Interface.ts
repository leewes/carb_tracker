export interface Meal {
  id?: number;
  users_id: number;
  week: number;
  days_id: number;
  carbs_id: number;
  created_at?: Date;
  updated_at?: Date;
}

export interface User {
  id?: number;
  first_name: string;
  last_name: string;
  dob?: Date;
  created_at?: Date;
  updated_at?: Date;
}

export interface Day {
  id?: number;
  name: string;
  created_at?: Date;
  updated_at?: Date;
}

export interface Carb {
  id?: number;
  breakfast: number;
  lunch: number;
  dinner: number;
  created_at?: Date;
  updated_at?: Date;
}
