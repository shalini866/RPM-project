import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth/login',
    pathMatch: 'full'


  },
  {
    path:'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path:'profile',
    loadChildren: () => import('./provider/provider.module').then(m => m.ProviderModule),
     canActivate: [AuthGuard],
  },
  //  {
  //   path:'encounters',
  //   loadChildren:() => import('./encounters/encounters.module').then(m =>m.EncountersModule)
  //  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
