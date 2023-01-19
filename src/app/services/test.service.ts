import { HttpClient,HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { IEmployee } from '../models/employeeModels';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';
// Import the map operator
import 'rxjs/add/operator/map';
import 'rxjs/add/Observable/throw';
@Injectable({
  providedIn: 'root'
})

export class TestService {
  employeeInformation: string ='assets/employeeInformation.json';

  constructor(private http: HttpClient) { }
  featch(){
    return this.http.get('https://jsonplaceholder.typicode.com/todos/1');
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

  featchEmployee(): Observable<IEmployee[]> {
      return this.http.get(this.employeeInformation)
          .map((response: Response) => <IEmployee[]>response.json())
          .catch(this.handleError);
  }

  private handleError(error: any) {
    let errMsg = (error.message) ? error.message :
        error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
    return Observable.throw(errMsg);
}

}
