import { Component, OnInit } from '@angular/core';
import { IEmployee } from '../models/employeeModels';


@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  employees: IEmployee[] = [];
  showMessage:string;
  constructor() { }

  ngOnInit() {
  }
  onNotifyClicked(message:string):void{
    this.showMessage=message;
  }
  onNotifyEmployee(employee: IEmployee[] ):void{
    this.employees=employee;
  }
}
