import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminserviceService } from '../../adminservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isLogedIn:any=false;
  token:any=""
  email:any=""
  password:any=""
  errorMsg:String=""

  constructor(private router: Router,private service: AdminserviceService) { 
    this.token=localStorage.getItem('LoginToken');
    if(this.token !=null)
    {
      this.router.navigate(['/admin/dashboard']);
    }
  }

  ngOnInit() {
  }

  login(){
    this.errorMsg=""
    this.service.admin_login({"email":this.email,"password":this.password}).subscribe(res=>{
       if(res.error==false && res.statusCode==200 && res.role.name=="ADMIN"){
         this.token=res.token
        localStorage.setItem('LoginToken',this.token);
        this.router.navigate(['/admin/dashboard']);
       }
       else{
         this.errorMsg=res.message
       }
    })
  }

}
