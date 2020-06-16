import { Component, OnInit } from '@angular/core';
import {  FormBuilder,  FormGroup,  Validators,  FormControl,  AbstractControl} from "@angular/forms";
import Swal from 'sweetalert2'

@Component({
  selector: 'app-Profile5',
  templateUrl: './Profile5.component.html',
  styleUrls: ['./Profile5.component.css']
})
export class Profile5Component implements OnInit {
  myForm: FormGroup;
  newPass: FormControl;
  passWord: FormControl;
  confirm_Password: FormControl;
  title = 'sweetAlert';
  constructor() { }

  ngOnInit() {
    this.CreateFormcontrol();
    this.createForm();
  }

  CreateFormcontrol() {
    this.newPass = new FormControl("", [
      Validators.required,
      Validators.minLength(6),
      Validators.pattern("[a-zA-Z ]*")
    ]);
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
        newPass: this.newPass,
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

  showModal(){
    Swal.fire({
      title: 'คุณต้องการจะ "ออกจากระบบ" ใช่ไหม',
      /*text: "You won't be able to revert this!",*/
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#fafaf7',
      cancelButtonColor: '#d33',
      confirmButtonText: '<a href "/profile">ออกจากระบบ</a>'
    })
  }

  showModal2(){
    Swal.fire({
      title: 'คุณต้องการจะ "เปิดการเชื่อต่อ" ใช่ไหม',
      /*text: "You won't be able to revert this!",*/
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#adf576',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes'
    }).then((result) => {
      if (result.value) {
     Swal.fire(
      'เปิดการเชื่อมต่อ',
      'success'
    )
  }
})
  }

}

