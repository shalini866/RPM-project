import { Component, Input, OnInit } from '@angular/core';
import { CareMangerService } from 'src/app/shared/shared/service/care-manger.service';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss']
})
export class DocumentsComponent  implements OnInit{
  profile: any;
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

  ){

  }
  ngOnInit(): void {
   this.getdocumentlist()
  }
  getdocumentlist(){
    const payload ={
    }
    this.careService.documentlist(payload).subscribe((res:any) =>{
      console.log('this is documentlist',res);
    })
  }
}
