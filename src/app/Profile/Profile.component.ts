import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl, Validators } from '@angular/forms';
import { ValueTransformer } from '@angular/compiler/src/util';


@Component({
  selector: 'app-Profile',
  templateUrl: './Profile.component.html',
  styleUrls: ['./Profile.component.css']
})
export class ProfileComponent implements OnInit {
  angForm: FormGroup;
  form1: FormGroup;
  rating3: number;
  public form: FormGroup;

  Data: Array<any> = [
    { name: 'รูปถ่าย(ถ้ามี)', value: 'รูปถ่าย' },
    { name: 'สำเนาบัตรประชาชน', value: 'สำเนา' },
    { name: 'วุฒิการศึกษา และสถาบันการศึกษา (ถ้ามี)', value: 'วุฒิและสถาบัน' },
    { name: 'สำเนาใบประกอบวิชาชีพ ', value: 'ใบประกอบวิชา' },
    { name: 'ประวัติการทำงาน', value: 'การทำงาน' }
  ];

  constructor(private fb: FormBuilder) { 
    this.createForm();
    this.form1 = this.fb.group({
      checkArray: this.fb.array([], [Validators.required])
    });
    this.rating3 = 0;
    this.form = this.fb.group({
      rating1: ['', Validators.required],
      rating2: [4]
    });
    
  }

  onCheckboxChange(e) {
    const checkArray: FormArray = this.form1.get('checkArray') as FormArray;

    if (e.target.checked) {
      checkArray.push(new FormControl(e.target.value));
    } else {
      let i: number = 0;
      checkArray.controls.forEach((item: FormControl) => {
        if (item.value == e.target.value) {
          checkArray.removeAt(i);
          return;
        }
        i++;
      });
    }
  }

  createForm() {
    this.angForm = this.fb.group({
      email: [''],
      password: ['']
    });
  }

  onClickSubmit() {
    console.log(this.angForm.value);
    console.log(this.form1.value);
    console.log(this.form.value);
    alert('OK');
  }

  

  

  ngOnInit() {
    
  }
  
  
  
}
