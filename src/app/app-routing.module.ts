import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ClientInfoComponent } from './client-info/client-info.component';
import { MeetingsInfoComponent } from './meetings-info/meetings-info.component';
import { TasksInfoComponent } from './tasks-info/tasks-info.component';
import { ProjectInfoComponent } from './project-info/project-info.component';
import { StartComponent } from './start/start.component';

const routes: Routes = [
  {path: '', component:StartComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {path: 'client_info', component:ClientInfoComponent},
  {path: 'meetings_info', component:MeetingsInfoComponent},
  {path: 'tasks_info', component:TasksInfoComponent},
  {path: 'project_info', component:ProjectInfoComponent},
  {path: 'start', component:StartComponent},
  {path: 'home', component: HomeComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
