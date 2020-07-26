import { POPULARITEMS } from './../popular-categories-items';
import { Component, OnInit } from '@angular/core';
//import { FoodItems } from './item-iterface';
@Component({
  selector: 'app-popular-categories',
  templateUrl: './popular-categories.component.html',
  styleUrls: ['./popular-categories.component.css']
})
export class PopularCategoriesComponent implements OnInit {
  imgUrl: string; itemName: string; rate: number;
  popularitems = POPULARITEMS;
  filtereditems = [];
  items = [
    {
      // id: 'Capa_1',
      svgUrl: "assets/biryani.svg",
      name: 'Biryani',

    },
    {
      svgUrl: "assets/pizaa.svg",
      name: 'Pizaa'
    },
    {
      svgUrl: "assets/noodle.svg",
      name: 'Noodle'
    },
    {
      svgUrl: "assets/burger.svg",
      name: 'Burger'
    }
  ];
  stars = [
    {
      svg: "assets/star.svg"
    },
    {
      svg: "assets/star.svg"
    },
    {
      svg: "assets/star.svg"
    }
    ,
    {
      svg: "assets/star.svg"
    }

  ];
  constructor() { }

  ngOnInit(): void {
  }
  onSelect(item): void {
    this.filter(item);
  }
  filter(item): any {
    this.filtereditems = this.popularitems.filter(i => i.type == item.name);
    console.log(this.filtereditems);
  }

}
