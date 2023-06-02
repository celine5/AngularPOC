import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent {

  clientForm:FormGroup;

  billingMethod: string[] = [
    'Fixed Price',
    'Hourly User Rate',
    'Hourly User Rate'
  ];



  constructor(
    private _fb:FormBuilder,
    private _empService:EmployeeService,
    ){
    this.clientForm=this._fb.group({
      name:'',
      companyName:'',
      email:'',
      mobile:'',
      date:'',
      currency:'',
      billingMethod:'',
    });
  }

  onFormSubmit(){
    if(this.clientForm.valid){
      this._empService.addClientList(this.clientForm.value).subscribe({
        next: (val : any)=> {
          alert('Client List Added Successfully');
        },
        error:(err:any)=>{
          console.error(err);
        },
      });
  }
}
}
