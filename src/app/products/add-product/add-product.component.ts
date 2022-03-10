import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from 'src/app/services/product.service';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
   isLoading:boolean=false
   form:FormGroup
  constructor(private toast:ToastrService,private product:ProductService, private fb:FormBuilder) {
    this.form=this.fb.group({
      productName:this.fb.control('',[Validators.required]),
      productPrice:this.fb.control('',[Validators.required]),
      productDescription:this.fb.control('',[Validators.required]),
      productImageURL:this.fb.control('',[Validators.required])
    })
   }
   
  ngOnInit(): void {
    
    
  }
  getToast(){
    this.toast.success("succesfully Added")
  }
  onSubmit(){
    this.isLoading=true
    console.log(this.form.value);
    this.product.addProduct(this.form.value).subscribe(res=>{
      console.log(res);
      this.isLoading=false;
      if(!res.error){
        this.form.reset();
        this.toast.success("succes! product added succesfully")
      }
    })
    
  }
}
