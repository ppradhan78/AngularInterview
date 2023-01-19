import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { IEmployee } from '../../models/employeeModels';
import 'rxjs/add/operator/map';
import { TestService } from '../../services/test.service';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {

  employees: IEmployee[] = [];

  statusMessage: string = "Loading dat.Please wait...";

  selectedEmployeeCountRadioButton: string = 'All';

  constructor(private testService:TestService){

  }

//   ngOnInit() {
//     this.testService.featchEmployee()
//         .subscribe((employeeyData) => this.employees = employeeyData
//         , (error) => { this.statusMessage = " Problem with service " });
// }
ngOnInit() {
  this.employees = this.testService.getEmployees();
}
getTotalEmployeesCount(): number {
  return this.employees.length;
}

getMaleEmployeesCount(): number {
  return this.employees.filter(e => e.gender === 'Male').length;
}

getFemaleEmployeesCount(): number {
  return this.employees.filter(e => e.gender === 'Female').length;
}


getSalesEmployeesCount(): number {
  return this.employees.filter(e => e.designation === 'Sales').length;
}

getItEmployeesCount(): number {
  return this.employees.filter(e => e.designation === 'IT').length;
}

getHREmployeesCount(): number {
  return this.employees.filter(e => e.designation === 'HR').length;
}

onEmployeeCountRadioButtonChange(selectedRadioButtonValue: string): void {
  this.selectedEmployeeCountRadioButton = selectedRadioButtonValue;
}

}
