import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoginComponent } from '../products/login/login.component';

@Injectable({
  providedIn: 'root'
})
export class AuthguardserviceService {
  constructor(private login:LoginComponent,private router:Router) { }
  onlogin() {
    console.log(this.login.onSubmit());
    return true
  }
} 
