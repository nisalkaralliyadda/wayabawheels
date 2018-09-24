import { Component, OnInit } from '@angular/core';
import { Product, Part } from '../products/product.model';
import { ProductsService } from '../services/products.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-body-parts',
  templateUrl: './body-parts.component.html',
  styleUrls: ['./body-parts.component.css']
})
export class BodyPartsComponent implements OnInit {

  parts:Part[] = [];

  products: Product[];
  filterBy: string;
  searchText: string;
  layoutMode: boolean; // true for grid, false for list
  isLoading = true;

  constructor( private prodService: ProductsService,private http:HttpClient ) {}

  ngOnInit() {

    this.http.get('api/v1/parts/all').subscribe((p:any)=>{
      this.isLoading = false;
      if(p){
        this.parts=p.map(t=>{
          t.price = t.price? t.price : 0;
          t.qty = 1;
          return t;
        })
      }
    })

    /* this.prodService.fetchProductsFromDB().subscribe(
      products => {
        this.prodService.setAllProducts(products);
        this.products = this.prodService.getAllProducts();
      },
      err => console.log(err),
      () => this.isLoading = false
    );
 */


    this.filterBy = this.prodService.getFilter();
    this.searchText = this.prodService.getSearchFilter();
    this.layoutMode = this.prodService.getLayout();

    this.prodService.filterTypeEmitter.subscribe(
      (filterValue: string) => {
        this.filterBy = filterValue;
      }
    );
    this.prodService.searchEmitter.subscribe(
      (searchValue: string) => {
        this.searchText = searchValue;
      }
    );
    this.prodService.layoutModeEmitter.subscribe(
      (layoutVal: boolean) => {
        this.layoutMode = layoutVal;
      }
    );
  }

  ngOnDestroy() {
    this.products = [];
  }
}
