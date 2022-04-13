import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminserviceService {


  url:any="https://s-kit.herokuapp.com"
  https_requirements={
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
    })
  }
   constructor(private http:HttpClient) { 

   }

   admin_login(val:any):Observable<any>{
     return this.http.post<any>(this.url+'/api/admin/auth/login',val,this.https_requirements);
   }

}
