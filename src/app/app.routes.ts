import { Routes,RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';


const APP_ROUTES: Routes = [
    {path:'employeeDetails',component:EmployeeListComponent},
    {path:'addEmployee',component:AddEmployeeComponent},
    {path:'editEmployee/:id',component:AddEmployeeComponent}
];

export const routing = RouterModule.forRoot(APP_ROUTES);