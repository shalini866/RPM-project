import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NbDialogService } from '@nebular/theme';
import * as moment from 'moment';
import { CareMangerService } from 'src/app/shared/shared/service/care-manger.service';
import { AlertsNotesComponent } from './alerts-notes/alerts-notes.component';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.scss']
})
export class AlertsComponent implements OnInit {
  profile: any;
  rows: any;
  patientUserName: any;
  // @Input() 
  // get getProfileDetails(){
  //   return this.profile
  // }
  // set getProfileDetails(value: any){
  //   if(value){
  //     this.profile = value
  //     console.log('this is the alert component details', this.profile);
  //     const id = this.profile.patientID
  //     console.log('check  the patientid ',id);  
      
  //   }
  // }
  constructor(
    private careService : CareMangerService,
    private cd: ChangeDetectorRef,
    private dialogService: NbDialogService,
    private activate:ActivatedRoute
  ){
    console.log('checking the alerts1 ',this.activate);
    console.log('checking the alerts2 ',this.activate.parent);
    this.patientUserName = activate.parent?.snapshot.params['patientid']
    this.alertslist()
  }
  ngOnInit(): void {
    // this.alertslist()
  }
  alertslist(){
    this.careService.alertslist(this.patientUserName).subscribe((res:any) =>{
       console.log('this.patientUserName',this.patientUserName)
      console.log('check the alertslist',res);
      this.rows =res.list
      console.log('the getAlertApi API', res);
        console.log('The getAlertApi API data.list', this.rows);
        this.cd.detectChanges();
    })
  }
  alertStatus(value:any){
    switch (value) {
      case 0: value = 'New'; break;
      case 1: value = 'In Process'; break;
      case 2: value = 'Resolved'; break;
      default: value = '-';
    }
    return value;
  }
  getDateValue(value: any){
    let date_value = moment(value).format('YYYY-MM-DD')
    // console.log("this is getDateValue", date_value);
    return date_value;
  } 
  viewNotes( data : any){
  const modalRef:any =this.dialogService?.open(AlertsNotesComponent);
  modalRef.componentRef.instance.alertData = data;  
  }
  }
  
