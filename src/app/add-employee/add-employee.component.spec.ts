import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { AddEmployeeComponent } from './add-employee.component';
import {EmployeeService} from "../model/employee.service";
import { FormsModule } from '@angular/forms';

describe('AddEmployeeComponent', () => {
  let component: AddEmployeeComponent;
  let fixture: ComponentFixture<AddEmployeeComponent>;
  let activatedRoute: ActivatedRoute;
  let employeeService:EmployeeService;


  class MockActivatedRoute {
    params = {'id':""};
  }

  class EmployeeListComponent{}

  class EmployeeServiceMock {
    updateEmployee(id:number,employee:any){ return true};
    addEmployee(emp:any){return true};
    }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[FormsModule],
      declarations: [ AddEmployeeComponent ],
      providers: [
        { provide: ActivatedRoute, useClass: MockActivatedRoute },
        { provide: EmployeeService, useClass: EmployeeServiceMock }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    activatedRoute = fixture.debugElement.injector.get(ActivatedRoute);
    employeeService = fixture.debugElement.injector.get(EmployeeService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call updateEmployee if params is passed', () => {
    activatedRoute.params['id'] = 5;
    expect(employeeService.updateEmployee).toHaveBeenCalled();
  });

  it('should call addEmployee if no params is passed', () => {
    activatedRoute.params = undefined;
    expect(employeeService.addEmployee).toHaveBeenCalled();
  });
});
