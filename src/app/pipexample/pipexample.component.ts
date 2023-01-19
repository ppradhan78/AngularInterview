import { Component, OnInit } from '@angular/core';
import { IEmployee } from '../models/employeeModels';
@Component({
  selector: 'app-pipexample',
  templateUrl: './pipexample.component.html',
  styleUrls: ['./pipexample.component.css']
})
export class PipexampleComponent implements OnInit {
  dob:Date ;
  salary:number=1000;

  constructor() {
    this.dob = new Date(1986,8,2);
  }

  ngOnInit() {
  }

  public employees=[{
            code: 'emp101', firstName: 'Tom', gender: 'Male',salary: 5500, dateOfBirth: '6/25/1988',lastName:'mora',Email:'tom.mora@gmail.com',dateOfJoin:'6/25/2010',designation:'Sales',id:1
        },
        {
          code: 'emp102', firstName: 'Alex', gender: 'Male',salary: 5700.95, dateOfBirth: '9/6/1982',lastName:'Allen',Email:'alex.allen@gmail.com',dateOfJoin:'6/25/2010',designation:'HR',id:2
      }
      ];

}
