import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { ProfileResolver } from '../shared/resolver/profile.resolver';
import { IndexComponent } from './index/index.component';
import { SnapshotComponent } from './snapshot/snapshot.component';
import { VitalsComponent } from './vitals/vitals.component';
import { AlertsComponent } from './alerts/alerts.component';
import { AssessmentComponent } from './assessment/assessment.component';
import { DocumentsComponent } from './documents/documents.component';
import { HistoryComponent } from './history/history.component';
import { TaskComponent } from './task/task.component';
import { AuthGuard } from '../guards/auth.guard';
import { PatientComponent } from './patient/patient.component';


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
     canActivate: [AuthGuard],

        children: [
          {
            path: ':patientId/snapshot',
            component: SnapshotComponent,
          }, {
            path: ':patientId/vitals',
            component: VitalsComponent,
          },{
            path: ':patientId/alerts',
            component: AlertsComponent,
          },{
            path: ':patientId/assessments',
            component: AssessmentComponent,
          },{
            path: ':patientId/documents',
            component:DocumentsComponent,
          },{
            path: ':patientId/history',
            component:HistoryComponent,
          },{
            path: ':patientId/task',
            component:TaskComponent,
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
      {
        path:':userId/patient',
        component:PatientComponent,
        resolve: {
          profileData: ProfileResolver
        }
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProviderRoutingModule { }
