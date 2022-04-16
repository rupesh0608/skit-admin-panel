import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminserviceService {


  url:any="https://s-kit.herokuapp.com"
  // url:any="https://192.168.29.243:8080"
  job_url:any="https://govtjobsapi.herokuapp.com"
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

   //admin Auth
   admin_login(val:any):Observable<any>{
     return this.http.post<any>(this.url+'/api/admin/auth/login',val,this.https_requirements);
   }
  //jobs component
  getBankJobs():Observable<any>{
    return this.http.get(this.job_url+'/freejobalert/bank-jobs');
  }
  getEngineeringJobs():Observable<any>{
    return this.http.get(this.job_url+'/freejobalert/engineering-jobs');
  }
  getDefenceJobs():Observable<any>{
    return this.http.get(this.job_url+'/freejobalert/defence-jobs');
  }
  getRailwayJobs():Observable<any>{
    return this.http.get(this.job_url+'/freejobalert/railway-jobs');
  }
  getTeachingJobs():Observable<any>{
    return this.http.get(this.job_url+'/freejobalert/teaching-jobs');
  }
  
  



}
