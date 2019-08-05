import { Component, OnInit} from '@angular/core';
import {AlldataService} from '../alldata.service';
import {Idata} from '../typedata'
import {FormBuilder,FormGroup} from '@angular/forms';


@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.css']
})
export class PiechartComponent implements OnInit {
  
  formData:FormGroup;
  public value;

  onSubmit() {
    // Process checkout data here
    this.value=this.formData.value;
    console.log('Your order has been submitted',this.value);


  
}

  constructor(private allData:AlldataService, private fb:FormBuilder) {

    this.formData=this.fb.group({

      labels:'',
      values:'',


    });



   }
    
    public datai:(Array<Idata>);
     //coloR = [];
     public days:string[];
     public issues:number[];
     public pieChartLabels:string[];
     public pieChartData:number[];
     public pieChartType:string;
     public pieChartColors:any ;
     public color:any;
     public pieChartOptions:any;
     public barChartType="bar";
     public doughnutChartType = 'doughnut';
     public columnChartType= "horizontalBar";
     public lineChartType='line';
     
     


     
     //public pieChartOptions:any;
  
     
  //    get_rand_color()
  // {
  //   var color = Math.floor(Math.random() * Math.pow(256, 3)).toString(16);
  //   while(color.length < 6) {
  //       color = "0" + color;
  //   }
  //   return "#" + color;
  // }

  public lineChartOptions: any = {

    responsive: true,
    fill:false,
    maintainAspectRatio:false,
    scales : {
        yAxes: [{
            ticks: {
            beginAtZero: true,
                stepValue: 0,
                steps: 10,
              max : 100,
            }
        }]
      },
      labels: {
        boxWidth: 40
      },
      groupSpacing : 0.57,

     
};


public columnChartOptions: any = {

  responsive: true,
  
  maintainAspectRatio:false,
  scales : {
      xAxes: [{
          ticks: {
          beginAtZero: true,
              stepValue: 0,
              steps: 10,
            max : 100,
          }
      }]
    },
    labels: {
      boxWidth: 40
    },
    groupSpacing : 0.57,

   
};


   update()
   {
     console.log(this.formData.value);
    this.days.push(this.formData.value.labels);
    this.issues.push(this.formData.value.values);
    this.color.push(this.dynamicColors());
    this.piechart();   
   }
  

   piechart()
    {

      this.pieChartOptions = {
        responsive: true,
        maintainAspectRatio:false
    }
      
      // console.log(value);
      // this.days.push(value.day);
      // this.issues.push(value.issues);
      
      this.pieChartLabels = this.days;
      this.pieChartData =this.issues;
      this.pieChartType = 'pie';
      
      this.pieChartColors=[
        {backgroundColor:this.color}
        
      
        
      ];

    }
      


    
    
   dynamicColors = function() {
     var r = Math.floor(Math.random() * 255);
     var g = Math.floor(Math.random() * 255);
     var b = Math.floor(Math.random() * 255);
   return "rgb(" + r + "," + g + "," + b + ")";
 };


ngOnInit () {

  
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

        
        
        this.color=[this.dynamicColors(),this.dynamicColors(),this.dynamicColors(),this.dynamicColors(),this.dynamicColors()];
        this.piechart();

        

      
  



        
    
   });



// events on slice click


    
}




}






