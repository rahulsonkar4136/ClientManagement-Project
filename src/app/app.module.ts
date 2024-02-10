import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';




import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ClientInfoComponent } from './client-info/client-info.component';
import { ProjectInfoComponent } from './project-info/project-info.component';
import { TasksInfoComponent } from './tasks-info/tasks-info.component';
import { MeetingsInfoComponent } from './meetings-info/meetings-info.component';
import { StartComponent } from './start/start.component';
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ClientInfoComponent,
    ProjectInfoComponent,
    TasksInfoComponent,
    MeetingsInfoComponent,
    StartComponent,
    NavComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
