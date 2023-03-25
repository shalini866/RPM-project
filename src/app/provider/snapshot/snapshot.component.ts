import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NbDialogService } from '@nebular/theme';
import { AuthService } from 'src/app/shared/shared/service/auth.service';
import { CareMangerService } from 'src/app/shared/shared/service/care-manger.service';
import { ClinicService } from 'src/app/shared/shared/service/clinic.service';

@Component({
  selector: 'app-snapshot',
  templateUrl: './snapshot.component.html',
  styleUrls: ['./snapshot.component.scss']
})
export class SnapshotComponent implements OnInit {
  profile: any;
  patientVitalList: any = [];
    vitalList: any;
    vitalsOriginal: any[] = [];
    bloodPressure = '';
    spo2 = '';
    glucose = '';
    weight = '';
    temperature ='';
    ecg = '';
    painLevel = '';
    height = '';
    phq9 = '';
    peakFlow = "";
  patientId: any;
  patientUserId: any;
  // @Input()
  // get getsnapshotdetails(){
  //   return this.profile
  // }
  // set getsnapshotdetails(value:any){
  //   if(value){
  //     this.profile = value
  //     this.profileList()
  //   }
  // }
    constructor(
      private authService: AuthService,
      private dialogService: NbDialogService,
      private careService : CareMangerService,
      private clinicservice: ClinicService,
      private cd: ChangeDetectorRef,
      private activate: ActivatedRoute,
    ){
      this.profile = this.authService.profile;
      this.activate.queryParamMap.subscribe((queryparam: any) => {
        this.patientUserId = activate.snapshot.queryParams['patientUserId']
        console.log('checking the patientuserid in queryparam ^^^^^^***',this.patientUserId);
        this.getSnapshot()
      })
      this.vitalList = this.clinicservice.getvitals(); 
    }
  
    ngOnInit(): void {
    
    }
  
    getSnapshot(){
      console.log('the snapshot patientuserid %%%%%%%%%%%',this.patientUserId);
      this.careService.snapshotlist(this.patientUserId).subscribe((res:any)=>{ 
        console.log('snapshot list',res);
        this.patientVitalList = res.vitalsList; 
        console.log('this is patientVitallist', this.patientVitalList);
        const patientVitalList = this.patientVitalList.map((list: any) => {
          const vitalName = this.vitalList.find((datas: any) => {
            if (datas.vitalType === list.vitalTypeID) {
              return datas; 
            } else {
              return '';
            }
          });
          list.vitalName = vitalName?.name;
          try {
            list.vitalData = JSON.parse(list.vitalData);
          } catch {
            list.vitalData = {};
          }
          return list;
        })
        this.aranageVitals();
        
    })
    }
  
    aranageVitals() {
      this.patientVitalList.map((list: any) => {
        if (list.vitalName === "Blood Pressure") {
          const payload = {
            name: 'Blood Pressure',
            time: list.vitalDate,
            value: list.vitalData.S + '/' + list.vitalData.D + '-' + list.vitalData.R
          };
          this.bloodPressure = payload.value;
          this.cd.detectChanges();      
        }
          else if(list.vitalName === "SPO2"){
            const payload = {
              name: 'SPO2',
              value:list.vitalData.O + ' %' + ' - ' +list.vitalData.R
            };
            this.spo2 = payload.value;
            this.cd.detectChanges();
          }
          else if(list.vitalName === 'Glucose'){
            const payload = {
              name: 'Glucose',
              value: list.vitalData.V + list.vitalData.U
            }
            this.glucose = payload.value;
            this.cd.detectChanges()
          }
          else if (list.vitalName === "Weight"){
            const payload = {
              name: 'Weight',
              value: list.vitalData.W + list.vitalData.U
            }
            this.weight = payload.value;
            this.cd.detectChanges()
          }
          else if(list.vitalName === 'Temperature'){
            const payload = {
              name: 'Temperature',
              value: list.vitalData.T
            }
            this.temperature = payload.value;
            this.cd.detectChanges()
          }
          else if(list.vitalName === 'ECG'){
            const payload = {
              name: 'ECG',
              // value: list.vitalData.T
            }
            // this.ecg = payload.value;
            this.cd.detectChanges()
          }
          else if(list.vitalName === "Pain Level"){
            const payload = {
              name: "Pain Level",
              value: list.vitalData.L
            }
            this.painLevel = payload.value;
            this.cd.detectChanges()
          }
          else if(list.vitalName === "Peak Flow"){
            const payload = {
              name: "Peak Flow",
              value: list.vitalData.PEF + "- " + list.vitalData.FEV1 + " - " + list.vitalData.FVC
            }
            this.peakFlow = payload.value;
            this.cd.detectChanges()
          }
          else if(list.vitalName === "Height"){
            const payload = {
              name: "Height",
              value: list.vitalData.H
            }
            this.height = payload.value;
            this.cd.detectChanges()
          }
          else if(list.vitalName === "PHQ9"){
            const payload = {
              name: "PHQ9",
              value: list.vitalData.Q
            }
            this.phq9 = payload.value;
            this.cd.detectChanges()
          }
      });
    }
  
    refreshclick(){
      this.getSnapshot();
    }
  }
