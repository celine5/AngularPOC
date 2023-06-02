import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent {
  projectForm: FormGroup;

  department: string[]=[
    'Development',
    'Designing',
    'Testing',
    'Marketing',
    'Accounts',
    'HR'
  ];
  projectPriority: string[]=[
    'Low',
    'Medium',
    'High',
  ];

   teams = new FormControl('');
   teamsList: string[] = ['santhosh', 'gidhin', 'janani', 'ramesh'];

  constructor(
    private _fb:FormBuilder,
    private _empService:EmployeeService,
    ) {
    this.projectForm= this._fb.group({
      projectId:'',
      projectTitle:'',
      department:'',
      projectPriority:'',
      client:'',
      price:'',
      projectStartdate:'',
      projectEnddate:'',
      teams:'',
      workStatus:'',
    });
  } 

  onFormSubmit(){
    if(this.projectForm.valid){
      this._empService.addProject(this.projectForm.value).subscribe({
        next: (val:any) => {
          alert('Project Added Successfully')
        },
        error: (err: any) =>{
          console.log(err);
        },
      })
     
    }
  }

}
