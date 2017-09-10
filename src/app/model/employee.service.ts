import {Injectable, Output, EventEmitter} from '@angular/core';
import {Employee} from '../interfaces/employee';


@Injectable()

export class EmployeeService{

	private employeeList:Employee[];
	@Output() fire: EventEmitter<Employee[]> = new EventEmitter();

	constructor() { 
		this.employeeList = [
		{id: 1, name:'Superman', age:'90', gender:'M', mail:'kryptonguy@gmail.com', mobile:'9009009009'},
		{id: 2, name:'Batman', age:'50', gender:'M', mail:'darkknight@gmail.com', mobile:'9809809009'},
		{id: 5, name:'BatGirl', age:'30', gender:'F', mail:'batgirl@gmail.com', mobile:'7007009009'},
		{id: 3, name:'Robin', age:'25', gender:'M', mail:'sidekick@gmail.com', mobile:'9879009009'},
		{id: 4, name:'Flash', age:'35', gender:'M', mail:'bary@gmail.com', mobile:'9123409009'}
		];

	}


	getEmployeeList():Employee[]{
		return this.employeeList;
	}

	getEmployeeDetails(id:number):Employee{
		for(var i=0; i<this.employeeList.length; i++){
			if(this.employeeList[i].id===id){
				return this.employeeList[i];
			}
		}
	} 

	updateEmployee(id:number,employee:Employee){
		for(var i=0; i<this.employeeList.length; i++){
			if(this.employeeList[i].id===id){
				this.employeeList[i] = employee;
			}
		}
		this.fire.emit(this.employeeList);
	}

	addEmployee(employee:Employee){
		employee.id = this.employeeList.length + 1; //Add new id
		this.employeeList.push(employee)
		this.fire.emit(this.employeeList);
	}

	getEmittedValue() {
		return this.fire;
	}
}