import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeListComponent } from './employee-list.component';
import {EmployeeService} from "../model/employee.service";

describe('EmployeeListComponent', () => {
  let component: EmployeeListComponent;
  let fixture: ComponentFixture<EmployeeListComponent>;

  class EmployeeServiceMock {
    getEmployeeList(){ return [
      {id: 1, name:'Superman', age:'90', gender:'M', mail:'kryptonguy@gmail.com', mobile:'9009009009'},
      {id: 2, name:'Batman', age:'50', gender:'M', mail:'darkknight@gmail.com', mobile:'9809809009'},
      {id: 5, name:'BatGirl', age:'30', gender:'F', mail:'batgirl@gmail.com', mobile:'7007009009'},
      {id: 3, name:'Robin', age:'25', gender:'M', mail:'sidekick@gmail.com', mobile:'9879009009'},
      {id: 4, name:'Flash', age:'35', gender:'M', mail:'bary@gmail.com', mobile:'9123409009'}
      ]};
    }

    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [ EmployeeListComponent ]
      })

      .compileComponents();

      TestBed.overrideComponent(EmployeeListComponent, {
        set: {
          providers: [
          { provide: EmployeeService, useClass: EmployeeServiceMock }
          ]
        }
      })
    }));

    beforeEach(() => {
      fixture = TestBed.createComponent(EmployeeListComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('should get employeelist on init', () => {
      component.ngOnInit();
      expect(this.employeeList.length).toBe(5);
    });

    it('should delete the selected employee from list', () => {
      let employee = {id: 1, name:'Superman', age:'90', gender:'M', mail:'kryptonguy@gmail.com', mobile:'9009009009'};
      component.deleteEmployee(employee);
      expect(this.employeeList.length).toBe(4);
    });

  });
