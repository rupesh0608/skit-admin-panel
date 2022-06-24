import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AdminserviceService } from '../../adminservice.service';
import { AddServiceDialogComponent } from '../../Dialogs/AddServiceDialog/AddServiceDialog.component';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  fileName = ""
  imageSrc: any
  imageSrc1: any

  file: any
  name: any
  link: any
  category: any
  // serviceList: any = []
  tabNo: number
  constructor(private router: Router, private service: AdminserviceService, private dialog: MatDialog) {
    this.tabNo = 0
    this.getAllServices()

  }
  ngOnInit() {
  }
  triggerFileInput() {
    document.getElementById('logo')!.click();
  }
  onFileSelected(event: any) {
    this.file = event.target.files[0]
    this.fileName = this.file.name
    const reader = new FileReader();
    reader.readAsDataURL(this.file);
    reader.onload = (e) => { this.imageSrc = reader.result };
  }

  // createService() {

  //   let formData: FormData = new FormData();
  //   formData.append('logo', this.file);
  //   this.service.uploadServiceLogo(formData).subscribe(res => {
  //     if (!res.error) {
  //       let obj = {
  //         'logo': res.message,
  //         'name': this.name,
  //         'link': this.link,
  //         'category': this.category
  //       }
  //       this.service.createService(obj).subscribe((res) => {
  //         if (!res.error) {
  //           this.clearForm()
  //           Swal.fire({
  //             icon: 'success',
  //             text: res.message,
  //             confirmButtonText: 'ok',
  //             allowOutsideClick: false,
  //             allowEscapeKey: false
  //           })
  //           // }).then((result) => {
  //           //   if (result.isConfirmed) {
  //           //   }
  //           // })
  //         } else {

  //           this.file = undefined
  //           this.fileName = ""
  //           this.imageSrc1 = undefined
  //           this.name = ""
  //           this.category = ""
  //           this.link = ""
  //           Swal.fire({
  //             icon: 'error',
  //             text: res.message,
  //             confirmButtonText: 'ok',
  //             allowOutsideClick: false,
  //             allowEscapeKey: false
  //           })
  //         }
  //       })
  //     }
  //     else {
  //       Swal.fire({
  //         icon: 'error',
  //         text: res.message,
  //         confirmButtonText: 'ok',
  //         allowOutsideClick: false,
  //         allowEscapeKey: false
  //       })
  //     }
  //   })
  // }

  clearForm() {
    this.imageSrc1 = ""
    this.imageSrc = ""
    this.fileName = ""
    this.name = ""
    this.category = ""
    this.link = ""
  }
  onTabChange(value: any) {

    if (value.index == 0) {
      this.getAllServices()
    }

  }

  // deleteService(id: number) {
  //   this.service.deleteServices(id).subscribe((res: any) => {
  //     if (!res.error) {
  //       Swal.fire({
  //         icon: 'success',
  //         text: res.message,
  //         confirmButtonText: 'ok',
  //         allowOutsideClick: false,
  //         allowEscapeKey: false
  //       })
  //       this.getAllServices()
  //     } else {
  //       Swal.fire({
  //         icon: 'error',
  //         text: res.message,
  //         confirmButtonText: 'ok',
  //         allowOutsideClick: false,
  //         allowEscapeKey: false
  //       })
  //     }
  //   })
  // }

  editService(item: any) {
    this.imageSrc1 = item.link
    this.imageSrc = item.link
    this.fileName = item.link
    this.name = item.name
    this.category = item.category
    this.link = item.link
    this.tabNo = 1
  }

  //////////////////////////////////////////////////////////////////////////

  serviceModuleList: any
  serviceList: any
  moduleId:number=0
  addServiceBtn:Boolean=false
  openAddModuleDialog() {
    const dialogRef = this.dialog.open(AddServiceDialogComponent, {
      width: '250px',
      data: { name: this.name, title: "Module" },
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result=="Module"){
        this.serviceModuleList=[]
          this.getAllServices()
      }
    });
  }
  openAddServiceDialog() {
     if(this.moduleId!=undefined){
      const dialogRef = this.dialog.open(AddServiceDialogComponent, {
        width: '250px',
        data: { name: this.name, title: "Service",id:this.moduleId },
      });
      dialogRef.afterClosed().subscribe(result => {
        if(result=="Service"){
          this.moduleId=0
          this.serviceModuleList=[]
      this.serviceList=[]
            this.getAllServices()
        }
      });
     }
    

    
  }
  getAllServices() {
    this.addServiceBtn=false
    this.service.getAllServices().subscribe((res: any) => {
      if (!res.error) {
        console.log("==> Services", res.data)
        this.serviceModuleList = res.data
      }
    })
  }
  openServices(item:any) {
    this.addServiceBtn=true
    this.moduleId=item.id
    console.log("ServiceList",item.services)
    this.serviceList =item.services
  }
  createServiceModule() {

    let formData: FormData = new FormData();
    formData.append('image', this.file);
    formData.append('name', "test Module");
    this.service.createServiceModule(formData).subscribe((res:any) => {
      if (!res.error) {
        Swal.fire({
          icon: 'success',
          text: res.message,
          confirmButtonText: 'ok',
          allowOutsideClick: false,
          allowEscapeKey: false
        })
      } else {
        Swal.fire({
          icon: 'error',
          text: res.message,
          confirmButtonText: 'ok',
          allowOutsideClick: false,
          allowEscapeKey: false
        })
      }
    })
  }
  deleteServiceModule(id:any) {
    this.service.deleteServiceModule(id).subscribe((res:any) => {
      if (!res.error) {
        this.getAllServices()
        Swal.fire({
          icon: 'success',
          text: res.message,
          confirmButtonText: 'ok',
          allowOutsideClick: false,
          allowEscapeKey: false
        })
      } else {
        Swal.fire({
          icon: 'error',
          text: res.message,
          confirmButtonText: 'ok',
          allowOutsideClick: false,
          allowEscapeKey: false
        })
      }
    })
  }
  deleteService(id:any) {
    this.service.deleteService(this.moduleId,id).subscribe((res:any) => {
      if (!res.error) {
        this.serviceList=[]
        this.getAllServices()
        Swal.fire({
          icon: 'success',
          text: res.message,
          confirmButtonText: 'ok',
          allowOutsideClick: false,
          allowEscapeKey: false
        })
      } else {
        Swal.fire({
          icon: 'error',
          text: res.message,
          confirmButtonText: 'ok',
          allowOutsideClick: false,
          allowEscapeKey: false
        })
      }
    })
  }
  enableDisableService(id:any) {
    this.service.enableDisableService(id).subscribe((res:any) => {
      if (!res.error) {
        this.serviceList=[]
        this.getAllServices()
        Swal.fire({
          icon: 'success',
          text: res.message,
          confirmButtonText: 'ok',
          allowOutsideClick: false,
          allowEscapeKey: false
        })
      } else {
        Swal.fire({
          icon: 'error',
          text: res.message,
          confirmButtonText: 'ok',
          allowOutsideClick: false,
          allowEscapeKey: false
        })
      }
    })
  }
  enableDisableServiceModule(id:any) {
    this.service.enableDisableServiceModule(id).subscribe((res:any) => {
      if (!res.error) {
        this.serviceList=[]
        this.getAllServices()
        Swal.fire({
          icon: 'success',
          text: res.message,
          confirmButtonText: 'ok',
          allowOutsideClick: false,
          allowEscapeKey: false
        })
      } else {
        Swal.fire({
          icon: 'error',
          text: res.message,
          confirmButtonText: 'ok',
          allowOutsideClick: false,
          allowEscapeKey: false
        })
      }
    })
  }
     

}
