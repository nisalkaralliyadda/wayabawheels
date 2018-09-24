import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginParam } from '../products/product.model';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ToastyNotificationsService } from '../services/toasty-notifications.service';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  @ViewChild('f') contactForm: NgForm;

  // to show data after submit
  submitted = false;

  model = new LoginParam()

  constructor(private http: HttpClient, private s: ToastyNotificationsService, private router: Router, private ps: ProductsService) { }


  onSubmit(form: NgForm) {
    this.http.post('/api/v1/customer/login', this.model).subscribe(r => {
      this.s.success('Successfully logged in')
      this.ps.setCustomer(r);
      this.router.navigate(['/'])
    }, e => this.s.error('Invalid Username or Password'))
  }

}
