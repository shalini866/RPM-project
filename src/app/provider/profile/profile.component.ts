import { AfterViewChecked, ChangeDetectorRef, Component, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NbDialogService, NbRouteTab } from '@nebular/theme';
import { AuthService } from 'src/app/shared/shared/service/auth.service';
import { CareMangerService } from 'src/app/shared/shared/service/care-manger.service';
import { ClinicService } from 'src/app/shared/shared/service/clinic.service';

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
    private router: Router,) 
    {
      console.log('this is activatedRoute', activatedroute.snapshot.data['profileData']);
    this.vitalList = this.clinicservice.getvitals();
    console.log('check the vitallist data',this.vitalList);

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
    console.log('the value in the input field',this.Firstname);
  //  console.log('the value in the lastname input field',this.Lastname);
   console.log("checking the value of ", this.selectedlist);
   

    const payload = {
      "userID": this.authService.profile.userID,
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
    if(!!search){
      console.log('this.selectedGender--',this.selectedGender);
      payload.gender = this.selectedGender;
      payload.monitored= this.monitored
      payload.firstName=this.Firstname;
      payload.firstName=this.Lastname;

    }
   
    this.authService.search(payload).subscribe((data: any) => {
      if (!this.profile) {
        this.profileList(data.clinicPatientList[0])
      }
      console.log('data', data.clinicPatientList);
      this.searchUser = data.clinicPatientList
      console.log('value in the data.clinicPatientList', data.clinicPatientList);
    })
   
  
  }

  profileList(event:any){
    console.log('checkinggg%%%%%%',event.patientID);
    const payload ={
   
      userID : this.authService.profile.userID, 
      patientID : event.patientID ,
      clinicID : "1000254" ,
    }
    this.careService.displayProfile(payload).subscribe((res:any) =>{
      this.profile = res;
      console.log('$$$$$$$$$$$$$$$$',res);
      
      this.router.navigate(['profile', this.authService.profile.userID, this.profile.patientID, 'snapshot'], {
        queryParams: {
          patientUserId: this.profile.userID,
        } 
      })

      console.log('checkkkkkkkkkkk  the userid',res.userID);
      
    //    this.careService.snapshotlist(this.profile).subscribe((res:any)=>{
    //     console.log('snapshot list',res);
    //     this.patientVitalList = res.vitalsList;
    //     console.log('this is patientVitallist', this.patientVitalList);
    //     const patientVitalList = this.patientVitalList.map((list: any) => {
    //       const vitalName = this.vitalList.find((datas: any) => {
    //         if (datas.vitalType === list.vitalTypeID) {
    //           return datas;
    //         } else {
    //           return '';
    //         }
    //       });
    //       list.vitalName = vitalName?.name;
    //       try {
    //         list.vitalData = JSON.parse(list.vitalData);
    //       } catch {
    //         list.vitalData = {};
    //       }
    //       return list;
    //     })
    //     this.patientVitalList = patientVitalList;
    //     this.aranageVitals()
    // })
    })
   
  }
  // getalertslist(data:any){
  //   this.careService.alertslist(this.profile).subscribe((res:any) =>{
  //     console.log('check the alertslist',res);
      
  //   })
  // }
  // aranageVitals() {

  //   this.patientVitalList.map((list: any) => {
  //     if (list.vitalName === "Blood Pressure") {
  //       const payload = {
  //         name: 'Blood Pressure',
  //         time: list.vitalDate,
  //         value: list.vitalData.S + '/' + list.vitalData.D + '-' + list.vitalData.R
  //       };
  //       this.bloodPressure = payload.value;
  //       this.cd.detectChanges();      
  //     }
  //       else if(list.vitalName === "SPO2"){
  //         const payload = {
  //           name: 'SPO2',
  //           value:list.vitalData.O + ' %' + ' - ' +list.vitalData.R
  //         };
  //         this.spo2 = payload.value;
  //         this.cd.detectChanges();
  //       }
  //       else if(list.vitalName === 'Glucose'){
  //         const payload = {
  //           name: 'Glucose',
  //           value: list.vitalData.V + list.vitalData.U
  //         }
  //         this.glucose = payload.value;
  //         this.cd.detectChanges()
  //       }
  //       else if (list.vitalName === "Weight"){
  //         const payload = {
  //           name: 'Weight',
  //           value: list.vitalData.W + list.vitalData.U
  //         }
  //         this.weight = payload.value;
  //         this.cd.detectChanges()
  //       }
  //       else if(list.vitalName === 'Temperature'){
  //         const payload = {
  //           name: 'Temperature',
  //           value: list.vitalData.T
  //         }
  //         this.temperature = payload.value;
  //         this.cd.detectChanges()
  //       }
  //       else if(list.vitalName === 'ECG'){
  //         const payload = {
  //           name: 'ECG',
  //           // value: list.vitalData.T
  //         }
  //         // this.ecg = payload.value;
  //         this.cd.detectChanges()
  //       }
  //       else if(list.vitalName === "Pain Level"){
  //         const payload = {
  //           name: "Pain Level",
  //           value: list.vitalData.L
  //         }
  //         this.painLevel = payload.value;
  //         this.cd.detectChanges()
  //       }
  //       else if(list.vitalName === "Peak Flow"){
  //         const payload = {
  //           name: "Peak Flow",
  //           value: list.vitalData.PEF + "- " + list.vitalData.FEV1 + " - " + list.vitalData.FVC
  //         }
  //         this.peakFlow = payload.value;
  //         this.cd.detectChanges()
  //       }
  //       else if(list.vitalName === "Height"){
  //         const payload = {
  //           name: "Height",
  //           value: list.vitalData.H
  //         }
  //         this.height = payload.value;
  //         this.cd.detectChanges()
  //       }
  //       else if(list.vitalName === "PHQ9"){ 
  //         const payload = {
  //           name: "PHQ9",
  //           value: list.vitalData.Q
  //         }
  //         this.phq9 = payload.value;
  //         this.cd.detectChanges()
  //       }
  //   });
  // } 
 

  // onChangeTab(event: any) {
  //   if (event.tabTitle === 'VITALS') {
  //   }
  //   if (event.tabTitle === 'ALERTS') {
  //     // if (this.profile) {
  //     //   this.getalertslist(this.profile)
  //     // }
  //   }
  // }
  tabChanged($event: any) {
    console.log($event)
    if ($event.title === 'Snapshot') {
      this.router.navigate(['profile', this.authService.profile.userID, this.profile.patientID, 'snapshot'], {
        queryParams: {
          patientUserId: this.profile.userID,
        }
      })
    }
     else if ($event.title === 'Vitals') {
      this.router.navigate(['profile', this.authService.profile.userID, this.profile.patientID, 'vitals'])
    }  
    else if ($event.title === 'Alerts') {
      this.router.navigate(['profile', this.authService.profile.userID, this.profile.patientID, 'alerts'])
    }
    else if ($event.title === 'Assessments') {
      this.router.navigate(['profile', this.authService.profile.userID, this.profile.patientID, 'assessments'], {
        queryParams: {
          patientUserId: this.profile.userID,
        }
      })
    }
    else if ($event.title === 'Documents') {
      this.router.navigate(['profile', this.authService.profile.userID, this.profile.patientID, 'documents'])
    }
    else if ($event.title === 'History') {
      this.router.navigate(['profile', this.authService.profile.userID, this.profile.patientID, 'history'],{
        queryParams: {
          patientUserId: this.profile.userID,
        }
      })
    }
    else if ($event.title === 'Tasks') {
      this.router.navigate(['profile', this.authService.profile.userID, this.profile.patientID, 'task'])
    }
  }
}
 
