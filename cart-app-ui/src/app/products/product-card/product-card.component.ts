import { Component, OnInit, Input } from '@angular/core';


import { Product } from '../product.model';
import { ProductsService } from '../../services/products.service';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  @Input() product: Product;
  @Input() layoutMode: boolean;

  constructor(private prodService: ProductsService,private router:Router) { }

  ngOnInit() {
  }


  onAddToCart(product: any) {
    this.prodService.addToCart(product);
  }

  viewProduct(){
    this.prodService.setSelectedProduct(this.product)
    this.router.navigate(['products/1'])
  }

}
