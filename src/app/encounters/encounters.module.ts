import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EncountersRoutingModule } from './encounters-routing.module';
import { EncounterComponent } from './encounter/encounter.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbActionsModule, NbAutocompleteModule, NbButtonGroupModule, NbButtonModule, NbCardModule, NbCheckboxModule, NbDatepickerModule, NbFormFieldModule, NbIconModule, NbInputModule, NbLayoutModule, NbListModule, NbMenuModule, NbRouteTabsetModule, NbSearchModule, NbSelectModule, NbSpinnerModule, NbStepperModule, NbTabsetModule, NbTooltipModule, NbUserModule } from '@nebular/theme';
import { SharedModule } from '../shared/shared.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { IndexComponent } from './index/index.component';


@NgModule({
  declarations: [
    EncounterComponent,
    IndexComponent,
  ],
  imports: [
    CommonModule,
    EncountersRoutingModule,
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
    NbDatepickerModule,
    NgxDatatableModule,
    NbMenuModule,
    NbRouteTabsetModule,
  ]
})
export class EncountersModule { }
