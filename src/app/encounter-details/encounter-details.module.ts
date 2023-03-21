import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EncounterDetailsRoutingModule } from './encounter-details-routing.module';
import { EncounterdetailsComponent } from './encounterdetails/encounterdetails.component';
import { NbActionsModule, NbAutocompleteModule, 
  NbButtonGroupModule, NbButtonModule, NbCardModule, NbCheckboxModule, 
  NbContextMenuModule, NbDatepickerModule, NbFormFieldModule, NbIconModule,
  NbInputModule, NbListModule, NbMenuModule, NbSearchModule,
   NbSelectModule, NbTabsetModule, NbUserModule } from '@nebular/theme';
import { SharedModule } from '../shared/shared.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';


@NgModule({
  declarations: [
    EncounterdetailsComponent
  ],
  imports: [
    CommonModule,
    EncounterDetailsRoutingModule,
    NbContextMenuModule,
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
    NbDatepickerModule,
    NgxDatatableModule,
    NbMenuModule,
  ]
})
export class EncounterDetailsModule { }
