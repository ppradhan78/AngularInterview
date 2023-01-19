import { OnInit,Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css']
})
export class LifecycleComponent implements  OnChanges  {

  @Input() simpleInput: string;
  userText: string = 'prasanta';

  constructor() { }

//   ngOnInit() {
//     document.write('OnInit Life Cycle Hook');
//     console.log('OnInit Life Cycle Hook');
// }

ngOnChanges(changes: SimpleChanges) {

  for (let propertyName in changes) {
      let change = changes[propertyName];
      let current = JSON.stringify(change.currentValue);
      let previous = JSON.stringify(change.previousValue);

      // document.write(propertyName + ': currentValue = '
      // + current + ', previousValue = ' + previous);

      console.log(propertyName + ': currentValue = '
          + current + ', previousValue = ' + previous);
  }
}

}
