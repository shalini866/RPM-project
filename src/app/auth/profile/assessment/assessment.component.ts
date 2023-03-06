import { Component, Input } from '@angular/core';
import { CareMangerService } from 'src/app/shared/shared/service/care-manger.service';

@Component({
  selector: 'app-assessment',
  templateUrl: './assessment.component.html',
  styleUrls: ['./assessment.component.scss']
})
export class AssessmentComponent {
  profile: any;
  id: any;

  @Input() 
  get getassessmentDetails(){
    return this.profile
  }
  set getassessmentDetails(value: any){
    if(value){
      this.profile = value
      console.log('this is the alert component details', this.profile);
      const id = this.profile
      console.log('check  the patientidffrghb ',id);
      
    }
  }

  constructor(
    private careService : CareMangerService,

  ){

  }
  assesslist(){
    const payload ={
      "clinicID": this.id.clinicID,
    "userID":    this.id.userID,
    "patientID":this.id.patientID
  }
   this.careService.assessmentlist(payload).subscribe((res:any)=>{
    console.log('this is assessment');
    
   })
  }
}
