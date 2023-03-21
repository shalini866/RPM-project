import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EncounterComponent } from './encounter/encounter.component';
import { IndexComponent } from './index/index.component';


const routes: Routes = [

  {
    path: 'encounter',
    component: IndexComponent,
    children: [

      {
        path: '',
        redirectTo: 'waitingroom', 
        pathMatch: 'full'
      },
      {
        path: ':buckets',
        component: EncounterComponent,
      },

    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EncountersRoutingModule { }
