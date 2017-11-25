import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RouterModule, Routes} from "@angular/router";
import { StudentInterfaceComponent } from './student-interface/student-interface.component';
const appRoutes: Routes = [
  { path: 'student',
    component: StudentInterfaceComponent
  },
];

@NgModule({
  declarations: [
    AppComponent,
    StudentInterfaceComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
