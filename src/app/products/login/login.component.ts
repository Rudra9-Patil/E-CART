import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup
  constructor(private fb: FormBuilder, private route: Router, private toast: ToastrService) {
    this.loginForm = this.fb.group({
      email: this.fb.control('', [Validators.required, Validators.email]),
      password: this.fb.control('', [Validators.required, Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')]),
    })

  }

  get email() {
    return this.loginForm.get('email')
  }
  get password() {
    return this.loginForm.get('password')
  }

  ngOnInit(): void {
  }
  getToast() {
    this.toast.success("succesfully Added")
  }
  onSubmit() {
    let GotVal = JSON.parse(localStorage.getItem(this.email.value))
    

    if (Array.isArray(GotVal)) 
    
    
    {
        let verification=GotVal.some(x=>{return x.email===this.email.value && x.password===this.password.value})
        console.log(verification);
        
        if(verification){
          alert('logged in sucessfully')
          this.route.navigate(['view-product'])
          return true
        }else{
          alert(" credential invalid")   
          return false
        }
    }
     else {  
      this.toast.success(" User not present Kindly register to login")
      this.route.navigate(['register'])
      return false
     }
  }
}

