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
const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  { path: 'start',
    component: StartComponent
  },
  { path: 'student',
    component: StudentInterfaceComponent
  },
  { path: 'teacher',
    component: TeacherInterfaceComponent
  },
  { path: 'login',
    component: LoginComponent
  },
  { path: 'student/statistics',
    component: StudentStatisticsComponent
  },
  { path: 'admin',
    component: AdminInterfaceComponent
  },
  { path: 'admin/newUser',
    component: AdminNewUserComponent
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
  providers: [AdminService],
  bootstrap: [AppComponent]
})
export class AppModule { }
