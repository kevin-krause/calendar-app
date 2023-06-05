import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppointmentFormComponent } from './components/appointment-form/appointment-form.component';
import { AppointmentListComponent } from './components/appointment-list/appointment-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/appointments', pathMatch: 'full' },
  { path: 'appointments', component: AppointmentListComponent },
  { path: 'add', component: AppointmentFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
