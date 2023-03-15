import { Component } from '@angular/core';
import { AfterViewChecked,  OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/shared/service/auth.service';
import { ClinicService } from 'src/app/shared/shared/service/clinic.service';


@Component({
  selector: 'app-encounter',
  templateUrl: './encounter.component.html',
  styleUrls: ['./encounter.component.scss']
})
export class EncounterComponent  {
  profile: any;  
  
  constructor(
    private clinicService :ClinicService,
    private authService: AuthService, 
  ){}
  ngOnInit(){
    this.profile = this.authService.profile;
    console.log('the given profile',this.profile);
    
    this.encounters()
  }
encounters(){
  const payload={
    "clinicID":this.profile.clinicID,
    "providerID":"",
    "types":[{"type":6,"providerOnly":false,
    "status":[0,1,4]},
    {"type":0,"providerOnly":false,
    "status":[0,1]},
    {"type":3,"providerOnly":false,"status":[0,1]},
    {"type":4,"providerOnly":true,"status":[7]},
    {"type":7,"providerOnly":true,"status":[2]},
    {"type":1,"providerOnly":true,"status":[0,1,4]}],
    "userID":""}
    this.clinicService.getStarts(payload).subscribe((res:any)=>{
      console.log('the given value in the getstarts ',res);
    })

    const data={
      "clinicID":this.profile.clinicID,
      "name":"",
      "pageNumber":1,
      "pageSize":25,
      "providerID":this.profile.userName,
      "userID":this.profile.userID,
      "providerOnly":false,
      "sortBy":0,
      "status":[0,1,4],
      "type":6}
    this.clinicService.encountersList(data).subscribe((data:any)=>{
      console.log('checking of the value in encounterlist ',data);
      
    })
}
}
