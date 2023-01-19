import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RedblackDirective } from './directive/redblack.directive';
import { Tokeninterceptor } from './Shared/tokeninterceptor';
import { HomeComponent } from './home/home/home.component';
import { PagenotfoundComponent } from './other/pagenotfound/pagenotfound.component';
import { BuildInDirectiveComponent } from './build-in-directive/build-in-directive/build-in-directive.component';
import { InterpolationExampleComponent } from './interpolation/interpolation-example/interpolation-example.component';
import { CustomdirectiveComponent } from './customdirective/customdirective/customdirective.component';
import { TokeninterceptorComponent } from './Tokeninterceptor/tokeninterceptor/tokeninterceptor.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { ParentComponent } from './parent/parent.component';
import { PipexampleComponent } from './pipexample/pipexample.component';
import { WebstrogeComponent } from './webstroge/webstroge.component';
import { ViewchildExampleComponent } from './viewchild-example/viewchild-example.component';
import { ViewchildParentComponent } from './viewchild-parent/viewchild-parent.component';
import { RxJsLearningComponent } from './rx-js-learning/rx-js-learning.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'BuildInDirective', component: BuildInDirectiveComponent },
  { path: 'Interpolation', component: InterpolationExampleComponent },
  { path: 'CustomDirective', component: CustomdirectiveComponent },
  { path: 'Tokeninterceptor', component: TokeninterceptorComponent },
  { path: 'lifecycle', component: LifecycleComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'eventemitter', component: ParentComponent },
  { path: 'pipeexample', component: PipexampleComponent },
  { path: 'stroge', component: WebstrogeComponent },
  { path: 'viewchild', component: ViewchildExampleComponent },
  { path: 'viewchild-parent', component: ViewchildParentComponent },
  { path: 'rx-js-learning', component: RxJsLearningComponent },
  {path:  'employee', loadChildren: './forms/employee/employee.module#EmployeeModule'},
  { path: '**', component: PagenotfoundComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
