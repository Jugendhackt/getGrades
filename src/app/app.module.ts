import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RouterModule, Routes} from "@angular/router";
import { StudentInterfaceComponent } from './student-interface/student-interface.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { LoginComponent } from './login/login.component';
import {FormsModule} from "@angular/forms";
import { StudentStatisticsComponent } from './student-statistics/student-statistics.component';
import { TeacherInterfaceComponent } from './teacher-interface/teacher-interface.component';
import { AdminInterfaceComponent } from './admin-interface/admin-interface.component';
import { AdminNewUserComponent } from './admin-new-user/admin-new-user.component';
import {AdminService} from "./admin.service";
import { StartComponent } from './start/start.component';
import {UserService} from "./user.service";
import {StudentService} from "./student.service";
import {IsAuthenticated} from "./is-authenticated";

const appRoutes: Routes = [
  { path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
    canActivate: [IsAuthenticated]
  },
  { path: 'start',
    component: StartComponent,
    canActivate: [IsAuthenticated]
  },
  { path: 'student',
    component: StudentInterfaceComponent,
    canActivate: [IsAuthenticated]
  },
  { path: 'teacher',
    component: TeacherInterfaceComponent,
    canActivate: [IsAuthenticated]
  },
  { path: 'student/statistics',
    component: StudentStatisticsComponent,
    canActivate: [IsAuthenticated]
  },
  { path: 'admin',
    component: AdminInterfaceComponent,
    canActivate: [IsAuthenticated]
  },
  { path: 'admin/newUser',
    component: AdminNewUserComponent,
    canActivate: [IsAuthenticated]
  },
];

@NgModule({
  declarations: [
    AppComponent,
    StudentInterfaceComponent,
    NavigationBarComponent,
    LoginComponent,
    StudentStatisticsComponent,
    TeacherInterfaceComponent,
    AdminInterfaceComponent,
    AdminNewUserComponent,
    StartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [AdminService, UserService, StudentService, IsAuthenticated],
  bootstrap: [AppComponent]
})
export class AppModule { }
