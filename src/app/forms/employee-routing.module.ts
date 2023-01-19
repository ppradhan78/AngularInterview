import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateEmployeeComponentComponent } from './create-employee-component/create-employee-component.component';
import { ListEmployeeComponent } from './list-employee/list-employee.component';


const routes: Routes = [
       { path: 'create', component: CreateEmployeeComponentComponent },
        { path: 'list', component: ListEmployeeComponent }
    ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
