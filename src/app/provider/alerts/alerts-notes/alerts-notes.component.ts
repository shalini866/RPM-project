import { Component, OnInit } from '@angular/core';
import { NbDialogRef, NbDialogService } from '@nebular/theme';
import { CareMangerService } from 'src/app/shared/shared/service/care-manger.service';

@Component({
  selector: 'app-alerts-notes',
  templateUrl: './alerts-notes.component.html',
  styleUrls: ['./alerts-notes.component.scss']
})
export class AlertsNotesComponent implements OnInit {
  alertsDataList: any
 constructor(private dialogService: NbDialogService,
 public dialog: NbDialogRef<AlertsNotesComponent>, 
  private careService: CareMangerService,
  
  ){}
  ngOnInit(): void {
    console.log('checking', this.alertData);
    this.viewNotes();
  }
  viewNotes() {
     this.careService.alertlistApi(this.alertData.id).subscribe((data: any)=>{
      console.log("this is Alert Action API data", data);
      this.alertsDataList = data.list;      
    })
  }
  alertData: any;
}
