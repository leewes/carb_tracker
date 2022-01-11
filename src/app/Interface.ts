export interface Meal {
    id?: number;
    users_id: number;
    week: number;
    days_id: number;
    carbs_id: number;
    created_at?: string;
    updated_at?: string;
}

export interface User {
    id?: number;
    first_name: string;
    last_name: string;
    dob?: Date;
}

export interface Day {
    id?: number;
    name: string;
}

export interface Carb {
    id?: number;
    breakfast: number;
    lunch: number;
    dinner: number;
}