import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
  AbstractControl
} from "@angular/forms";
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  myForm: FormGroup;
  email: FormControl;
  passWord: FormControl;
  constructor() {}

  ngOnInit() {
    Promise.all([
      this.CreateFormcontrol(),
      this.CearteFormGroup()
    ]).then(result => {});
  }
  summit() {
    alert("OK");
  }
  CreateFormcontrol() {
    this.email = new FormControl("", [Validators.required, Validators.email]);
    this.passWord = new FormControl("", [
      Validators.minLength(6),
      Validators.required,
      Validators.pattern("[a-zA-Z ]*")
    ]);
  }
  CearteFormGroup() {
    this.myForm = new FormGroup({
      email: this.email,
      passWord: this.passWord
    });
  }
}
