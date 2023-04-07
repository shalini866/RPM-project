import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment';
import { CareMangerService } from 'src/app/shared/shared/service/care-manger.service';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss']
})
export class DocumentsComponent  implements OnInit{
  profile: any;
  patientUserId: any;
  patientId: any;
  patientUserName: any;
  rows: any;

  constructor( 
    private careService : CareMangerService,
    private activate:ActivatedRoute,
  ){
    // this.activate.queryParamMap.subscribe((queryparam:any)=>{
    //   this.patientId=activate.snapshot.params['patientId']
    //   this.patientUserId=activate.snapshot.queryParams['patientUserId']
    // })
    this.patientUserId = activate.parent?.snapshot.params['userId']
    console.log('check the patientUserId in document',this.patientUserId);
    this.getdocumentlist()
  }
  ngOnInit(): void {
  //  this.getdocumentlist()
  }
  getdocumentlist(){
    const payload ={
       userId:this.patientUserId
    }
  
    this.careService.documentlist(payload).subscribe((res:any) =>{
      console.log('this is documentlist',res);
      this.rows = res.medicalRecordsList
      console.log('checking the document medicalRecordList',this.rows);
    })
  }

  getDateValue(values:any){
  let value;
  if(value == "" || values == "invalid date"){
    value = "-"
  }else if(value){
    value = moment(values).format('DD/MM/YYYY')
  }
  }
}
