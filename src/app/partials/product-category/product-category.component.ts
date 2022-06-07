import { Component, OnInit } from '@angular/core';
import {CategoryListingServiceService} from '../../services/category-listing-service.service';
declare var $: any;
@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  styleUrls: ['./product-category.component.scss'],
  providers: [ CategoryListingServiceService ]
})


export class ProductCategoryComponent implements OnInit {
  categories: any = [];
  most_popular: any = [];
  data=[{cat_id: 1, cat_title: 'Mens Wear', router: 'men'},
   {cat_id: 2, cat_title: 'Gadgets', router: 'electronics'}
  , {cat_id: 3, cat_title: 'Kids Wear', router: 'kids'}
  , {cat_id: 4, cat_title: 'Womens Wear', router: 'women'}
  , {cat_id: 5, cat_title: 'Foot wear', router: 'home-appliances'}
   , {cat_id: 6, cat_title: 'Makeup', router: 'furniture'}
   , {cat_id: 7, cat_title: 'Indo Western', router: 'football'}
   , {cat_id: 8, cat_title: 'Mens Purse', router: 'basket-ball'}
   , {cat_id: 9, cat_title: 'Womens Purse', router: 'voley'}
   , {cat_id: 10, cat_title: 'Sports', router: 'tenis'}
]
d_p=[{cat_id: 1, cat_title: 'Nike', router: 'men'},
{cat_id: 2, cat_title: 'Louis Vuitton', router: 'electronics'}
, {cat_id: 3, cat_title: 'Gucci', router: 'kids'}
, {cat_id: 4, cat_title: 'Adidas', router: 'women'}
, {cat_id: 5, cat_title: 'Zara', router: 'home-appliances'}
, {cat_id: 6, cat_title: 'H&M', router: 'furniture'}
, {cat_id: 7, cat_title: 'Levi’s', router: 'football'}
, {cat_id: 8, cat_title: 'Tom Ford', router: 'basket-ball'}
, {cat_id: 9, cat_title: 'Armani', router: 'voley'}
, {cat_id: 10, cat_title: 'Tommy Hilfiger', router: 'tenis'}]
  constructor(private categoryListingService: CategoryListingServiceService) { }

  /*************get categories from mock data  ********/
  loadCategories() {
    this.categoryListingService.getCategories().subscribe(data =>
      {
        if(data)
        {
          this.categories = data;
          console.log(this.categories)
        }
      }
        , err => console.log('error')
      );
  }
  /********************* ends **********************/

  /*******************get most popular *************/
  loadMostPopular() {
    this.categoryListingService.getMostPopular().subscribe(data =>
      {
        if(data)
        {
          this. most_popular = data;
        }
      }
        , err => console.log('error')
      );
  }
  /************************end *********************/
  ngOnInit() {
    this.loadCategories();
    this.loadMostPopular();
  }

}
