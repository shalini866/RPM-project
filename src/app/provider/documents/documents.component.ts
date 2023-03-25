import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CareMangerService } from 'src/app/shared/shared/service/care-manger.service';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss']
})
export class DocumentsComponent  implements OnInit{
  profile: any;
  patientUserId: any;
  patientId: any;
  // @Input() 
  // get getdocumentsDetails(){
  //   return this.profile
  // }
  // set getdocumentsDetails(value: any){
  //   if(value){
  //     this.profile = value
  //     console.log('this is the alert component details', this.profile);
  //     const id = this.profile.userID
  //     console.log('check  the patientidffrghb ',id);
      
  //   }
  // }
  constructor( 
    private careService : CareMangerService,
    private activate:ActivatedRoute,
  ){
    this.activate.queryParamMap.subscribe((queryparam:any)=>{
      // this.patientId=activate.snapshot.params['patientId']
      this.patientUserId=activate.snapshot.queryParams['patientUserId']
      this.getdocumentlist()
    })
  }
  ngOnInit(): void {
  //  this.getdocumentlist()
  }
  getdocumentlist(){
    const payload ={
       userId:this.patientUserId
    }
  
    this.careService.documentlist(payload).subscribe((res:any) =>{
      console.log('this is documentlist',res);
    })
  }
}
