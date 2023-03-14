import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  url = 'https://dull-gold-indri-wig.cyclic.app'

  sendForm(obj:any){
    return this.http.post(this.url+'/user-data',obj).toPromise()
  }

  getData(){
    return this.http.get(this.url+'/user-data').toPromise();
  }
}
