import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { ProfileResolver } from '../shared/resolver/profile.resolver';
import { IndexComponent } from './index/index.component';
import { EncounterComponent } from '../encounters/encounter/encounter.component';
import { SnapshotComponent } from './snapshot/snapshot.component';
import { VitalsComponent } from './vitals/vitals.component';


const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
    children: [
      {
        path: ':userId',
        component: ProfileComponent,
        resolve: {
          profileData: ProfileResolver
        },
        children: [
          {
            path: ':patientId/snapshot',
            component: SnapshotComponent,
          }, {
            path: ':patientId/vitals',
            component: VitalsComponent,
          }
        ]
      },
      {
        path: ':userId/encounters',
        loadChildren: () => import('../encounters/encounters.module').then(m => m.EncountersModule),
        resolve: {
          profileData: ProfileResolver
        }
      },
      {
        path: ':userId/encounter',
        loadChildren: () => import('../encounter-details/encounter-details.module').then(m => m.EncounterDetailsModule),
        resolve: {
          profileData: ProfileResolver
        }
      },
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProviderRoutingModule { }
