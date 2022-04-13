import { Component, OnInit } from '@angular/core';
import { Product } from '../models';
import { ItemsService } from '../items.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  products!: Product[];
  product!: Product;

  constructor(private itemsService: ItemsService) { 
  }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.itemsService.getProducts().subscribe((products) => {
      this.products = products;
    });
  }
}
