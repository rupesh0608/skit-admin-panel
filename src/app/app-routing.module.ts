import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AnalyticsComponent } from './admin/components/analytics/analytics.component';
import { CoursesComponent } from './admin/components/courses/courses.component';
import { JobsComponent } from './admin/components/jobs/jobs.component';
import { ServicesComponent } from './admin/components/services/services.component';
import { UsersComponent } from './admin/components/users/users.component';
import { VerificationComponent } from './admin/components/verification/verification.component';
import { DashboardComponent } from './admin/pages/dashboard/dashboard.component';
import { LoginComponent } from './admin/pages/login/login.component';

const approutes: Routes = [
  {
    path: 'admin', component: AdminComponent, children: [
      { path: 'login', component: LoginComponent },
      {
        path: 'dashboard', component: DashboardComponent, children: [
          { path: 'users', component: UsersComponent },
          { path: 'jobs', component: JobsComponent },
          { path: 'courses', component: CoursesComponent },
          { path: 'verification', component:VerificationComponent },
          { path: 'services', component: ServicesComponent },
          { path: 'analytics', component: AnalyticsComponent },
        ]
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(approutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } 
