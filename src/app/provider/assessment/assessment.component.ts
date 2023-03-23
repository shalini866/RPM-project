import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment';
import { AuthService } from 'src/app/shared/shared/service/auth.service';
import { CareMangerService } from 'src/app/shared/shared/service/care-manger.service';

@Component({
  selector: 'app-assessment', 
  templateUrl: './assessment.component.html',
  styleUrls: ['./assessment.component.scss']
})
export class AssessmentComponent implements OnInit {
  profile: any;
  id: any;
  rows:any
  patientUserId: any;
  patientId: any;
  // @Input() 
  // get getassessmentDetails(){
  //   return this.profile
  // }
  // set getassessmentDetails(value: any){
  //   if(value){
  //     this.profile = value
  //     console.log('this is the assessment component details', this.profile);
  //     // const id = this.profile
  //     // console.log('check  the patientidffrghbddd ',id);
      
  //   }
  // }

  constructor(
    private careService : CareMangerService,
    private auth: AuthService,
     private activate: ActivatedRoute,
  ){
    this.activate.paramMap.subscribe((queryparam)=>{
      this.patientId = activate.snapshot.params['patientId']
      this.patientUserId = activate.snapshot.queryParams['patientUserId']
        console.log('checking the patientuserid in queryparam ^^^^^^***',this.patientUserId);
        this.assesslist()
     })
  }
  ngOnInit(): void {
    // this.assesslist()
  }
  assesslist(){
    // const idd = this.profile
    // console.log('the value in the assesment ',id);
    const payload ={
    "clinicID": this.auth.profile.clinicID,
    "userID":    this.patientUserId,
    "patientID": this.patientId
  }
   this.careService.assessmentlist(payload).subscribe((res:any)=>{
    console.log('this is assessment',res);
    this.rows = res.encounterList;
    console.log('checking the value of ',this.rows);
    
    const list = this.rows.map((row:any)=>{
      try{
        row.parseExtraData = JSON.parse(row.extraData)
      } catch(e) {
        row.parseExtraData = {}; 
      }
      return row;
    })
    this.rows = [...list];
   })
  }
  getValue(value: any){
    let date_value = moment(value).format('DD-MM-YYYY hh:mm A')
    return date_value;
  }
}
