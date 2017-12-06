import { Component, OnInit } from '@angular/core';
import { Foodtruck } from '../foodtruck';
import { ActivatedRoute } from '@angular/router';
import { FoodtruckService } from '../foodtruck.service';

@Component({
  selector: 'foodtruck-detail',
  templateUrl: 'foodtruck-detail.component.html',
  styleUrls: ['foodtruck-detail.component.css']
})

export class FoodtruckDetailComponent implements OnInit {

  foodtruck: Foodtruck;

  constructor(
    private route: ActivatedRoute,
    private foodtruckService: FoodtruckService) { }

  ngOnInit() {
    this.getFoodtruck();
  }

  getFoodtruck(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.foodtruckService.getFoodtruckById(id)
      .subscribe(foodtruck => this.foodtruck = foodtruck);
  }
}
