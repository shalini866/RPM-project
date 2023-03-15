import { Component } from '@angular/core';
import { AfterViewChecked, OnInit } from '@angular/core';
import * as moment from 'moment';
import { AuthService } from 'src/app/shared/shared/service/auth.service';
import { ClinicService } from 'src/app/shared/shared/service/clinic.service';
import { Router, } from '@angular/router';



@Component({
  selector: 'app-encounter',
  templateUrl: './encounter.component.html',
  styleUrls: ['./encounter.component.scss']
})
export class EncounterComponent {
  profile: any;
  rows: any;
  encounterlist: any[] = [];
  variable: any;
  statusdetails: any[] =[];
 

  constructor(
    private clinicService: ClinicService,
    private authService: AuthService,
    private routing: Router,

  ) { }
  ngOnInit() {
    this.profile = this.authService.profile;
    console.log('the given profile', this.profile);
    // this.getstatslist()
  }
  // getstatslist() {
  //   const payload = {
  //     "clinicID": this.profile.clinicID,
  //     "providerID": "",
  //     "types":
  //       [{
  //         "type": 6,
  //         "providerOnly": false,
  //         "status": [0, 1, 4]
  //       },
  //       {
  //         "type": 0,
  //         "providerOnly": false,
  //         "status": [0, 1]
  //       },
  //       {
  //         "type": 3,
  //         "providerOnly": false,
  //         "status": [0, 1]
  //       },
  //       {
  //         "type": 4,
  //         "providerOnly": true,
  //         "status": [7]
  //       },
  //       {
  //         "type": 7,
  //         "providerOnly": true,
  //         "status": [2]
  //       },
  //       {
  //         "type": 1,
  //         "providerOnly": true,
  //         "status": [0, 1, 4]
  //       }],
  //     "userID": ""
  //   }
  //   this.clinicService.getStarts(payload).subscribe((res: any) => {
  //     this.statusdetails = res.types;
  //     console.log('the given statusdetails',this.statusdetails);
  //   }, (err: any) => {
  //     console.log('API ERROR');
  //   })
  //   this.encounterslist()
  // }
  
  // getStatsNub(type:any) {
  //   let count = '0';
  //   (this.statusdetails ).map((status: any) => {
  //     if (status.type === type) {
  //       count = status.count.toString();
  //     }
  //   });
  //   return count;
  // }
  

  encounterslist(){
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
    console.log('checking of the value in encounterlist ', new Date());
    this.rows=data.encounterList;
    console.log('the value in the given encounterdata',this.rows);
    this.encounterlist = this.rows.map((rows:any)=>{
      try{
        rows.parseExtraData =JSON.parse(rows?.extraData)
        console.log('checking ths row list',rows.parseExtraData );
        this.variable = rows.parseExtraData 
      } catch(e){
        rows.parseExtraData ={};
      }
      this.variable.gender = rows?.extraData?.gender === 0 ? 'Male' : rows?.extraData?.gender === 1 ? 'Female' : 'Other';

      return rows;
    })
  })
  }
  getDateValue(value: any,) {
    const date = moment(value).format('DD/MM/YYYY hh:m A')
    return date;
  }

}
