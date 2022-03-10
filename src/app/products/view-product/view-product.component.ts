import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { product } from 'src/app/model/product.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {
  res:any
  displayTab:any
  form!:FormGroup
 ProductId:any
 isLoading=false

  constructor(private viewProduct:ProductService,private fb:FormBuilder,private toast:ToastrService)
   { this.getData()
     
  
  }
   
  ngOnInit(): void {
    this.form=this.fb.group({
      productName:this.fb.control('',[Validators.required]),
      productPrice:this.fb.control('',[Validators.required]),
      productDescription:this.fb.control('',[Validators.required]),
      productImageURL:this.fb.control('',[Validators.required])

    })
  }
 
  getData(){
    this.viewProduct.getProduct().subscribe(res=>{
      console.log(res);
      this.displayTab=res.products
      console.log(this.displayTab);
      
    })
  }

  onEdit(product:product){
   this.ProductId=product._id
    this.form.patchValue({
      productName:product.productName,
      productPrice:product.productPrice,
      productDescription:product.productDescription,
      productImageURL:product.productImageURL
    })
  }

  onUpdate(){
    this.isLoading=true

      this.viewProduct.updateProduct(this.form.value,this.ProductId).subscribe(res=>{
        console.log(res);
      this.toast.success('product Updated successfully')
      this.isLoading=false

        this.getData()
        this.form.reset()
        const btnVal=document.getElementById("cls")
          btnVal?.click()
      })
  }

  onSubmit(){
    this.form.value
  }



  onDelete(id:any){
     this.isLoading=true
    this.viewProduct.deleteProduct(id).subscribe(res=>{
      console.log(res);
      this.isLoading=false
      this.toast.success('product deleted successfully')
      // alert("product will be deleted permanently")
     this.getData()
    })
    
  }
}
