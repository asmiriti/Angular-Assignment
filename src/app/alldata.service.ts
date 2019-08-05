import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient} from '@angular/common/http';
import {Idata} from './typedata';

@Injectable({
  providedIn: 'root'
})
export class AlldataService {

  private _url="assets/data.json";
  constructor(private http:HttpClient) { }

  getConfig():Observable<Idata[]> {
    
      return this.http.get<Idata[]>(this._url)
  }
  
  

}
