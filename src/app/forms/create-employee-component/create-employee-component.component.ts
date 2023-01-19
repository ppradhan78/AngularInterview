import { Component, OnInit } from '@angular/core';
// Import FormGroup and FormControl classes
import { FormGroup, FormBuilder,Validators  } from '@angular/forms';

@Component({
  selector: 'app-create-employee-component',
  templateUrl: './create-employee-component.component.html',
  styleUrls: ['./create-employee-component.component.css']
})
export class CreateEmployeeComponentComponent implements OnInit {

 // This FormGroup contains fullName and Email form controls
 employeeForm: FormGroup;

 constructor(private fb:FormBuilder) { }

 // Initialise the FormGroup with the 2 FormControls we need.
 // ngOnInit ensures the FormGroup and it's form controls are
 // created when the component is initialised
 ngOnInit() {
  this.employeeForm = this.fb.group({
    fullName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(10)]],
    email:[''],
    skills:this.fb.group({
      skillName:[''],
      experienceInYears:[''],
      proficiency:['Beginner']

    })
    // OtherFields...
  });
}
onLoadDataClick(): void {
  this.employeeForm.setValue({
    fullName: 'Prasanta Pradhan',
    email: 'prasanta.pradhan@optum.com',
    skills: {
      skillName: 'C#',
      experienceInYears: 5,
      proficiency: 'beginner'
    }
  });
}
Clear():void{
  this.employeeForm.setValue({
    fullName: '',
    email: '',
    skills: {
      skillName: '',
      experienceInYears: '',
      proficiency: ''
    }
  });
}
 onSubmit(): void {
  console.log(this.employeeForm.value);
  console.log(this.employeeForm.touched);
  console.log(this.employeeForm.value);
  console.log(this.employeeForm.controls.fullName.value);
  console.log(this.employeeForm.controls.fullName.touched);
  console.log(this.employeeForm.get('fullName'));
}

}
