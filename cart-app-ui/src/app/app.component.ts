import { Component } from '@angular/core';
import { ProductsService } from './services/products.service';
import { ActivatedRoute, UrlSegment, NavigationEnd, Router } from '@angular/router';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isHome:boolean;

  constructor(
    private productsService: ProductsService,
    private router: Router
  ) {

    this.router.events.filter((event: any) => event instanceof NavigationEnd)
    .subscribe(event => {
        this.isHome = event.url == '/'; 
    });
  }

}
