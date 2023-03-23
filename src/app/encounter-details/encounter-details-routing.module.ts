import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';
import { EncounterdetailsComponent } from './encounterdetails/encounterdetails.component';

const routes: Routes = [
  {
    path: ':encounterId',
    component: EncounterdetailsComponent,
     canActivate: [AuthGuard],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EncounterDetailsRoutingModule { }
