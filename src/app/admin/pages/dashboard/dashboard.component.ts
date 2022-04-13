import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-Dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
      token:any=""
  constructor(private http: HttpClientModule, private router: Router, ) {
    this.token = localStorage.getItem('LoginToken');
    if (this.token==null) {
      this.router.navigate(['/admin']);
    }
  }

  ngOnInit() {
  }

  logout(){
    console.log("logout clicked")
    localStorage.removeItem('LoginToken');
    this.router.navigate(['/admin']);
  }

}
