import { Meal } from "./meal";
import { Menu } from "./menu";

export class Foodtruck {
  id: number;
  name: string;
  days: number[];
  description: string;
  subtitle: string;
  menuList: Menu[];
  mealList: Meal[];
}
