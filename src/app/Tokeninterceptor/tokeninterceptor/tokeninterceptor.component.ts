import { Component, OnInit } from '@angular/core';
import { TestService } from '../../services/test.service';


@Component({
  selector: 'app-tokeninterceptor',
  templateUrl: './tokeninterceptor.component.html',
  styleUrls: ['./tokeninterceptor.component.css']
})
export class TokeninterceptorComponent implements OnInit {

  constructor(private testService:TestService){

  }
  featch(){
    this.testService.featch().subscribe(data =>console.log(data));
  }

  ngOnInit() {
  }

}
