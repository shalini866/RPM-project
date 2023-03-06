import { Component, Input } from '@angular/core';
import { CareMangerService } from 'src/app/shared/shared/service/care-manger.service';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.scss']
})
export class AlertsComponent {
profile: any;
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
){

}
alertslist(){
  this.careService.alertslist(this.profile).subscribe((res:any) =>{
    console.log('check the alertslist',res);
    
  })
}
}
