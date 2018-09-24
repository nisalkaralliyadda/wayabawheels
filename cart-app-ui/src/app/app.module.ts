import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { ToastyModule } from 'ng2-toasty';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProductsComponent } from './products/products.component';
import { ProductCardComponent } from './products/product-card/product-card.component';
import { CartminiComponent } from './cart/cartmini/cartmini.component';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './products/product/product.component';
import { ProductsService } from './services/products.service';
import { CartComponent } from './cart/cart.component';
import { NumberInputComponent } from './shared/number-input/number-input.component';
import { TruncatePipe } from './pipes/truncate.pipe';
import { FiltersComponent } from './products/filters/filters.component';
import { FilterPipe } from './pipes/filter.pipe';
import { SearchPipe } from './pipes/search.pipe';
import { ProductListItemComponent } from './products/product-list-item/product-list-item.component';
import { ToastyNotificationsService } from './services/toasty-notifications.service';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { RegisteredVehiclesComponent } from './registered-vehicles/registered-vehicles.component';
import { UnRegisteredVehiclesComponent } from './un-registered-vehicles/un-registered-vehicles.component';
import { BodyPartsComponent } from './body-parts/body-parts.component';


const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'registered', component: RegisteredVehiclesComponent },
  { path: 'unregistered', component: UnRegisteredVehiclesComponent },
  { path: 'bodyparts', component: BodyPartsComponent },
  { path: 'products/:id', component: ProductComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'cart', component: CartComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductsComponent,
    ProductCardComponent,
    CartminiComponent,
    HomeComponent,
    LoginComponent,
    ProductComponent,
    CartComponent,
    NumberInputComponent,
    TruncatePipe,
    FiltersComponent,
    FilterPipe,
    SearchPipe,
    ProductListItemComponent,
    SignupComponent,
    RegisteredVehiclesComponent,
    UnRegisteredVehiclesComponent,
    BodyPartsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    ToastyModule.forRoot(),
    FormsModule,
    HttpClientModule
  ],
  providers: [
    ProductsService,
    ToastyNotificationsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
