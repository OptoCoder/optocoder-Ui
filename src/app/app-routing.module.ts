import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OptocoderLoginComponent } from './optocoder-login/optocoder-login.component';
import { OptocoderRegistrationComponent } from './optocoder-registration/optocoder-registration.component';
import { OptocoderDashboardComponent } from './optocoder-dashboard/optocoder-dashboard.component';
import { AddUserComponent } from './add-user/add-user.component';


const routes: Routes = [
  {path: '', component: OptocoderLoginComponent},
  {path: 'optocoder-registration', component: OptocoderRegistrationComponent},
  {path: 'optocoder-dashboard', component: OptocoderDashboardComponent},
  {path: 'AddUser', component: AddUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
