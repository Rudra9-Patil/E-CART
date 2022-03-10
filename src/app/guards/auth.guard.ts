import { Injectable } from '@angular/core';
import { CanActivate, } from '@angular/router';
import { AuthguardserviceService } from '../services/authguardservice.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private auth:AuthguardserviceService) { }
  canActivate() {
    if (this.auth.onlogin()) {
      return true
    } else {
      return false;
    }
  }
}
