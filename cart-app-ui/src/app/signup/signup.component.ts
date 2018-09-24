import { Component, OnInit } from '@angular/core';
import { Customer } from '../products/product.model';
import { HttpClient } from '@angular/common/http';
import { ToastyNotificationsService } from '../services/toasty-notifications.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  model = new Customer()

  constructor(private http: HttpClient,private s:ToastyNotificationsService,private router:Router) { }

  ngOnInit() {
  }

  onSubmit(f) {
    if (f.valid) {
      this.http.post('api/v1/customer/signin', this.model).subscribe(p => {
        this.s.success("User successfully signup")
        this.router.navigate(['/login'])
      }, e => {
       this.s.error("Signup Error")
      })
    }
  }

}
