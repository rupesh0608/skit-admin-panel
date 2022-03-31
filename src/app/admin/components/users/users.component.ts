import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements AfterViewInit {
  displayedColumns: string[] = ['sno', 'profilepic', 'name', 'email','phone','Moredetail','Action'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  // @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    // this.dataSource.paginator = this.paginator;
  }
}

export interface PeriodicElement {
  sno: number;
  profilepic: string;
  name: string;
email: string;
phone:string;
Moredetail:string;
Action:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {sno: 1, profilepic: 'image', name: 'shubham', email:'sg40303@gmail.com',phone:'7585786668',Moredetail:'ok',Action:'ok'},
  {sno: 1, profilepic: 'image', name: 'shubham', email:'sg40303@gmail.com',phone:'7585786668',Moredetail:'ok',Action:'ok'},
  {sno: 1, profilepic: 'image', name: 'shubham', email:'sg40303@gmail.com',phone:'7585786668',Moredetail:'ok',Action:'ok'},
  {sno: 1, profilepic: 'image', name: 'shubham', email:'sg40303@gmail.com',phone:'7585786668',Moredetail:'ok',Action:'ok'},
  {sno: 1, profilepic: 'image', name: 'shubham', email:'sg40303@gmail.com',phone:'7585786668',Moredetail:'ok',Action:'ok'},
  
];
export class TableBasicExample {
  displayedColumns: string[] = ['sno', 'profilepic', 'name', 'email','phone','Moredetail','Action'];
  dataSource = ELEMENT_DATA;
}

export class InputHintExample {}