import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './admin/pages/dashboard/dashboard.component';
import { LoginComponent } from './admin/pages/login/login.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SlidenavComponent } from './slidenav/slidenav.component';

const routes: Routes = [
  {path: '', redirectTo: 'home',pathMatch:  'full'},

    {path:'login',component:LoginComponent},
    {path:'dashboard',component:DashboardComponent},
    {path:'home',component:HomeComponent},
     
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {} 
