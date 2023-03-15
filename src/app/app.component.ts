import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from './shared/shared/service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'my-app';
  profileId: string | any;
  profile: any;
  patientName: string | any;
  patientID: any;
  patient: any;

  constructor(
    private authService: AuthService,
  ){}
  ngOnInit(): void {
    // this.profile = this.authService.profile;
    // console.log('check the profile in app',this.profile);
    
  }
}
