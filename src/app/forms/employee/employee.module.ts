import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';

import {EmployeeRoutingModule} from '../employee-routing.module';
import { CreateEmployeeComponentComponent } from '../create-employee-component/create-employee-component.component';
import { ListEmployeeComponent } from '../list-employee/list-employee.component';
import { EmployeeCategoryComponent } from '../employee-category/employee-category.component';
import { CustompipPipe } from '../custompip/custompip.pipe';

@NgModule({
  declarations: [
    CreateEmployeeComponentComponent,
    ListEmployeeComponent,
    EmployeeCategoryComponent,
    CustompipPipe
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],

})
export class EmployeeModule {
  constructor(){
    console.log('EmployeeModule loaded');
  }

}
