import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbThemeModule, NbLayoutModule, NbButtonModule, 
  NbCardModule, NbIconModule, NbFormFieldModule, 
  NbInputModule,  NbActionsModule, NbListModule,
   NbUserModule, NbTooltipModule, NbSpinnerModule, 
   NbStepperModule, NbTabsetModule, NbButtonGroupModule, 
   NbSearchModule, NbDialogModule, NbCheckboxModule, NbAutocompleteModule, NbSelectModule, NbDatepickerModule, NbSidebarModule } from '@nebular/theme';
import { SharedModule } from '../shared/shared.module';
import { config } from 'rxjs';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgChartjsModule } from 'ng-chartjs';


@NgModule({
  declarations: [
    LoginComponent,
   
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
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
   


  ]
})
export class AuthModule { }
