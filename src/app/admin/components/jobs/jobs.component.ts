import { analyzeAndValidateNgModules } from '@angular/compiler';
import { OnInit ,Component, ViewChild,} from '@angular/core';
import {FormControl} from '@angular/forms';
import { MatMenuTrigger } from '@angular/material/menu';
import { Router } from '@angular/router';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { AdminserviceService } from '../../adminservice.service';
@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements OnInit {

   bankjobsList:any=[]
   teachingjobsList:any=[]
   defencejobsList:any=[]
   railwayjobsList:any=[]
   engineeringjobsList:any=[]
   joblist:any=[]

   formItem:any=''



   m_postName:any=""
   m_postDate:any=""
   m_qualifications:any=""
   m_lastDate:any=""
   m_postBoard:any=""
   m_link:any=""
   m_type:any=""
   
   cancelBtnEligible:Boolean=false

  constructor(private router: Router,private service: AdminserviceService){

  }

  ngOnInit(): void {
    
  }
  value = 'Clear me';

  sendDataToForm(item:any){
     this.formItem=item
    this.cancelBtnEligible=true
    this.joblist= this.joblist.filter((x:any)=>x!=item)
        this.m_postName=item.postName
        this.m_postBoard=item.postBoard.trim()
        this.m_qualifications=item.qualification.trim()
        this.m_postDate=item.postDate.trim()
        this.m_lastDate=item.lastDate.trim()
        this.m_link=item.link.trim()
        this.m_type=item.type.trim()
  }
  revertFormData(){
     if(this.cancelBtnEligible){
       this.joblist.push(this.formItem)
       this.clearFormData()
     }else{
      this.clearFormData()
     }
  }
  teachingChipsClicked(){
    this.joblist=this.teachingjobsList.map((obj:any) => ({ ...obj, type: 'Teaching' }))
    this.clearFormData()
  }
  railwayChipsClicked(){

    this.joblist=this.railwayjobsList.map((obj:any) => ({ ...obj, type: 'Railway' }))
    this.clearFormData()
  }
  defenceChipsClicked(){
    this.joblist=this.defencejobsList.map((obj:any) => ({ ...obj, type: 'Defence' }))
    this.clearFormData()
  }
  engineeringChipsClicked(){
    this.joblist=this.engineeringjobsList.map((obj:any) => ({ ...obj, type: 'Engineering' }))
    this.clearFormData()
  }
  bankChipsClicked(){
    this.joblist=this.bankjobsList.map((obj:any) => ({ ...obj, type: 'Banking' }))
    this.clearFormData()
  }


  clearFormData(){
    this.formItem=''
    this.m_postName=""
        this.m_postBoard=""
        this.m_qualifications=""
        this.m_postDate=""
        this.m_lastDate=""
        this.m_link=""
        this.m_type=""
  }

  fetchJobs(){
    this.joblist=[];
    this.clearFormData()
      this.getGovtBankJobs()
      this.getDefenceJobs()
      this.getGovtTeachingJobs()
      this.getRailwayJobs()
      this.getGovtEngineeringJobs()
  }

  getGovtBankJobs(){
     this.service.getBankJobs().subscribe(res=>{
        this.bankjobsList=res
     })
  }

  getGovtTeachingJobs(){
    this.service.getTeachingJobs().subscribe(res=>{
      this.teachingjobsList=res
      
   })
  }

  getGovtEngineeringJobs(){
    this.service.getEngineeringJobs().subscribe(res=>{
      this.engineeringjobsList=res
   })
  }

  getRailwayJobs(){
    this.service.getRailwayJobs().subscribe(res=>{
      this.railwayjobsList=res
   })
  }

  getDefenceJobs(){
    this.service.getDefenceJobs().subscribe(res=>{
      this.defencejobsList=res
   })
  }
  


}