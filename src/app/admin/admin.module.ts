import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AdminRoutes } from './admin.routing';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutes
  ],
  declarations: [AdminComponent]
})
export class AdminModule { }