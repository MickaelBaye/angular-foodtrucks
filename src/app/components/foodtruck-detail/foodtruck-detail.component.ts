import { Component, OnInit } from '@angular/core';
import { Foodtruck } from '../../model/foodtruck';
import { ActivatedRoute } from '@angular/router';
import { FoodtruckService } from '../../services/foodtruck.service';

@Component({
  selector: 'app-foodtruck-detail',
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
    const id = this.route.snapshot.paramMap.get('id');
    // this.foodtruckService.getFoodtruckById(id).subscribe(foodtruck => this.foodtruck = foodtruck);
    this.foodtruckService.getFoodtruck(id).then((f: Foodtruck) => {
      this.foodtruck = f;
    });
  }
}
