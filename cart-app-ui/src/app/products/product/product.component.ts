import { ToastyNotificationsService } from './../../services/toasty-notifications.service';
// import { Component, OnInit, DoCheck } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Product } from '../product.model';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
// export class ProductComponent implements OnInit, DoCheck {
export class ProductComponent implements OnInit {
  id: string;
  product: any;
  similarProducts: Product[];
  isLoading = false;

  constructor(
    private route: ActivatedRoute,
    private prodService: ProductsService
  ) { }

  ngOnInit() {
    /* this.initProductSingleView(); */
    this.product = this.prodService.getSelectedProduct()
  }


  // ngDoCheck() {
  //   this.initProductSingleView();
  // }

  // helper fn to save repeating same code in init and doCheck hooks
 /*  initProductSingleView() {
    this.id = this.route.snapshot.params['id'];
    this.prodService.fetchSingleProductFromDB(this.id).subscribe(
      product => {
        this.product = product;
        // this.getSimilarProducts(this.product.type, this.product.id);
      },
      err => console.error(err),
      () => this.isLoading = false
    );
  }
 */

  addToCart(product: Product) {
    this.prodService.addToCart(product);
  }


  // getSimilarProducts(prodType: string, prodId: string) {
  //   this.similarProducts = this.prodService.getSimilarProducts(prodType, prodId);
  // }

}
