import { Component, Input } from '@angular/core';
import { CareMangerService } from 'src/app/shared/shared/service/care-manger.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent {
  profile: any;
  @Input() 
  get gethistoryDetails(){
    return this.profile
  }
  set gethistoryDetails(value: any){
    if(value){
      this.profile = value
      console.log('this is the history component details', this.profile);
      const id = this.profile.userID
      console.log('check  the patientidffrghb ',id);
      
    }
  }
  constructor(
    private careService:CareMangerService
  ){}
  gethistorylist(){
    this.careService.historylist(this.profile).subscribe((res:any)=>{
      console.log('this is historylist',res);
      
    })
  }
}
