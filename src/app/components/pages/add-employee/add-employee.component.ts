import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmployeeService } from '../services/employee.service';
import { DialogRef } from '@angular/cdk/dialog';
// import addEmployee from 'add-employee.json';

//   interface Student {  
//     id: Number;  
//     name: String;  
//     email: String;  
//     gender: String;  
// }  

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {
  empForm:FormGroup;

  gender: string[] = [
    'Male',
    'Female'
  ]
  department: string[]=[
    'Development',
    'Designing',
    'Testing',
    'HR'
  ];

  constructor(
    private _fb:FormBuilder,
    private _empService:EmployeeService,
   
    ) {
    this.empForm = this._fb.group({
      firstName:'',
      lastName:'',
      gender:'',
      mobile:'',
      designation:'',
      department:'',
      email:'',
      dob:'',
      education:'',

    })
  }

  onFormSubmit(){
    if(this.empForm.valid){
      this._empService.addEmployeeList(this.empForm.value).subscribe({
        next : (val:any) => {
          alert('Employee added successfully');
         
        },
        error : (err: any) => {
          console.error(err);
        }
      })
    
    }
  }

}
