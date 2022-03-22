import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AnalyticsComponent } from './components/analytics/analytics.component';
import { CoursesComponent } from './components/courses/courses.component';
import { JobsComponent } from './components/jobs/jobs.component';
import { ServicesComponent } from './components/services/services.component';
import { UsersComponent } from './components/users/users.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  { path: 'admin', component:AdminComponent,children:[
    {path:'',component:LoginComponent},
    {path:'dashboard',redirectTo:'dashboard/users',component:DashboardComponent,children:[
      {path:'users',component:UsersComponent},
      {path:'jobs',component:JobsComponent},
      {path:'courses',component:CoursesComponent},
      {path:'services',component:ServicesComponent},
      {path:'analytics',component:AnalyticsComponent},
    ]}
  ]}
];

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})

export class AdminRoutingModule {}
