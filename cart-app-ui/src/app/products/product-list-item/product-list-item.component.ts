import { Component, OnInit, Input } from '@angular/core';


import { Product } from '../product.model';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-list-item',
  templateUrl: './product-list-item.component.html',
  styleUrls: ['./product-list-item.component.css']
})
export class ProductListItemComponent implements OnInit {
  @Input() product: any;
  @Input() layoutMode: boolean;

  constructor(private prodService: ProductsService) { }

  ngOnInit() {
  }


  onAddToCart(product: any) {
    this.prodService.addToCart(product);
  }
}
