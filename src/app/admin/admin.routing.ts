import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  { path: 'admin', component:AdminComponent,children:[
    {path:'login',component:LoginComponent},
    {path:'dashboard',component:DashboardComponent}
  ]}
];

export const AdminRoutes = RouterModule.forChild(routes);
