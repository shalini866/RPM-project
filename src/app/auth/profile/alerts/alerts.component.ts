import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import * as moment from 'moment';
import { CareMangerService } from 'src/app/shared/shared/service/care-manger.service';
import { AlertsNotesComponent } from './alerts-notes/alerts-notes.component';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.scss']
})
export class AlertsComponent {
profile: any;
  rows: any;
@Input() 
get getProfileDetails(){
  return this.profile
}
set getProfileDetails(value: any){
  if(value){
    this.profile = value
    console.log('this is the alert component details', this.profile);
    const id = this.profile.patientID
    console.log('check  the patientid ',id); 
    
  }
}
constructor(
  private careService : CareMangerService,
  private cd: ChangeDetectorRef,
  private dialogService: NbDialogService
){

}
alertslist(){
  this.careService.alertslist(this.profile).subscribe((res:any) =>{
    console.log('check the alertslist',res);
    this.rows =res.list
    console.log('the getAlertApi API', res);
      console.log('The getAlertApi API data.list', this.rows);
      this.cd.detectChanges();
  })
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
