import { AfterViewChecked, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NbMenuItem, NbSidebarService } from '@nebular/theme';
import { AuthService } from 'src/app/shared/shared/service/auth.service';
import { ClinicService } from 'src/app/shared/shared/service/clinic.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit, AfterViewChecked {
  title = 'my-app';
  profileId: string | any;
  profile: any;
  patientName: string | any;
  patientID: any;
  patient: any;
  items: NbMenuItem[] = [];

  constructor(
    private authService: AuthService, 
    private sidebarService: NbSidebarService,
   
    
  ){}
 
 
  
  ngOnInit(): void {
    this.profile = this.authService.profile;
   this.items =  [
    {
      title: 'Encounters',
      icon: 'book-outline',  
       link: `/profile/${this.profile.userID}/encounters/encounter/waitingroom`,
    },
   
    {
      title: 'Patients',
      icon: 'people-outline',
      link: `/profile/${this.profile.userID}`,
    },
    {
      title: 'Chat',
      icon: 'message-circle-outline',
      link: `/profile/${this.profile.userID}/chat/index,`
    },
    {
      title: 'MyTasks',
      icon: 'layers-outline',
    },
    {
      title: 'Escalations',
      icon: 'alert-circle-outline',
    },
    {
      title: 'Laboratory',
        icon: 'cube-outline',
    },
    {
      title: 'Reports',
      icon: 'file-text-outline',
    },
   
    {
      title: 'Help',
        icon: 'book-open-outline',
    },
    {
      title: 'Logout',
      icon: 'power-outline',
    },
  ]
  }
   
  ngAfterViewChecked(): void {
    // this.windowHeight();
  }
  //  windowHeight(){
  //   const vh = (window.innerHeight - 125) * 0.01;
  //   console.log('the window innerheight is givne on sidebar:', window.innerHeight, vh);
  //   document.documentElement.style.setProperty('--wh', `${vh}px`);
  //  }
  toggle() {
    this.sidebarService.toggle();
  }

  // logout(){

  // }
  
}
