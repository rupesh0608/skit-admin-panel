import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './admin/pages/dashboard/dashboard.component';
import { LoginComponent } from './admin/pages/login/login.component';

const approutes: Routes = [
  { path: 'admin', component: AdminComponent,children:[
    {path:'login',component:LoginComponent},
    {path:'dashboard',component:DashboardComponent}
  ]},

];

@NgModule({
  imports: [RouterModule.forRoot(approutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {} 
