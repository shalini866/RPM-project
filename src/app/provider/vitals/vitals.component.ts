import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Chart } from 'chart.js';
import * as moment from 'moment';
import { CareMangerService } from 'src/app/shared/shared/service/care-manger.service';

@Component({
  selector: 'app-vitals',
  templateUrl: './vitals.component.html',
  styleUrls: ['./vitals.component.scss']
})
export class VitalsComponent implements OnInit , AfterViewInit {
  noOfDays = -1;
  vitalslist: any;
  profile:any
  selectedDateRange = {
    start: new Date('1900-02-01'),
    end: new Date()
  };
  name = 'Angular   6';
  canvas: any;
  ctx: any;

  @ViewChild('mychart') mychart:any
  patientUserName: any;
  constructor(
    private careService: CareMangerService,
    private activate: ActivatedRoute,
  ) {
    // this.activate.paramMap.subscribe((queryparam: any) => {
    //   console.log('£££££$$$',queryparam);
    //   this.patientUserName = activate.snapshot.params['patientId']
    //   console.log('checking the patientuserid in queryparam ^^^^^^***',this.patientUserName);
    // }) 
    this.patientUserName = activate.parent?.snapshot.params['patientid']
    console.log('checking the param in vitals',this.patientUserName);
    this.getList(-1)
  }
 
  ngOnInit(): void {
  }
  ngAfterViewInit() {
    this.canvas = this.mychart.nativeElement as HTMLCanvasElement; 
    this.ctx = this.canvas.getContext('2d');

    let myChart = new Chart(this.ctx, {
      type: 'line',
      
      data: {
        datasets: [{
          label: 'Line Chart',
          backgroundColor: "rgba(255, 99, 132,0.4)",
          borderColor: "rgb(255, 99, 132)",
          fill: true,
          data: [
            { x: 1, y: 2 },
            { x: 2500, y: 2.5 },
            { x: 3000, y: 5 },
            { x: 3400, y: 4.75 },
            { x: 3600, y: 4.75 },
            { x: 5200, y: 6 },
            { x: 6000, y: 9 },
            { x: 7100, y: 6 },
          ],
        }]
      }
      
    });
    
  }
  
  getvitalsList(){
    const fromDates = new Date(this.selectedDateRange.start).getTime();
    const toDates = new Date(this.selectedDateRange.end).getTime();
      const payload =
      {
        "vitalTypeID":20,
        startDate: moment(fromDates).format('YYYY-MM-DD'),
        endDate: moment(toDates).format('YYYY-MM-DD'),
        "username": this.patientUserName
      }
      this.careService.vitalslist(payload).subscribe((data: any) => {
        console.log("the given list offf vitals", data);
        
      })

  }
  getList(item: number) {
    this.noOfDays = item;
    let fromDate = moment().add(-118, 'years').valueOf();
    const toDate = moment().valueOf();
    let unit;
    switch (item) {
      case -1: fromDate = moment('1900-02-01').startOf('day').valueOf(); unit = 'month'; break;
      case 7: fromDate = moment().add(-7, 'days').startOf('day').valueOf(); unit = 'day'; break;
      case 14: fromDate = moment().add(-14, 'days').startOf('day').valueOf(); unit = 'day'; break;
      case 31: fromDate = moment().add(-1, 'months').startOf('day').valueOf(); unit = 'day'; break;
      case 90: fromDate = moment().add(-3, 'months').startOf('day').valueOf(); unit = 'month'; break;
      case 180: fromDate = moment().add(-6, 'months').startOf('day').valueOf(); unit = 'month'; break;
      case 365: fromDate = moment().add(-1, 'years').startOf('day').valueOf(); unit = 'month'; break;
      default: fromDate = moment().add(-118, 'years').startOf('day').valueOf(); unit = 'month';
    }
    this.selectedDateRange = {
      start: new Date(fromDate),
      end: new Date(toDate)
    };
    this.getvitalsList();
  }
  selectedDate(event: any) {
    const ranges = event;
    if (ranges.start && ranges.end) {
      ranges.start = new Date(moment(ranges.start).startOf('day').valueOf());
      ranges.end = new Date(moment(ranges.end).endOf('day').valueOf());
      const days = moment(ranges.end).diff(moment(ranges.start), 'days');
      this.selectedDateRange.start = new Date(moment(ranges.start).startOf('day').valueOf());
      this.selectedDateRange.end = new Date(moment(ranges.end).endOf('day').valueOf());

      this.getvitalsList();
    }
  }
}
