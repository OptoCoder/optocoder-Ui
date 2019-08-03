import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ErrorComponent} from './error/error.component';
import { OptocoderLoginComponent } from './optocoder-login/optocoder-login.component';
import { OptocoderRegistrationComponent } from './optocoder-registration/optocoder-registration.component';
import { OptocoderDashboardComponent } from './optocoder-dashboard/optocoder-dashboard.component';
import { AddUserComponent } from './add-user/add-user.component';

const routes: Routes = [
  {path: '', component: OptocoderLoginComponent},
  {path: 'registration', component: OptocoderRegistrationComponent},
  {path: 'dashboard', component: OptocoderDashboardComponent},
  {path: 'addUser', component: AddUserComponent},
  {path: '**', component: ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
