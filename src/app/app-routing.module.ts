import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PiechartComponent } from './piechart/piechart.component';
import { LinechartComponent } from './linechart/linechart.component';
import { Screen3Component } from './screen3/screen3.component';
const routes: Routes = [

  {
    path:'barchart',
    component:LinechartComponent
  },
  {
    path:'piechart',
    component:PiechartComponent
  },
  {
    path:'screen',
    component:Screen3Component
  }
  ,
  {
    path:'**',
    redirectTo:' '
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
