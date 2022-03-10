import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  // registrationlocalDBVal=localStorage.getItem('itemsSetEmail')
  regForm:FormGroup
arr=[]
  constructor( private fb:FormBuilder,private toast:ToastrService) { 
    this.regForm=this.fb.group({
      username:this.fb.control('',[Validators.required,Validators.minLength(3),Validators.maxLength(10),Validators.pattern("[a-zA-Z]+$")]),
      lastname:this.fb.control('',[Validators.required,Validators.maxLength(10),Validators.pattern("[a-zA-Z]+$")]),
      dob:this.fb.control('',[Validators.required]),
      phone:this.fb.control('',[Validators.required ,Validators.pattern("^[0-9]+$"),Validators.maxLength(10),Validators.minLength(10)]),
      email:this.fb.control('',[Validators.required,Validators.email]),
      address : this.fb.array([this.intializeAddress()]),
      password:this.fb.control('',[Validators.required,Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')]),
      conPass:this.fb.control('',[Validators.required,Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')]), 
    });
  }
  // Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$")
  get username(){
    return this.regForm.get('username')
  }

  get lastname(){
    return this.regForm.get('lastname')
  }
  get dob(){
    return this.regForm.get('dob')
  }
  
  get phone(){
    return this.regForm.get('phone')
  }
  get email(){
    return this.regForm.get('email')
  }
  get password(){
    return this.regForm.get('password')
  }

  get conPass():FormControl{
    return this.regForm.get('conPass') as FormControl;
  }

  get address() :FormArray {
    return this.regForm.get('address') as  FormArray;
  }


  ngOnInit(): void {
  }

  intializeAddress(): FormGroup {
    return this.fb.group ({
      doorNo: ['',[Validators.required]],
      street : ['', [Validators.required]],
      locality : ['', [Validators.required]],
      city : ['',[Validators.required]],
      state : ['', [Validators.required]],
      pincode : ['', [Validators.required]]
    })
  }

  removeAddress(index:any){
    this.address.removeAt(index);
  }

  addAddress(){
    this.address.push(this.intializeAddress());
  }

  getToast(){
    this.toast.success("succesfully Added")
  }
  onSubmit(){
    this.arr.push(this.regForm.value)
    localStorage.setItem(this.email.value,JSON.stringify(this.arr))
    this.regForm.reset()
    this.toast.success("Registration succesful")
    // alert(' User registered sucessfully')
//  console.log(this.regForm.value);
//  localStorage.setItem('itemsSetUsername',JSON.stringify(this.regForm.value.username))
//  localStorage.setItem('itemsSetLastname',JSON.stringify(this.regForm.value.lastname))
//  localStorage.setItem('itemsSetDob',JSON.stringify(this.regForm.value.dob))
//  localStorage.setItem('itemsSetPhone',JSON.stringify(this.regForm.value.phone))
//  localStorage.setItem('itemsSetEmail',JSON.stringify(this.regForm.value.email))
//  localStorage.setItem('itemsSetPassword',JSON.stringify(this.regForm.value.password))
//  localStorage.setItem('itemsSetConpass',JSON.stringify(this.regForm.value.conPass))
// this.registrationlocalDBVal=localStorage.getItem('itemsSetEmail')
  }
  
}
