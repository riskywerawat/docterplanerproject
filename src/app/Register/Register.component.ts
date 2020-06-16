import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
  AbstractControl
} from "@angular/forms";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Component({
  selector: "app-Register",
  templateUrl: "./Register.component.html",
  styleUrls: ["./Register.component.css"]
})
export class RegisterComponent implements OnInit {
  myForm: FormGroup;
  email: FormControl;
  passWord: FormControl;
  confirm_Password: FormControl;
  constructor(private fb: FormBuilder, private http: HttpClient) {}

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

  Onsummit() {
    const data = {
      email: this.email.value,
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
