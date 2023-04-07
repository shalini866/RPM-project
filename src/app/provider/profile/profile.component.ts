import { AfterViewChecked, ChangeDetectorRef, Component, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NbDialogService, NbRouteTab } from '@nebular/theme';
import { AuthService } from 'src/app/shared/shared/service/auth.service';
import { CareMangerService } from 'src/app/shared/shared/service/care-manger.service';
import { ClinicService } from 'src/app/shared/shared/service/clinic.service';
import { FormsComponent } from './forms/forms.component';
import { TestformComponent } from './testform/testform.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit, AfterViewChecked {
  profileId: string | any;
  profile: any;
  patientName: string | any;
  patientID: any;
  patient: any;
  singleSelectGroupValue = [];
  patientSearch = '';
  searchUser: [] | any;
  selectedGender: any;
  monitored:any;
  showPassword: any;
  caps = false;
  lower = false;
  number = false;
  length =false;
  showbtn = false;
  addPatient = ''
  Lastname=''
  Firstname ='';
  providerName:any;
  userslist: [] | any
  selectedlist = ''
  userId: any;
  vitals: any;
  vitalList: any;
  patientVitalList: any = [];
  vitalsOriginal: any[] = [];
  patientId: any;
  patientUserId: any
 
  tabs: NbRouteTab[] = [
    {
      title: 'Snapshot',
    },
    {
      title: 'Vitals',
    },
    {
      title: 'Alerts',
    },
    {
      title: 'Assessments',
    },
    {
      title: 'Documents',
    },
    {
      title: 'History',
    },
    {
      title: 'Tasks',
    },
  ];

  constructor(private cd: ChangeDetectorRef,
    private authService: AuthService,
    private dialogService: NbDialogService,
    private careService : CareMangerService,
    private clinicservice: ClinicService,
    private activatedroute: ActivatedRoute,
    private router: Router,
    private activate: ActivatedRoute,
    ) 
    {
      console.log('this is activatedRoute', activatedroute.snapshot.data['profileData']);
    this.vitalList = this.clinicservice.getvitals();
    console.log('check the vitallist data',this.vitalList);
    
    this.activate.paramMap.subscribe((queryparam)=>{
      console.log('checking the param in profile',queryparam);
      this.userId = queryparam.get('userId')
      this.patientUserId = activate.snapshot.params['patientid']
        console.log('checking the patientuserid in queryparam in profile',this.patientUserId);
      this.profileList(this.patientUserId)
     })
  } 

  route(data:any){
    console.log('route#######',data);
    
    this.router.navigate([`profile`,this.userId, data.patientID])
     }
  open(dialog: TemplateRef<any>) {

    this.careService.careManger().subscribe((data:any) =>{
      this.userslist = data
      console.log('the careManger data', this.userslist);
      this.userslist = data.clinicProviderList || []
      this.dialogService.open(dialog, {});

    })
    
  }
  updateSingleSelectGroupValue(value: any): void {
    this.singleSelectGroupValue = value;
    this.cd.markForCheck();
  }

  updateGenderValue(value: any) {
    this.selectedGender=value[0]
    this.monitored=value[0]
  }

  ngOnInit() {
    // this.profile = this.authService.profile;
    console.log('the data in the profile', this.profile);
    this.searchPatient();

  }
      
  ngAfterViewChecked() {
    this.windowHeight();

  }

  windowHeight() {
    const vh = (window.innerHeight - 125) * 0.01;
      //console.log('the window innerheight is givne on leftcard:', window.innerHeight, vh);
    // console.log('---',document.documentElement.style.setProperty('--wh', `${vh}px`));
    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty('--wh', `${vh}px`);

  }
  refreshclick(){
    window.location.reload();
  } 

  valuechange(value: any){
    console.log('valuechange', value);
    if(value.length>1){
      console.log('value.length', value.length);
      if(value.length >= 9){
        this.length = true
      }
      else{
        this.length = false
      }
      const upperCase = "^(?=.*[A-Z])" ;
      if(value.match(upperCase)){
        this.caps = true
      }
      else{
        this.caps = false
      }
      const lowerCase = "^(?=.*[a-z])";
      if(value.match(lowerCase)){
        this.lower = true
      }
      else{
        this.lower = false
      }
      const number = "^(?=.*\\d)";
      if(value.match(number)){
        this.number = true
      } 
      else{
        this.number = false
      }
    }
  }

  searchPatient(search?: any) {
    // console.log('the selectedGender value',this.selectedGender);
    // console.log('the patientSearch', this.patientSearch);
    // console.log('the value in the input field',this.Firstname);
  //  console.log('the value in the lastname input field',this.Lastname);
  //  console.log("checking the value of ", this.selectedlist);
    const payload = {
      "userID": this.userId,
      "clinicID": this.authService.profile.clinicID,
      "firstName": "",
      "lastName": "",
      "dob": "",
      "gender": "",
      "pageNumber": 1,
      "count": 25, 
      "monitored": -1,
      "morbidity": -1,
      "providerID": '', 
      "alarm": -1,
      "careManagerID": this.selectedlist,
      "term": this.patientSearch
    };
    console.log('checking the payload in searchpatient',this.userId);
    if(!!search){
      console.log('this.selectedGender--',this.selectedGender);
      payload.gender = this.selectedGender;
      payload.monitored= this.monitored
      payload.firstName=this.Firstname;
      payload.firstName=this.Lastname;

    }
   
    this.authService.search(payload).subscribe((data: any) => {
      if (!this.profile) {
        // this.profileList(data.clinicPatientList[0])
      } 
      this.searchUser = data.clinicPatientList
      console.log('value in the data.clinicPatientList', data.clinicPatientList);
    })
   
  
  }

  profileList(event:any){
    console.log('checkinggg%%%%%%',event.patientID);
    const payload ={
   
      userID : this.userId, 
      patientID :this.patientUserId  ,
      clinicID : "1000254" ,
    }
    this.careService.displayProfile(payload).subscribe((res:any) =>{
      this.profile = res;
      console.log('$$$$$$$$$$$$$$$$',res);
      
      this.router.navigate(['profile', this.userId, this.patientUserId, 'snapshot'], {
        queryParams: {
          patientUserId: this.profile.userID,
        } 
      })
      console.log('checkkkkkkkkkkk  the router navigate',this.patientUserId);
       
    })
   
  }

  tabChanged($event: any) {
    console.log($event)
    if ($event.title === 'Snapshot') {
      console.log('check%%%%%%%%%%%%%  the router navigate',this.patientUserId);
      this.router.navigate(['profile', this.userId, this.patientUserId, 'snapshot'], {
        queryParams: {
          patientUserId: this.profile.userID,
        }
      })
    }
     else if ($event.title === 'Vitals') {
      this.router.navigate(['profile', this.userId, this.patientUserId, 'vitals'],{
        queryParams: {
          patientUserId: this.profile.userID,
        }
      })
    }  
    else if ($event.title === 'Alerts') {
      this.router.navigate(['profile', this.userId, this.patientUserId, 'alerts'],{
        // queryParams: {
        //   patientUserId: this.profile.userID,
        // }
      })
      
    }
    else if ($event.title === 'Assessments') {
      this.router.navigate(['profile', this.userId, this.patientUserId, 'assessments'], {
        queryParams: {
          patientUserId: this.profile.userID,
        }
      })
    }
    else if ($event.title === 'Documents') {
      this.router.navigate(['profile', this.userId, this.patientUserId, 'documents'],{
        queryParams:{
          patientUserId:this.profile.userID
        }
      })
    }
    else if ($event.title === 'History') {
      this.router.navigate(['profile', this.userId, this.patientUserId, 'history'],{
        queryParams: {
          patientUserId: this.profile.userID,
        }
      })
    }
    else if ($event.title === 'Tasks') {
      this.router.navigate(['profile', this.userId, this.patientUserId, 'task'],{
        queryParams:{
          patientUserId:this.profile.userID,
        }
      })
    }
  }
 
forms(){
  const modalRef:any =this.dialogService?.open(FormsComponent);
  // modalRef.componentRef.instance.
}
forms2(){
  const modalRef:any =this.dialogService?.open(TestformComponent);
}
}
 
