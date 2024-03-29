import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';
import { ProfileComponent } from '../provider/profile/profile.component';
import { ProfileResolver } from '../shared/resolver/profile.resolver';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path:'login',
    component:LoginComponent
    
  },
  { 
    path: 'profile/:userId',
    component: ProfileComponent,
    canActivate: [AuthGuard],
    resolve: {
      profileData: ProfileResolver 
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
