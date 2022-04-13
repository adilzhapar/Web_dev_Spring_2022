import { Component, OnInit } from '@angular/core';
import { Product } from '../models';
import { ActivatedRoute } from '@angular/router';
import { ItemsService } from '../items.service';


@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {
  product: Product | undefined;
  constructor(private route: ActivatedRoute,
              private itemService: ItemsService) { }

  ngOnInit(): void {
  }

  getProduct(){
    this.route.paramMap.subscribe((params) => {
      const id = parseInt(params.get('id') || '{}');
      this.itemService.getProduct(id).subscribe((product) => {
        this.product = product;
      });
    });
  }

}
