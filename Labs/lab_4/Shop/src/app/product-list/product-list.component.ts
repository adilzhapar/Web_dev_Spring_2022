import { Component, OnInit } from '@angular/core';

import { Product, products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products = products;
  constructor() { }

  share(ll: string) {
    window.open(`https://telegram.me/share/url?url=${ll}&text=I'm sharing this product with you`,"Telegram", );
    
  }
  ngOnInit(): void {
  }

  change(product: Product){
    product.pos = (product.pos+1) % 3;
  }
}
