import { Component, OnInit } from '@angular/core';

import { Category, categories } from "../categories";
import { products, Product } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  categories = categories;
  constructor() { }

  show(category: Category){
    for(let product of products){
      if(product.category == category.name){
        product.isShow = true;
      }else{
        product.isShow = false;
      }
    }
  }

  ngOnInit(): void {
  }

}
