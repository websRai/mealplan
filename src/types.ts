export interface Meal {
  type: string
  name: string
  ingredients: string[]
}

export interface Day {
  meals: Meal[]
}

export interface MealPlanData {
  days: Day[]
}