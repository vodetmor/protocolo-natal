export interface UserProfile {
  name: string;
  weightLossGoal: string;
  dietRestriction: string;
  bodyFocus: string;
}

export interface Task {
  id: number;
  text: string;
  icon: string;
  color: string;
  completed: boolean;
}

export type ViewState = 'home' | 'diet' | 'train' | 'arsenal';

export type ContentId = 'hiit' | 'recipes' | 'teas' | 'manual' | null;

export interface DietMeal {
  time: string;
  title: string;
  description: string;
  color: string; // Tailwind border color class
}
