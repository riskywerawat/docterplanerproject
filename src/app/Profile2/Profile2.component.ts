import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
  AbstractControl
} from "@angular/forms";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Component({
  selector: 'app-Profile2',
  templateUrl: './Profile2.component.html',
  styleUrls: ['./Profile2.component.css']
})
export class Profile2Component implements OnInit {
  myForm: FormGroup;
  email: FormControl;
  passWord: FormControl;
  firstName:FormControl;
  lastName:FormControl;
  holdIng:FormControl;
  confirm_Password: FormControl;
  constructor(private fb: FormBuilder, private http: HttpClient) { }

  ngOnInit() {
    
      this.CreateFormcontrol(),
      this.CearteFormGroup()
      
  }
  

  CreateFormcontrol() {
    this.email = new FormControl("", [Validators.required, Validators.email]);
    this.passWord = new FormControl("", [
      Validators.minLength(6),
      Validators.required,
      Validators.pattern("[a-zA-Z ]*")
    ]);
    this.firstName = new FormControl("", [
      Validators.required,
      Validators.pattern("[a-zA-Z ]*")
    ]);
    this.lastName = new FormControl("", [
      Validators.required,
      Validators.pattern("[a-zA-Z ]*")
    ]);
    this. holdIng = new FormControl("", [
      Validators.minLength(6),
      Validators.required,
      Validators.pattern("^[0-9]*$")
    ]);

  }
  CearteFormGroup() {
    this.myForm = new FormGroup({
      email: this.email,
      firstName: this.firstName,
      lastName: this.lastName,
      holdIng: this.holdIng,
    });
}

createForm() {
  this.myForm = new FormGroup(
    {
      email: this.email,
      passWord: this.passWord,
      confirm_Password: this.confirm_Password
    },
    
  );
}
Onsummit() {
  const data = {
    email: this.email.value,
    holding: this.holdIng.value,
    firstname: this.firstName.value.toString(),
    lastname: this.lastName.value.toString(),
    password: this.passWord.value.toString(),
    confirm_password: this.confirm_Password.value.toString()
  };
  const header = new HttpHeaders();
  header.append("Content-Type", "application/json");
  this.http
  .post("http://localhost:3000/signup", data, { headers: header })
  .toPromise()
  .then((result: any) => {
    alert(result.message);
  });
}
}
