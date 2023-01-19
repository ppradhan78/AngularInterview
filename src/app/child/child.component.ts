import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { IEmployee } from '../models/employeeModels';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
@Output()
notify:EventEmitter<string> = new EventEmitter<string>();

@Output()
employees:EventEmitter< IEmployee[]> = new EventEmitter< IEmployee[]>();

onClick():void{
  this.notify.emit('message from child');
}
Clear():void{
  this.notify.emit('');
  this.employees.emit(null);
}
Submit():void{
  this.employees.emit(this.getEmployees());
}
getEmployees(): IEmployee[] {
  return [
      {
          code: 'emp101', firstName: 'Tom', gender: 'Male',salary: 5500, dateOfBirth: '6/25/1988',lastName:'mora',Email:'tom.mora@gmail.com',dateOfJoin:'6/25/2010',designation:'Sales',id:1
      },
      {
          code: 'emp102', firstName: 'Alex', gender: 'Male',salary: 5700.95, dateOfBirth: '9/6/1982',lastName:'Allen',Email:'alex.allen@gmail.com',dateOfJoin:'6/25/2010',designation:'HR',id:2
      },
      {
          code: 'emp103', firstName: 'Mike', gender: 'Male',  salary: 5900, dateOfBirth: '12/8/1979',lastName:'reslove',Email:'mike@gmail.com',dateOfJoin:'6/25/2010',designation:'IT',id:3
      },
      {
          code: 'emp104', firstName: 'Mary', gender: 'Female',salary: 6500.826, dateOfBirth: '10/14/1980',lastName:'elizbath',Email:'elizbath@gmail.com',dateOfJoin:'6/25/2010',designation:'Sales',id:4
      },
      {
          code: 'emp105', firstName: 'Nancy', gender: 'Female',salary: 6700.826, dateOfBirth: '12/15/1982',lastName:'smith',Email:'smith@gmail.com',dateOfJoin:'6/25/2010',designation:'IT',id:5
      },
      {
          code: 'emp106', firstName: 'Steve', gender: 'Male',salary: 7700.481, dateOfBirth: '11/18/1979',lastName:'smith',Email:'Steve.smith@gmail.com',dateOfJoin:'6/25/2010',designation:'HR',id:6
      },
  ];
}
  constructor() { }

  ngOnInit() {
  }

}
