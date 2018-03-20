import { Meal } from "./meal";
import { Menu } from "./menu";
import { Contact } from "./contact";

export class Foodtruck {
  _id?: string;
  name: string;
  days: number[];
  description: string;
  subtitle: string;
  menuList: Menu[];
  mealList: Meal[];
  contact: Contact;
}
