import { Component, OnInit , OnDestroy} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {EmployeeService} from "../model/employee.service";
import {Employee} from '../interfaces/employee';

@Component({
	selector: 'add-employee',
	templateUrl: './add-employee.component.html',
	styleUrls: ['./add-employee.component.css'],
	providers:[EmployeeService]
})
export class AddEmployeeComponent implements OnInit, OnDestroy  {

	private id: number;
	private sub: any;
	private action:string = "Add";
	private employee : Employee = {
		id: null,
		name:'',
		age:'',
		mobile:'',
		mail:'',
		gender:''
	};

	constructor(private route: ActivatedRoute, private employeeService: EmployeeService) { }

	ngOnInit() {
		this.sub = this.route.params.subscribe(params => {
			this.id = +params['id']; 
			if(this.id){
				this.action = "Save";
				this.employee = this.employeeService.getEmployeeDetails(this.id);
			}
		});
	}

	saveOrUpdateEmployee(){
		if(this.action==="Save"){
			this.employeeService.updateEmployee(this.id, this.employee);
		}else{
			this.employeeService.addEmployee(this.employee);
		}
	}

	ngOnDestroy() {
		this.sub.unsubscribe();
	}

}
