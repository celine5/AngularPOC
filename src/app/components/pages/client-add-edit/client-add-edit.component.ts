import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmployeeService } from '../services/employee.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DIALOG_DATA } from '@angular/cdk/dialog';


@Component({
  selector: 'app-client-add-edit',
  templateUrl: './client-add-edit.component.html',
  styleUrls: ['./client-add-edit.component.css']
})
export class ClientAddEditComponent implements OnInit{
   
  clientForm:FormGroup;

  constructor(
     private _fb:FormBuilder,
     private _empServices:EmployeeService,
     private _dialogRef:MatDialogRef<ClientAddEditComponent>,
     @Inject(MAT_DIALOG_DATA) public data:any
     ) {
    this.clientForm= this._fb.group({
      'name':'',
      'mobile':'',
      'email':'',
      'companyName':'',
      'currency':'',
      'billingMethod':'',
    });
  }
  ngOnInit(): void {
    this.clientForm.patchValue(this.data);
  }

  onFormSubmit(){
    if(this.clientForm.valid){
      if(this.data){
        this._empServices.updateClient(this.data.id,this.clientForm.value).subscribe({
          next: (val: any) => {
             alert("client detail updated!");
             this._dialogRef.close(true);
            },
             error: (err: any) => {
              console.error(err);
            },
           });

      }else{
        this._empServices.addClient(this.clientForm.value).subscribe({
            next: (val: any) => {
               alert("client added successfully");
               this._dialogRef.close(true);
              },
               error: (err: any) => {
                console.error(err);
              },
             });
           }
          }
        }
      }
