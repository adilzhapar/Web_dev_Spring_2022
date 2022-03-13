import { Component, OnInit, Input } from '@angular/core';
import { Product, products } from '../products';
import { Category, categories } from '../categories';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  products = products;
  @Input() category!: Category;
  constructor() { }

  ngOnInit(): void {
  }

  delete(index: number){
    console.log(index);
    this.products.splice(index, 1);
  }
  like(product: Product){
    product.likes += 1;
  }

}
