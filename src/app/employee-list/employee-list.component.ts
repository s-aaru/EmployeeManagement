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

  constructor(private employeeService: EmployeeService, private cdRef:ChangeDetectorRef, private zone:NgZone) {
    this.subscription = this.employeeService.getEmittedValue().subscribe((employeeList:Employee[]) => {
      this.zone.run(() => {
        this.employeeList=employeeList;
        this.cdRef.detectChanges();
      });
    });
  }

  ngOnInit() {
    this.employeeList = this.employeeService.getEmployeeList();
  }

  deleteEmployee(employee:any){
    this.employeeList.splice(employee,1);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
