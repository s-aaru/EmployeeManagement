import {Component, OnInit, ChangeDetectorRef, NgZone} from '@angular/core';
import {EmployeeService} from "../model/employee.service";
import {Subscription} from 'rxjs/Subscription';
import {Employee} from '../interfaces/employee';

@Component({
  selector: 'employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
  providers:[EmployeeService]
})
export class EmployeeListComponent implements OnInit {

  private employeeList:Employee[] ;
  private subscription: Subscription;
  private zone:NgZone;

  constructor(private employeeService: EmployeeService, private cdRef:ChangeDetectorRef) {
this.zone = new NgZone({enableLongStackTrace: false});
      this.subscription = this.employeeService.getEmittedValue()
      .subscribe(employeeList => {

        this.zone.run(() => {
        this.employeeList=employeeList;
        cdRef.detectChanges();
        console.log("updated ",this.employeeList);
      });
      });
    }

    ngOnInit() {
      this.employeeList = this.employeeService.getEmployeeList();
    }

    deleteEmployee(employee:any){
      this.employeeList.splice(employee,1);
    }

  }
