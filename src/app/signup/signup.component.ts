import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public signupForm!:FormGroup;
  submitted: false | undefined;
  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router:Router) { }

  ngOnInit(): void {
    this.signupForm=this.formBuilder.group({
      fullname: [' ', Validators.required],
      qualification: [' ', Validators.required],
      passedout: [' ', Validators.required],
      mobilenumber: [' ', Validators.required],
      gender: [' ', Validators.required],
      categorytype: [' ', Validators.required],
      email: [' ', [Validators.required, Validators.email]],
     // password: [' ', Validators.compose([Validators.required, this.customvalidator.patternValidator()])],
      confirmpassword: [' ', Validators.required],
      resume:['', Validators.required]
    },
    /*{
      validator: this.customvalidator.MatchPassword('password', 'confirmpassword')
    } */
    );
  }
  get registerFormControl(){
    return this.signupForm.controls;
  }


  onSubmit(){
  
  }
  
}
