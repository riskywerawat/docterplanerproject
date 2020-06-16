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
  selector: 'app-Profile3',
  templateUrl: './Profile3.component.html',
  styleUrls: ['./Profile3.component.css']
})
export class Profile3Component implements OnInit {
  myForm: FormGroup;
  email: FormControl;
  passWord: FormControl;
  numBer:FormControl;
  lineId:FormControl;
  optioNal:FormControl;
  constructor(private fb: FormBuilder, private http: HttpClient) {}
 

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

    this. numBer = new FormControl("", [
    
      Validators.maxLength(10),
      Validators.required,
      Validators.pattern("^((\\+91-?)|0)?[0-9]{9}$")
    ]);

    this. lineId = new FormControl("", [
    
      Validators.maxLength(8),
      Validators.required,
      Validators.pattern("^[A-Za-z0-9ñÑáéíóúÁÉÍÓÚ ]+$")
    ]);

    this. optioNal = new FormControl("", [
      
      Validators.required,
      Validators.pattern("^[A-Za-z0-9ñÑáéíóúÁÉÍÓÚ ]+$")
    ]);

  }
  
  CearteFormGroup() {
    this.myForm = new FormGroup({
      email: this.email,
      passWord: this.passWord,
      numBer: this.numBer,
      lineId:this.lineId,
      optioNal:this.optioNal
    });
  }

  
  
  Onsummit() {
    const data = {
      email: this.email.value,
      numBer: this.numBer.value,
      lineId:this.lineId.value,
      optioNal:this.optioNal,
      password: this.passWord.value.toString(),
     
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
