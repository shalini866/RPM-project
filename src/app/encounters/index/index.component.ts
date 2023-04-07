import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/shared/service/auth.service';
import { ClinicService } from 'src/app/shared/shared/service/clinic.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent {
  encounterlist: any[] = [];
  variable: any;
  statusdetails: any[] =[];
  profile: any;
  type: any =[];
  isLoadingss = false;
  rows: any;
  constructor(
    private clinicService: ClinicService,
    private authService: AuthService,
    public route: Router,
    
  ){
    
  }
  ngOnInit() {
    this.profile = this.authService.profile;
    console.log('the given profile', this.profile);
    this.getstatslist()
  }

  getstatslist() {
    const payload = {
      "clinicID": this.profile.clinicID,
      "providerID": "",
      "types":
        [{
          "type": 6,
          "providerOnly": false,
          "status": [0, 1, 4]
        },
        {
          "type": 0,
          "providerOnly": false,
          "status": [0, 1]
        },
        {
          "type": 3,
          "providerOnly": false,
          "status": [0, 1]
        },
        {
          "type": 4,
          "providerOnly": true,
          "status": [7]
        },
        {
          "type": 7,
          "providerOnly": true,
          "status": [2]
        },
        {
          "type": 1,
          "providerOnly": true,
          "status": [0, 1, 4]
        }], 
      "userID": this.profile.userID
    }
    this.clinicService.getStarts(payload).subscribe((res: any) => {
      this.statusdetails = res.types;
      console.log('the given statusdetails',this.statusdetails);
    }, (err: any) => {
      console.log('API ERROR');
    })
 
  }
  getStatsNub(type:any) {
    let count = '0';
    (this.statusdetails ).map((status: any) => {
      if (status.type === type) {
        count = status.count.toString();
      }
    });
    return count;
  }
 bucket(type:any){
  this.getstatslist()
  this.route.navigate([`/profile/${this.profile.userID}/encounters/encounter/${type}`])
 }
 
}
