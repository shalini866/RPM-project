import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EncounterComponent } from './encounter/encounter.component';

const routes: Routes = [

  {
    path:'encounter',
    component:EncounterComponent
  } 
];

@NgModule({ 
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EncountersRoutingModule { }
