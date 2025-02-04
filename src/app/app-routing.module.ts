import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StudentsComponent } from './students/students.component';
import { ActivitiesComponent } from './activities/activities.component';
import { TimeComponent } from './time/time.component';
import { ReportComponent } from './report/report.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'students', component: StudentsComponent },
  { path: 'activities', component: ActivitiesComponent },
  { path: 'time', component: TimeComponent },
  { path: 'report', component: ReportComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }, // Default route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }