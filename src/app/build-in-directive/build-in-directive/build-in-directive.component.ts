import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-build-in-directive',
  templateUrl: './build-in-directive.component.html',
  styleUrls: ['./build-in-directive.component.css']
})
export class BuildInDirectiveComponent implements OnInit {

  courses= ['C#','SQL','Python','ML'];
  constructor() { }

  ngOnInit() {
  }

}
