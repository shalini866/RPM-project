import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/shared/service/auth.service';
import { ClinicService } from 'src/app/shared/shared/service/clinic.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss']
})
export class PatientComponent implements OnInit{
  profile: any;


  constructor(
    private authService :AuthService,
    private clinicService: ClinicService
  ){}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
 
   getpatient(){
    this.profile = this.authService.profile
    console.log('checking the authservice profile',this.profile);
 
   }
}
