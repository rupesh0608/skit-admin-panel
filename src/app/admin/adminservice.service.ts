import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminserviceService {


  // url:any="https://s-kit.herokuapp.com"
  url:any="http://localhost:8080"
  job_url:any="https://govtjobsapi.herokuapp.com"
  https_requirements={
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
    })
  }
   token=localStorage.getItem('LoginToken');
  https_requirements_with_token={
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
      'Authorization':`Bearer ${this.token}`
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

  // users component

  getAllUsers(){
    return this.http.get(this.url+'/api/admin/users/all',this.https_requirements_with_token);
  }
  blockUsers(val:any):Observable<any>{
    return this.http.post<any>(this.url+'/api/admin/users/block',val,this.https_requirements);
  }
  unblockUsers(val:any):Observable<any>{
    return this.http.post<any>(this.url+'/api/admin/users/unblock',val,this.https_requirements);
  }
  deleteUsers(val:any):Observable<any>{
    return this.http.post<any>(this.url+'/api/admin/users/delete',val,this.https_requirements);
  }

  //jobs component
  getAllJobs():Observable<any>{
    return this.http.get<any>(this.url+'/api/admin/jobs/all',this.https_requirements);
  }
  submitJob(val:any):Observable<any>{
    return this.http.post<any>(this.url+'/api/admin/jobs/save',val,this.https_requirements);
  }
  updateJob(val:any):Observable<any>{
    return this.http.post<any>(this.url+'/api/admin/jobs/update',val,this.https_requirements);
  }
  publishJob(val:any):Observable<any>{
    return this.http.post<any>(this.url+'/api/admin/jobs/publish',val,this.https_requirements);
  }
  unPublishJob(val:any):Observable<any>{
    return this.http.post<any>(this.url+'/api/admin/jobs/unpublish',val,this.https_requirements);
  }
  deleteJob(val:any):Observable<any>{
    return this.http.post<any>(this.url+'/api/admin/jobs/delete',val,this.https_requirements);
  }


}
