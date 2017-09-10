import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `

<a routerLink='addEmployee'>Add Employee</a>
  <employee-list></employee-list>
  <router-outlet></router-outlet>`,
})
export class AppComponent  {  }
