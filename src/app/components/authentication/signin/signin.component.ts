import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  // signin:FormGroup|any;
  // constructor(){ }


  // ngOnInit(): void {
  //   this.signin=new FormGroup({
  //     'username': new FormControl(),
  //     'password':new FormControl(),
  //   })
  // }
  // signindata(signin:FormGroup){
  //   console.log(this.signin.value);
     
  // }

  public username:string;
  public password:string;

  ngOnInit(): void {
    
  }

  constructor(private router:Router) {

  }

  
  loginUser(): void {
    if(this.username == "Admin"  && this.password == "admin@123") {
      console.log('welcome to the dashboard');
      this.router.navigate(['/dashboard'])
    }
  }

}
