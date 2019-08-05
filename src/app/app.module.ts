import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';  
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LinechartComponent } from './linechart/linechart.component';
import { ChartsModule } from 'ng2-charts';
import { PiechartComponent } from './piechart/piechart.component';
import { HttpClientModule } from '@angular/common/http';
import { Screen3Component } from './screen3/screen3.component';
import {AlldataService} from './alldata.service';
import {FormsModule} from '@angular/forms';
import { BaseChartDirective } from 'ng2-charts';
import {MaterialModule} from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// import  from "@angular/common/http";



@NgModule({
  declarations: [
    AppComponent,
    LinechartComponent,
    PiechartComponent,
    Screen3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,ChartsModule,HttpClientModule,ReactiveFormsModule,FormsModule,MaterialModule,BrowserAnimationsModule
    ,CommonModule   ],
  exports:[ChartsModule,ReactiveFormsModule,FormsModule,BaseChartDirective,MaterialModule,BrowserAnimationsModule,CommonModule ],
  providers: [AlldataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
