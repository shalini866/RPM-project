import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProviderRoutingModule } from './provider-routing.module';
import { IndexComponent } from './index/index.component';
import { ProfileComponent } from './profile/profile.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NbTooltipModule, NbLayoutModule, NbSpinnerModule, NbStepperModule, NbIconModule, NbCardModule, NbButtonModule, NbFormFieldModule, NbActionsModule, NbListModule, NbInputModule, NbTabsetModule, NbSearchModule, NbButtonGroupModule, NbUserModule, NbCheckboxModule, NbAutocompleteModule, NbSelectModule, NbDialogModule, NbDatepickerModule, NbSidebarModule, NbMenuModule, NbRouteTabsetModule } from '@nebular/theme';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgChartjsModule } from 'ng-chartjs';
import { SharedModule } from '../shared/shared.module';
import { SnapshotComponent } from './snapshot/snapshot.component';
import { VitalsComponent } from './vitals/vitals.component';
import { AlertsComponent } from './alerts/alerts.component';
import { AlertsNotesComponent } from './alerts/alerts-notes/alerts-notes.component';
import { AssessmentComponent } from './assessment/assessment.component';
import { DocumentsComponent } from './documents/documents.component';
import { HistoryComponent } from './history/history.component';
import { TaskComponent } from './task/task.component';
import { PatientComponent } from './patient/patient.component';


@NgModule({
  declarations: [
    IndexComponent,
    ProfileComponent, 
    SnapshotComponent,
    VitalsComponent,
    AlertsComponent,
    AlertsNotesComponent,
    AssessmentComponent,
    DocumentsComponent,
    HistoryComponent,
    TaskComponent,
    PatientComponent,
  
     ],
  imports: [
    CommonModule,
    ProviderRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NbTooltipModule,
    NbLayoutModule,
    NbSpinnerModule,
    NbStepperModule,
    NbIconModule,
    NbCardModule,
    NbButtonModule,
    NbIconModule,
    NbFormFieldModule,
    NbActionsModule,
    NbListModule,
    NbInputModule,
    NbTabsetModule,
    NbSearchModule,
    NbButtonGroupModule,
    SharedModule,
    NbUserModule,
    NbTabsetModule,
    NbCheckboxModule,
    NbAutocompleteModule,
    NbSelectModule,
    NbDialogModule.forRoot(),
    NbDatepickerModule,
    NgxDatatableModule,
    NgChartjsModule,
    NbSidebarModule,
    NbMenuModule,
    NbRouteTabsetModule,
  ],
})
export class ProviderModule { }
