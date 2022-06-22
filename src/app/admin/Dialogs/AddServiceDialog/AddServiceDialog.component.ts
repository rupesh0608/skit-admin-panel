import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
export interface DialogData {
  title: string;
  name: string;
}
@Component({
  selector: 'app-AddServiceDialog',
  templateUrl: './AddServiceDialog.component.html',
  styleUrls: ['./AddServiceDialog.component.scss']
})
export class AddServiceDialogComponent{
     isImageSelected:Boolean=false
  ngOnInit() {
  }
  constructor(
    public dialogRef: MatDialogRef<AddServiceDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}
  onNoClick(): void {
    this.dialogRef.close();
  }
  AddService(title:String){
     if(title=="Module"){
       console.log("Add Module")
     }
     if(title=="Service"){
      console.log("Add Service")
    }
  }

}
