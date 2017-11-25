import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RouterModule, Routes} from "@angular/router";
import { StudentInterfaceComponent } from './student-interface/student-interface.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { LoginComponent } from './login/login.component';
import {FormsModule} from "@angular/forms";
import { StudentStatisticsComponent } from './student-statistics/student-statistics.component';
const appRoutes: Routes = [
  { path: 'student',
    component: StudentInterfaceComponent
  },
  { path: 'login',
    component: LoginComponent
  },
  { path: 'student/statistics',
    component: StudentStatisticsComponent
  },
];

@NgModule({
  declarations: [
    AppComponent,
    StudentInterfaceComponent,
    NavigationBarComponent,
    LoginComponent,
    StudentStatisticsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
