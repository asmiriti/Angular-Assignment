import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,MatButtonModule,MatInputModule,MatFormFieldModule,MatStepperModule
  ]
  ,exports:[MatButtonModule,MatInputModule,MatFormFieldModule,MatStepperModule]
})
export class MaterialModule { }
