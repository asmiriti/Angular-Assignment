import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import {AlldataService} from '../alldata.service';
import {Idata} from '../typedata'
import { Chart } from 'chart.js';


@Component({
  selector: 'app-linechart',
  templateUrl: './linechart.component.html',
  styleUrls: ['./linechart.component.css']
})
export class LinechartComponent implements OnInit {
  @ViewChild('canvasline',{static: true}) canvasline: ElementRef;
  @ViewChild('canvasarea',{static: true}) canvasarea: ElementRef;

  
  
  constructor(private allData:AlldataService) { }
   
  public datai:(Array<Idata>);
  public days;
  public issues;
  chartline:Chart;
  chartarea:Chart;
  arraydata=["2016","2017","2018","2019","2020","2021","2022","2023","2024","2025","2026"];

  randomFunction()
  {
    let minimum=10;
    let maximum=100;
    var randomnumber = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
    

    var item:string = this.arraydata[Math.floor(Math.random()*this.arraydata.length)];
    
    console.log(this.chartline);
    this.chartline.config.data.labels.push(item);
   this.chartline.config.data.datasets[0].data.push(randomnumber);

    this.chartline.update();
    this.chartarea.update();


  }


  

  








  
  ngOnInit() {

    this.allData.getConfig().subscribe(
    
      data=>{
          
          this.datai=data;
          //console.log(this.datai);
          this.days=this.datai.map(function(element)
          {
              return element.day;
              //console.log(element.day);
              //this.days.push(element.day);
              
          });
          this.issues=this.datai.map(function(element)
          {
              return element.issues;
              //console.log(element.day);
              //this.days.push(element.day);
              
          }); 
          
            this.chartline = new Chart("line", {
              type: 'line',
              data: {
                labels: this.days,
                datasets: [
                  {
                    data:this.issues,
                    borderColor: 'yellow',
                    fill: false
                  }
                 
                ]
              },
              options: {
                legend: {
                  display: false
                },
                scales: {
                  xAxes: [{
                    display: true
                  }],
                  yAxes: [{
                    display: true,
                    ticks: {
                      beginAtZero: true,
                         max : 100,
                      }
                  }]
                }
              }
            })
            
            this.chartarea = new Chart("area", {
              type: 'line',
          
              data: {
                labels: this.days,
                datasets: [
                  {
                    data:this.issues,
                    borderColor: 'yellow',
                    fill: true,
                    backgroundColor:'#778899',
                  }
                 
                ]
              },
              
              options: {
                maintainAspectRatio: true,
                legend: {
                  display: false
                },
                plugins: {
                  filler: {
                      propagate: true
                  }
              },
                scales: {
                  xAxes: [{
                    display: true
                  }],
                  yAxes: [{
                    display: true,
                    ticks: {
                      beginAtZero: true,
                        
                        
                        max : 100,
                      }
                  }]
                }
              }
            })
    
    
        });
          
        

          
     
     
  }
  
  





 }
