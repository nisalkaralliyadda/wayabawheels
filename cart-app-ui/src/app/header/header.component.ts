import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  menuToggle = false;

  isLoggedIn: boolean;

  constructor(private ps: ProductsService) { }

  ngOnInit() {
    this.ps.loggedInCustomer.subscribe(f =>{
debugger;
    this.isLoggedIn = !!f
  
  })
  }

}
