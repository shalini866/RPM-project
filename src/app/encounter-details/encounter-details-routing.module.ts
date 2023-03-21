import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EncounterdetailsComponent } from './encounterdetails/encounterdetails.component';

const routes: Routes = [
  {
    path: ':encounterId',
    component: EncounterdetailsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EncounterDetailsRoutingModule { }
