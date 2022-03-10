import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
const exportMaterial=[
  MatFormFieldModule, MatInputModule,MatCardModule,MatButtonModule
]
@NgModule({
  declarations: [],
  imports: [
    exportMaterial
  ],

  exports:[
    exportMaterial
  ]
})
export class MaterialModule { }
