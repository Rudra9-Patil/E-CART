import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './products/add-product/add-product.component';
import { LoginComponent } from './products/login/login.component';
import { RegistrationComponent } from './products/registration/registration.component';
import { ViewProductComponent } from './products/view-product/view-product.component';
import { AuthGuard } from './guards/auth.guard';
const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:"view-product",component:ViewProductComponent},
  {path:"add-product",component:AddProductComponent},
  {path:"register",component:RegistrationComponent},
  {path:"login",component:LoginComponent},
  {path:'**',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
