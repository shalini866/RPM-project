import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment';
import { AuthService } from 'src/app/shared/shared/service/auth.service';
import { CareMangerService } from 'src/app/shared/shared/service/care-manger.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent {
  profile: any;
  rows: any;
  patientUserId: any;
  patientId: any;
  // @Input() 
  // get gethistoryDetails(){
  //   return this.profile
  // }
  // set gethistoryDetails(value: any){
  //   if(value){
  //     this.profile = value
  //     console.log('this is the history component details', this.profile);
  //     const id = this.profile.userID
  //     console.log('check  the patientidffrghb ',id);
      
  //   }
  // }
  constructor(
    private careService:CareMangerService,
    private authSerivce:AuthService,
    private activate: ActivatedRoute,
  ){
    this.activate.queryParamMap.subscribe((queryparam: any) => {
       this.patientId = activate.snapshot.params['patientId']
       console.log('checking the history patientid',this.patientId)
      this.patientUserId = activate.snapshot.queryParams['patientUserId']
      console.log('checking the patientuserid in queryparam ^^^^^^***',this.patientUserId);
      this.gethistorylist()
    })
  }
  gethistorylist(){
    this.careService.historylist(this.patientUserId).subscribe((res:any)=>{
      console.log('this is historylist',res);
      this.rows = res.list
      console.log('checking the date & time ',this.rows);
    })
  }
  getDateValue(value: any, type: any){
    if (type === 1) {
      return moment(value).format('MM/DD/YYYY hh:m A')
    }
    if (type === 2) {
      if (value !== -1 && value !== 0) {
        let seconds: any = value;
        let minutes: any = Math.floor(seconds / 60);
        let hours: any = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);
        hours = hours - (days * 24);
        minutes = minutes - (days * 24 * 60) - (hours * 60);
        seconds = seconds - (days * 24 * 60 * 60) - (hours * 60 * 60) - (minutes * 60);
        hours = (hours).toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false });
        minutes = (minutes).toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false });
        seconds = (seconds).toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false });
        return hours + ':' + minutes + ':' + seconds;
      } else {
        return '-';
      }
    }
    return 0;
  }

}
