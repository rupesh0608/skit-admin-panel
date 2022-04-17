import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { AdminserviceService } from '../../adminservice.service';
import Swal from 'sweetalert2';
import { EMPTY } from 'rxjs';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements AfterViewInit {
  displayedColumns: string[] = ['Action1', 'sno', 'profilepic', 'name', 'email', 'phone', 'Moredetail'];
  dataSource1 = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  dataSource2 = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  verifiedUsers: any = []
  blockedUsers: any = []
  verifiedActionElementsList = []
  blockedActionElementsList = []
  verifiedActionTab = false
  blockedActionTab = false
  // @ViewChild(MatPaginator) paginator: MatPaginator;


  constructor(private router: Router, private service: AdminserviceService) {
    this.getAllUsers()
  }

  getAllUsers() {
    this.dataSource1 = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
    this.dataSource2 = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
    this.verifiedUsers = []
    this.blockedUsers = []
    this.service.getAllUsers().subscribe((res: any) => {
      if (!res.error) {
        res.verifiedUsers.map((o: any, i: any) => {
          let obj = {
            id: o.id,
            sno: (i + 1),
            profilepic: o.picUrl,
            name: o.firstName + ' ' + o.lastName,
            email: o.email,
            phone: '',
            Moredetail: '',
            isChecked: false
          }
          this.verifiedUsers.push(obj)
        })
        res.blockedUsers.map((o: any, i: any) => {
          let obj = {
            id: o.id,
            sno: (i + 1),
            profilepic: o.picUrl,
            name: o.firstName + ' ' + o.lastName,
            email: o.email,
            phone: '',
            Moredetail: '',
            isChecked: false
          }
          this.blockedUsers.push(obj)
        })
        this.dataSource1 = new MatTableDataSource<PeriodicElement>(this.verifiedUsers);
        this.dataSource2 = new MatTableDataSource<PeriodicElement>(this.blockedUsers);
      }
    })
  }

  ngAfterViewInit() {
    // this.dataSource.paginator = this.paginator;
  }

  checkForActionElements() {
    this.verifiedActionTab = false
    this.blockedActionTab = false
    this.verifiedUsers.map((o: any, i: any) => {
      if (o.isChecked == true) {
        this.verifiedActionTab = true
      }
    })
    this.blockedUsers.map((o: any, i: any) => {
      if (o.isChecked == true) {
        this.blockedActionTab = true
      }
    })
  }

  blockUsers() {
    let ids: any = []
    this.verifiedUsers.map((o: any, i: any) => {
      if (o.isChecked == true) {
        ids.push(o.id)
      }
    })
    this.service.blockUsers(ids).subscribe((res: any) => {
      if (!res.error) {
        Swal.fire({
          icon: 'success',
          text: res.message,
          confirmButtonText: 'ok',
          allowOutsideClick: false,
          allowEscapeKey: false
        }).then((result) => {
          if (result.isConfirmed) {
            this.getAllUsers()
          }
        })
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Something Went wrong...',
          text: res.message,
          allowOutsideClick: false,
          allowEscapeKey: false
        })
      }
    })
  }
  unBlockUsers() {
    let ids: any = []
    this.blockedUsers.map((o: any, i: any) => {
      if (o.isChecked == true) {
        ids.push(o.id)
      }
    })

    this.service.unblockUsers(ids).subscribe((res: any) => {
      if (!res.error) {
        Swal.fire({
          icon: 'success',
          text: res.message,
          confirmButtonText: 'ok',
          allowOutsideClick: false,
          allowEscapeKey: false
        }).then((result) => {
          if (result.isConfirmed) {
            this.getAllUsers()
          }
        })
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Something Went Wrong...',
          text: res.message,
          allowOutsideClick: false,
          allowEscapeKey: false
        })
      }
    })
    this.constructor()
  }

  // deleteUsers(type: String) {
  //   let ids: any = []
  //   if (type == 'verified') {
  //     this.verifiedUsers.map((o: any, i: any) => {
  //       if (o.isChecked == true) {
  //         ids.push(o.id)
  //       }
  //     })
  //   }

  //   if (type == 'blocked') {
  //     this.blockedUsers.map((o: any, i: any) => {
  //       if (o.isChecked == true) {
  //         ids.push(o.id)
  //       }
  //     })
  //   }
  //   this.service.deleteUsers(ids).subscribe((res: any) => {
  //     if (!res.error) {
  //       this.getAllUsers()
  //     } else {
  //       console.log(res.message)
  //     }
  //   })
  // }


  verifiedUsersFilter(value: any) {
    let searchedText = value.target.value
    let data = this.verifiedUsers.filter((o: any, i: any) => {

      if (o.name.toLowerCase().includes(searchedText.toLowerCase()) ||
        o.email.toLowerCase().includes(searchedText.toLowerCase()) ||
        o.phone.toLowerCase().includes(searchedText.toLowerCase()))
        return o
    })
    this.dataSource1 = new MatTableDataSource<PeriodicElement>(data);

  }
  blockedUsersFilter(value: any) {
    let searchedText = value.target.value
    let data = this.blockedUsers.filter((o: any, i: any) => {

      if (o.name.toLowerCase().includes(searchedText.toLowerCase()) ||
        o.email.toLowerCase().includes(searchedText.toLowerCase()) ||
        o.phone.toLowerCase().includes(searchedText.toLowerCase()))
        return o
    })
    this.dataSource2 = new MatTableDataSource<PeriodicElement>(data);

  }

}

export interface PeriodicElement {
  id: number;
  sno: number;
  profilepic: string;
  name: string;
  email: string;
  phone: string;
  Moredetail: string;
  isChecked: Boolean;
}

const ELEMENT_DATA: PeriodicElement[] = [];