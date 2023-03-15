import { Component, Input } from '@angular/core';
import * as moment from 'moment';
import { CareMangerService } from 'src/app/shared/shared/service/care-manger.service';

@Component({
  selector: 'app-assessment',
  templateUrl: './assessment.component.html',
  styleUrls: ['./assessment.component.scss']
})
export class AssessmentComponent {
  profile: any;
  id: any;
  rows:any

  @Input() 
  get getassessmentDetails(){
    return this.profile
  }
  set getassessmentDetails(value: any){
    if(value){
      this.profile = value
      console.log('this is the assessment component details', this.profile);
      // const id = this.profile
      // console.log('check  the patientidffrghbddd ',id);
      
    }
  }

  constructor(
    private careService : CareMangerService,

  ){

  }
  assesslist(){
    // const idd = this.profile
    // console.log('the value in the assesment ',id);
    const payload ={
    "clinicID": this.profile.clinicID,
    "userID":    this.profile.userID,
    "patientID":this.profile.patientID
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
