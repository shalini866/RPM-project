import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NbDialogService } from '@nebular/theme';
import { AuthService } from 'src/app/shared/shared/service/auth.service';
import { ClinicService } from 'src/app/shared/shared/service/clinic.service';

@Component({
  selector: 'app-group-meeting',
  templateUrl: './group-meeting.component.html',
  styleUrls: ['./group-meeting.component.scss']
})
export class GroupMeetingComponent implements OnInit {
  dialogRef: any;
  rows: any;



  constructor(
    private dialogService :NbDialogService,
    private authService : AuthService,
    private clinicService: ClinicService,
  ){
  }
  ngOnInit(): void {
    this.groupMeeting()
  }
  
 groupMeeting(){
  const payload ={
  "clinicID":this.authService.profile.clinicID,
  "moderator":this.authService.profile.screenName,
  }
  this.clinicService.groupmeeting(payload).subscribe((res:any)=>{
   console.log('res',res);
    this.rows = res.list
    console.log('checking the meetinglist',this.rows);
  })
 }
}
