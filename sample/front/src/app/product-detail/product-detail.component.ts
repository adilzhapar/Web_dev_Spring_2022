import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Product } from '../models';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: Product | undefined;
  constructor(private apiProduct: ProductsService, 
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct(){
    this.route.paramMap.subscribe(
      (params) => {
        const id = parseInt(params.get('id') || '{}');
        this.apiProduct.getProduct(id).subscribe((product) => {
          this.product = product;
        });
      }
    );
  }

}
