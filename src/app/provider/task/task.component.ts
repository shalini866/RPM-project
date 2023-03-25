import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment';
import { CareMangerService } from 'src/app/shared/shared/service/care-manger.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {
  profile: any;
  dateValue = moment(new Date()).format('YYYY-MM-DD');
  patientUserId: any;
// @Input()
// get gettaskdetails(){
//   return this.profile
// }
// set gettaskdetails(value:any){
//   if(value){
//     this.profile = value
//     const id=this.profile.patientID
//     console.log('this is task patientid',id);
//   }
// }
  
  constructor(       
    private careService:CareMangerService,
    private activate: ActivatedRoute,
  ){
    this.activate.queryParamMap.subscribe((queryparam: any) => {
      this.patientUserId = activate.snapshot.queryParams['patientUserId']
      console.log('checking the patientuserid in queryparam ^^^^^^***',this.patientUserId);
      this.gettasklist()
    })
  }
 
  gettasklist(type?: any){
    if (type === -1) {
     this.dateValue =  moment(this.dateValue).subtract(1, 'days').format('YYYY-MM-DD');
    } else if (type === 1 ) {
      this.dateValue =  moment(this.dateValue).add(1, 'days').format('YYYY-MM-DD');
    } else {
      this.dateValue = moment(new Date()).format('YYYY-MM-DD');
    }
    const data={
    "byUsername":"",
    "forUsername":this.patientUserId,
    "date": this.dateValue,
  }
    
    this.careService.taskstartlist(data).subscribe((res:any)=>{
      console.log('this is tasklist',res);
      
    })

    const payload={
      "completedBy":this.patientUserId,
      "assignedDateFrom":moment(new Date()).format('YYYY-MM-DD'),
      "assignedDateTo":moment(new Date()).format('YYYY-MM-DD'),
      "page":1,
      "count":200
    }
    this.careService.taskcompletelist(payload).subscribe((res:any)=>{
     console.log('this is task completelist',res);
     
    })
  }
}
