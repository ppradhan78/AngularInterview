import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { Tokeninterceptor } from './Shared/tokeninterceptor';
import { RedblackDirective } from './directive/redblack.directive';
import { HomeComponent } from './home/home/home.component';
import { PagenotfoundComponent } from './other/pagenotfound/pagenotfound.component';
import { BuildInDirectiveComponent } from './build-in-directive/build-in-directive/build-in-directive.component';
import { InterpolationExampleComponent } from './interpolation/interpolation-example/interpolation-example.component';
import { CustomdirectiveComponent } from './customdirective/customdirective/customdirective.component';
import { TokeninterceptorComponent } from './Tokeninterceptor/tokeninterceptor/tokeninterceptor.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { PipexampleComponent } from './pipexample/pipexample.component';
import { CookiesexampleComponent } from './cookiesexample/cookiesexample.component';
import { WebstrogeComponent } from './webstroge/webstroge.component';
import { ViewchildExampleComponent } from './viewchild-example/viewchild-example.component';
import { ColorDirective } from './directive/color.directive';
import { ViewchildParentComponent } from './viewchild-parent/viewchild-parent.component';
import { RxJsLearningComponent } from './rx-js-learning/rx-js-learning.component';
//import {NgXCookies} from 'ngx-cookies';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BuildInDirectiveComponent,
    InterpolationExampleComponent,
    CustomdirectiveComponent,
    TokeninterceptorComponent,
    LifecycleComponent,
    PagenotfoundComponent,
    ChildComponent,
    ParentComponent,
    PipexampleComponent,
    CookiesexampleComponent,
    WebstrogeComponent,
    ViewchildExampleComponent,
    ColorDirective,
    ViewchildParentComponent,
    RxJsLearningComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: Tokeninterceptor,
      multi: true
    }
   // NgXCookies
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
constructor(){
  console.log('AppModule loaded');
}

 }
