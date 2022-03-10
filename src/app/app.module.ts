import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddProductComponent } from './products/add-product/add-product.component';
import { ViewProductComponent } from './products/view-product/view-product.component';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SpinnerComponent } from './spinner/spinner.component';
import { ReactiveFormsModule } from '@angular/forms';

import { RegistrationComponent } from './products/registration/registration.component';
import { LoginComponent } from './products/login/login.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';
import { AuthGuard } from './guards/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    AddProductComponent,
    ViewProductComponent,
    SpinnerComponent,
    RegistrationComponent,
    LoginComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule, HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 1000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }), ReactiveFormsModule,FormsModule,MaterialModule

  ],
  providers:[AuthGuard,LoginComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
