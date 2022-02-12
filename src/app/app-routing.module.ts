import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoggedGuard } from './utilities/guards/logged.guard';

/**
 * TODO: Set wildcard ** and page not found
 */
const routes: Routes = [
  { path: '', component: LoginComponent },
  { 'path': 'dashboard', component: DashboardComponent, canActivate: [LoggedGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
