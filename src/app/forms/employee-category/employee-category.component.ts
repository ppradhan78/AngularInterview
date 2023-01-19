import { Component, OnInit,Input,Output,EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-employee-category',
  templateUrl: './employee-category.component.html',
  styleUrls: ['./employee-category.component.css']
})
export class EmployeeCategoryComponent implements OnInit {
  @Input()
  all: number;

  @Input()
  male: number;

  @Input()
  female: number;

  @Input()
  hr: number;

  @Input()
  it: number;

  @Input()
  sales: number;

  @Output()
  countRadioButtonSelectionChanged: EventEmitter<string> = new EventEmitter<string>();

  selectedRadioButtonValue: string = 'All';

  constructor() { }

  ngOnInit() {
  }

  onRadioButtonSelectionChange() {
    this.countRadioButtonSelectionChanged.emit(this.selectedRadioButtonValue);
}
}
