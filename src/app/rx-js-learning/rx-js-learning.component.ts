import { Component, OnInit } from '@angular/core';
//import { count } from 'console';
import { interval, Observable, of, from, Subject,  } from 'rxjs'
import { filter } from 'rxjs-compat/operator/filter';
import { min } from 'rxjs-compat/operator/min';
import { skip } from 'rxjs-compat/operator/skip';
import { distinct, elementAt, max, take,count } from 'rxjs/operators'

@Component({
  selector: 'app-rx-js-learning',
  templateUrl: './rx-js-learning.component.html',
  styleUrls: ['./rx-js-learning.component.css']
})
export class RxJsLearningComponent implements OnInit {

 
  users: Observable<string>;
  ofOperator: Observable<string[]> = of(['ppradhan', 'gpanduri']);
  fromOperator$: Observable<string[]> = of(['ppradhan', 'gpanduri', 'ppradhan']);
  distOperator$: Observable<number[]> = of([1,2,3,3,1,4]);
  constructor() { }
  ngOnInit() {
    const message = new Subject();
    message.next("1")
    message.next("2")
    message.complete();
    this.users = new Observable(
      function subscribe(subscriber) {
        try {
          subscriber.next("user 1");
          subscriber.next("user 2");
        } catch (e) {
          subscriber.error(e);
        }
      }
    )
    this.users.subscribe(
      data => {
        //alert(data);
        //alert(data[5]);
      }
    );
    //Of
    this.ofOperator.subscribe(
      item => {
        //alert(item);
        //alert(item[0]);
      }
    );
    //from
    this.fromOperator$.subscribe(
      item => {
       // alert(item);
       // alert(item[0]);
      }
    );
  //interval
      const num$ = interval(5);
      num$.subscribe(item => {
        //alert(num$);
      })
    //take
    //const num1$ = take(1);
    //num1$.subscribe(item => {
     
    //  //alert(num1$);
    //})
    //ElementAt
    this.fromOperator$.pipe(
      elementAt(0)).subscribe(data => {
      //  alert(data);
      });

    //filter
    //this.fromOperator$.pipe(
    //  filter((value) => this.checkLength(value)).subscribe(
    //    data => {
    //      alert(data);
    //    }
    //  )

    //checkLength(value:any){
    // return value.Length < 5 ? true : false;
    //}
 
    this.distOperator$.pipe(
      distinct()
    ).subscribe(data2 => {
          //alert(data2);
    });

    this.distOperator$.pipe(
      //skip(2)
      //count()
      //max()
      //min()
    ).subscribe(data2 => {
      alert(data2);
    });


  }

}
