import { Component, OnInit } from '@angular/core';
import { Foodtruck } from '../../model/foodtruck';
import { FoodtruckService } from '../../services/foodtruck.service';

@Component({
  selector: 'app-today',
  templateUrl: 'today.component.html',
  styleUrls: ['today.component.css']
})

export class TodayComponent implements OnInit {

  foodtrucks : Foodtruck[];
  today: Date;

  constructor(private foodtruckService:FoodtruckService) {}

  ngOnInit() {
    this.today = new Date();
    this.getFoodtrucksByDay(this.today.getDay());
  }

  getFoodtrucks() : void {
    this.foodtruckService.getFoodtrucks().then((fs: Foodtruck[]) => {
      this.foodtrucks = fs;
    });
  }

  getFoodtrucksByDay(day: number) : void {
    this.foodtruckService.getFoodtrucksByDay(day.toString()).then((fs: Foodtruck[]) => {
      this.foodtrucks = fs;
    });
  }
}
