import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { AdminserviceService } from '../../adminservice.service';
export interface DialogData {
  title: string;
  name: string;
  link:string;
  id:number
}
@Component({
  selector: 'app-AddServiceDialog',
  templateUrl: './AddServiceDialog.component.html',
  styleUrls: ['./AddServiceDialog.component.scss']
})
export class AddServiceDialogComponent{
     isImageSelected:Boolean=false
     image:any
  ngOnInit() {
  }
  constructor(
    public dialogRef: MatDialogRef<AddServiceDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private service: AdminserviceService
  ) {}
  onNoClick(): void {
    this.dialogRef.close();
    this.image=undefined
  }
  AddService(title:String){
     if(title=="Module"){
       this.createServiceModule()
     }
     if(title=="Service"){
      this.createService(this.data.id)
    }
  }
  onImageSelected(event:any){
   this.image=event.target.files[0];
  }
  createServiceModule() {
    let formData: FormData = new FormData();
    formData.append('image', this.image);
    formData.append('name', this.data.name);
    this.service.createServiceModule(formData).subscribe((res:any) => {
      if (!res.error) {
        this.dialogRef.close(this.data.title);
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
  createService(moduleId:any) {
    console.log("Moduleid",moduleId)
    let formData: FormData = new FormData();
    formData.append('image', this.image);
    formData.append('name', this.data.name);
    formData.append('moduleId',moduleId);
    formData.append('link',this.data.link);
    this.service.createService(formData).subscribe((res:any) => {
      if (!res.error) {
        this.dialogRef.close(this.data.title);
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
