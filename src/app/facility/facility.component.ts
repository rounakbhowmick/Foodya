import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-facility',
  templateUrl: './facility.component.html',
  styleUrls: ['./facility.component.css']
})
export class FacilityComponent implements OnInit {
  facilities = [
    {
      svgUrl: "assets/orderdeliveryicon.svg",
      name: "Fast Delivery in 1 hour"
    },
    {
      svgUrl: "assets/delivery-man.svg",
      name: "150+ Delivery Man"
    },
    {
      svgUrl: "assets/cafe.svg",
      name: "200+ Resturant and Cafe"
    },
    {
      svgUrl: "assets/location.svg",
      name: "More Area Coverage"
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
