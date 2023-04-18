import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import * as moment from 'moment';
import { AuthService } from 'src/app/shared/shared/service/auth.service';
import { ClinicService } from 'src/app/shared/shared/service/clinic.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ColumnMode } from '@swimlane/ngx-datatable';
import { NbDialogService } from '@nebular/theme';
import { GroupMeetingComponent } from './group-meeting/group-meeting.component';




@Component({
  selector: 'app-encounter',
  templateUrl: './encounter.component.html',
  styleUrls: ['./encounter.component.scss']
})
export class EncounterComponent implements OnInit {
  profile: any;
  rows: any;
  ColumnMode = ColumnMode;
  encounterlist: any;
  statusdetails: any;
  data: any
  finaldate: { fromdatesss: number, toDatesss: number } = {
    fromdatesss: 0,
    toDatesss: 0
  }
  encounterBucket: any;
  noOfDays: any;
  dateValue = moment(new Date()).format('YYYY-MM-DD')
  a: any;
  ascc: any;

  constructor(
    private clinicService: ClinicService,
    private authService: AuthService,
    private routing: ActivatedRoute,
    private route: Router,
    private dialogService:NbDialogService,
  ) {
    this.profile = this.authService.profile;
    this.routing.params.subscribe((data: any) => {
      console.log('%%%%%%', data);
      this.encounterBucket = data.buckets;
      console.log('$$$$$',data.buckets);
      if (this.encounterBucket === 'scheduled') {
        this.getdate(1);
      } else {
        this.bucket(this.encounterBucket)
      }
    })
  }
  ngOnInit() {
    // console.log('the given profile', this.profile);
    // this.bucket(this.encounterBucket)  
  }


  getdate(events: any) {
    let fromdate = moment().valueOf();
    let todate = moment().valueOf();
    this.noOfDays = events;
    if (events == 1) {
      fromdate = moment().startOf('day').valueOf();
      todate = moment().endOf('day').valueOf();
    } else if (events == 7) {
      fromdate = moment().startOf('isoWeek').valueOf();
      todate = moment().endOf('isoWeek').valueOf();
    } else if (events == 31) {
      fromdate = moment().startOf('month').valueOf();
      todate = moment().endOf('month').valueOf();
    }
    this.finaldate = {
      fromdatesss: new Date(fromdate).getTime(),
      toDatesss: new Date(todate).getTime(),
    }
    if (events === -1) {
      this.dateValue = moment(this.dateValue).subtract(1, 'days').format('YYYY/MM/DD');
    } else if (events === 1) {
      this.dateValue = moment(this.dateValue).add(1, 'days').format('YYYY/MM/DD');
    } else {
      this.dateValue = moment(new Date()).format('YYYY/MM/DD');
    }
    this.bucket('scheduled')
  }
  bucket(data: any, sort?: { sortBy: number, sortDirection: number }) {
    let payload: any = {
      "clinicID": this.profile.clinicID,
      "providerID": this.profile.userName,
      "userID": this.profile.userID,
      "pageNumber": 1,
      "name": "",
      "pageSize": 25,
    }
    switch (data) {
      case 6:
      case 'waitingroom':
        if (!sort) {
          sort = { sortBy: 0, sortDirection: 0 };
        }
        payload = {
          ...payload,
          "providerOnly": false,
          "sortBy": sort.sortBy,
          "status": [0, 1, 4],
          "type": 6,
          "sortDirection": sort.sortDirection,

        }
        break;
      case 1:
      case 'scheduled':
        if (!sort) {
          sort = { sortBy: 3, sortDirection: 0 };
        }
        payload = {
          ...payload,
          "providerOnly": true,
          "sortBy": sort.sortBy,
          "status": [0, 1, 4],
          "type": 1,
          "sortDirection": sort.sortDirection,
          "start": this.finaldate.fromdatesss,
          "end": this.finaldate.toDatesss
        }
        break;
      case 0:
      case 'asynchronous':
        if (!sort) {
          sort = { sortBy: 0, sortDirection: 0 };
        }
        payload = {
          ...payload,
          "providerOnly": false,
          "sortBy": sort.sortBy,
          "sortDirection": sort.sortDirection,
          "status": [0, 1],
          "type": 0
        }
        break;
      case 3:
      case 'callback':
        if (!sort) {
          sort = { sortBy: 0, sortDirection: 0 };
        }
        payload =
        {
          ...payload,
          "providerOnly": false,
          "sortBy": sort.sortBy,
          "status": [0, 1],
          "type": 3,
          "sortDirection": sort.sortDirection
        }
        break;
      case -2:
      case 'followup':
        if (!sort) {
          sort = { sortBy: 0, sortDirection: 1 };
        }
        payload =
        {
          ...payload,
          "providerOnly": true,
          "sortBy": sort.sortBy,
          "status": [7],
          "type": -2,
          "sortDirection": sort.sortDirection
        }
        break;
      case 2:
      case 'completed':
        if (!sort) {
          sort = { sortBy: 0, sortDirection: 1 };
        }
        payload = {
          ...payload,
          "providerOnly": true,
          "sortBy": sort.sortBy, 
          "status": [2],
          "type": -2,
          "sortDirection": sort.sortDirection
        }
        break;
    }
    this.clinicService.encountersList(payload).subscribe((res: any) => {
      console.log('checking of the value in encounterlist ', res);
      this.rows = res.encounterList;
      // console.log('the value in the given encounterdata',this.rows);
      this.encounterlist = this.rows.map((rows: any) => {
        try {
          rows.parseExtraData = JSON.parse(rows?.extraData)
          console.log('checking ths row list', rows.parseExtraData);
        } catch (e) {
          rows.parseExtraData = rows.extraData;
        }
        return rows;
      })
    })

  }

  getDateValue(values: any) {
    let dateTime;
    if (values == "" || values == 'invalid date') {
      dateTime = "-";
    } else if (values) {
      dateTime = moment(values).format('DD/MM/YYYY hh:mm A');
    }
    return dateTime
  }
  onActivate(event: any) {
    if (event.type === 'click') {
      this.route.navigate(['profile', this.profile.userID, 'encounter', event.row.encounterID])
    }
  }

  onSort(event: any) {
    const cloumn = event.column.name
    if (cloumn =='Reported' || cloumn =='Status') {
      console.log('column', cloumn);
      let sortDirection = 0;
      let sortBy = 0;
      if (event.newValue =='asc') {
        sortDirection = 0;
      }
      else {
        sortDirection = 1;
      }
      switch (cloumn) {
        case 'Reported':
          sortBy = 0;
          break;
        case 'Status':
          sortBy = 4;
          break;
      }
      this.bucket(this.encounterBucket, { sortBy, sortDirection })
      console.log('ccheckijjjjj', this.encounterBucket);
    }
  }
  groupmeeting(){
   const modalRef= this.dialogService?.open(GroupMeetingComponent)
  }

}

