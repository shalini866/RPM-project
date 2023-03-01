import { Component, OnInit } from '@angular/core';
import { CareMangerService } from 'src/app/shared/shared/service/care-manger.service';

@Component({
  selector: 'app-vitals',
  templateUrl: './vitals.component.html',
  styleUrls: ['./vitals.component.scss']
})
export class VitalsComponent implements OnInit {
  noOfDays = -1;
  vitalslist: any;
  constructor(
    private careService: CareMangerService,
  ) {}

  ngOnInit(): void {
    this.vitalslist()
  }
  getvitalsList(){
    console.log("checking the getvitallist",this.getvitalsList);
    
      const payload =
      {
        "vitalTypeID":20,
        "startDate":"2022-08-28",
        "endDate":"2023-02-28",
        "username":"dasfdasf2344"
      }
      this.careService.vitalslist(payload).subscribe((data: any) => {
        console.log("the given lis offf", data);
        
      })

  }
  getList(item: number) {
    this.noOfDays = item;
    this.vitalslist();
  }
}
 