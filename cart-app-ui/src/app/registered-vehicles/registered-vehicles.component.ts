import { Component, OnInit } from '@angular/core';
import { Product } from '../products/product.model';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-registered-vehicles',
  templateUrl: './registered-vehicles.component.html',
  styleUrls: ['./registered-vehicles.component.css']
})
export class RegisteredVehiclesComponent implements OnInit {

  products: Product[];
  filterBy: string;
  searchText: string;
  layoutMode: boolean; // true for grid, false for list
  isLoading = true;

  constructor( private prodService: ProductsService ) {}

  ngOnInit() {
    this.prodService.fetchProductsFromDB().subscribe(
      products => {
        this.prodService.setAllProducts(products);
        this.products = this.prodService.getAllProducts();
      },
      err => console.log(err),
      () => this.isLoading = false
    );



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
