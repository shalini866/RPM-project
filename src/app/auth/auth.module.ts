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
   NbSearchModule, NbDialogModule, NbCheckboxModule, NbAutocompleteModule, NbSelectModule } from '@nebular/theme';
import { SharedModule } from '../shared/shared.module';
import { ProfileComponent } from './profile/profile.component';
import { config } from 'rxjs';
import { VitalsComponent } from './profile/vitals/vitals.component';
import { SnapshotComponent } from './profile/snapshot/snapshot.component';


@NgModule({
  declarations: [
    LoginComponent,
    ProfileComponent,
    VitalsComponent,
    SnapshotComponent
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
  ]
})
export class AuthModule { }