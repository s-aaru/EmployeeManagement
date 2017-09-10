import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { routing } from './app.routes';

import { AppComponent }  from './app.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';

import { EmployeeService } from './model/employee.service';

@NgModule({
  imports:      [ BrowserModule ,FormsModule,
    routing],
  declarations: [ AppComponent , EmployeeListComponent, AddEmployeeComponent],
  bootstrap:    [ AppComponent
  ],
  providers:[EmployeeService]
})
export class AppModule { }
