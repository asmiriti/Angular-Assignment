import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-screen3',
  templateUrl: './screen3.component.html',
  styleUrls: ['./screen3.component.css']
})
export class Screen3Component implements OnInit {

  public name;
  public maxlength;
  public minlength;
  public wordcount;
  public articlecount;
  public vowelcount;
  public hideShow=false;

  getLength()
  {
    let max,min,longest,short;
    let count=0,artcount=0,vcount=0;
    let array=[];
    let article=["a","an","the","AN","THE","An","aN","A"];
    let vowel=['a','e','i','o','u','A','E','I','O','U'];
    this.hideShow=true;
    for(var x = 0; x < this.name.length ; x++)
  {
    if (vowel.indexOf(this.name[x]) !== -1)
    {
      vcount += 1;
    }
  
  }
    
    
      array=this.name.trim().split(/\s+/);
      count=this.name.trim().split(/\s+/).length;
      array.forEach((word, index) => {
        if(article.indexOf(word) !== -1){
          
          array[index]=" ";
          artcount++;
        }
      });

      array=array.filter((e)=>e!=" ");
      console.log(array);
      longest=array.reduce((c, v) => c.length > v.length ? c : v);
      short=array.reduce((c, v) => c.length < v.length ? c : v);

    this.wordcount=count;
    this.maxlength=longest;
    this.minlength=short;
    this.articlecount=artcount;
    this.vowelcount=vcount;
  }
  constructor() { }

  ngOnInit() {
  }

}
