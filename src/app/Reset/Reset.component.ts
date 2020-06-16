import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
  AbstractControl
} from "@angular/forms";

@Component({
  selector: 'app-Reset',
  templateUrl: './Reset.component.html',
  styleUrls: ['./Reset.component.css']
})
export class ResetComponent implements OnInit {
  myForm: FormGroup;
  email: FormControl;
  passWord: FormControl;
  confirm_Password: FormControl;
  constructor() { }

  ngOnInit() {
    this.CreateFormcontrol();
    this.createForm();
  }
  CreateFormcontrol() {
    this.email = new FormControl("", [Validators.required, Validators.email]);
    this.passWord = new FormControl("", [
      Validators.required,
      Validators.minLength(6),
      Validators.pattern("[a-zA-Z ]*")
    ]);
    this.confirm_Password = new FormControl("", [Validators.required]);
  }

  createForm() {
    this.myForm = new FormGroup(
      {
        email: this.email,
        passWord: this.passWord,
        confirm_Password: this.confirm_Password
      },
      { validators: this.MatchPassword }
    );
  }

  MatchPassword(AC: AbstractControl) {
    let password = AC.get("passWord").value; // to get value in input tag
    let confirmPassword = AC.get("confirm_Password").value; // to get value in input tag
    if (password != confirmPassword) {
      console.log("false");
      AC.get("confirm_Password").setErrors({ MatchPassword: true });
    } else {
      console.log("true");
      return null;
    }
  }
  

}
