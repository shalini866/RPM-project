import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/shared/shared/service/auth.service';
import { CareMangerService } from 'src/app/shared/shared/service/care-manger.service';
import { ClinicService } from 'src/app/shared/shared/service/clinic.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss']
})
export class PatientComponent implements OnInit {
  profile: any;
  rows: any;
  patientvalue: any;
  fullName: any;
  count: any;
  patientid: any;


  constructor(
    private authService: AuthService,
    private clinicService: ClinicService,
    private careService:CareMangerService,
    private routing :ActivatedRoute,
    private route: Router,

  ) { }
  ngOnInit(): void {
    this.getpatient()
  }

  getpatient() {
    this.profile=this.authService.profile
    console.log('check the authservice',this.profile);
    const payload ={
    "clinicID": this.profile.clinicID,
    "firstName":"",
    "lastName":"",
    "term":"",
    "gender":"",
    "dob":"",
    "page":1,
    "count":25,
    "providerID": this.profile.providerID, 
    "careManagerID":"",
    "monitored":-1,
    "sortColumn":"enrollmentDate",
    "sortDirection":0}
    this.careService.patientList(payload).subscribe((res: any) => {
     console.log('checking the patientlist ',res);
     this.count = res
     this.rows = res.list,
     console.log('checking the patientlist in the row',this.rows);
     this.rows.forEach((name:any)=>{
      //  console.log('checking the patientlist in the row',name.firstName);
      // console.log('checking the patientlist in the row',name.lastName);
       name.fullName = name.firstName + name.lastName
        //  console.log('checking the patientlist in the row',this.fullName);
     })   
     
    })

  }

  onActivate(event: any) {
    if (event.type === 'click') {
      this.patientid = event.row.patientID
      console.log('checking the patientid in patientcomponent',this.patientid);
    this.route.navigate(['profile', this.profile.userID, this.patientid])
    console.log('event',event);

    }
  }
}
