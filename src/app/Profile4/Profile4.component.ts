import { Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import { TaggingEventArgs } from '@syncfusion/ej2-angular-dropdowns';
  
@Component({
  selector: 'app-Profile4',
  templateUrl: './Profile4.component.html',
  styleUrls: ['./Profile4.component.css']
})

export class Profile4Component {
// define the JSON of data
public countries: { [key: string]: Object; }[] = [
  { Name: 'แพทย์ทั่วไป', Code: 'แพทย์ทั่วไป',Id:'แพทย์ทั่วไป'},
  { Name: 'แพทย์ทั่วไป:OPD', Code: 'แพทย์ทั่วไป:OPD' ,Id:'แพทย์ทั่วไป'},
  { Name: 'แพทย์ทั่วไป:ER', Code: 'แพทย์ทั่วไป:ER',Id:'แพทย์ทั่วไป' },
  { Name: 'แพทย์ทั่วไป:Check up', Code: 'แพทย์ทั่วไป:Check up',Id:'แพทย์ทั่วไป' },
  { Name: 'แพทย์ทั่วไป:Skin', Code: 'แพทย์ทั่วไป:Skin' ,Id:'แพทย์ทั่วไป'},

  { Name: 'กุมารเวชศาสตร์ทารกแรกเกิดและปริกำเนิด', Code: 'กุมารเวชศาสตร์ทารกแรกเกิดและปริกำเนิด' ,Id:'กุมารแพทย์'},
  { Name: 'กุมารเวชศาสตร์โรคระบบทางเดินอาหารและโรคตับ', Code: 'กุมารเวชศาสตร์โรคระบบทางเดินอาหารและโรคตับ' ,Id:'กุมารแพทย์'},
  { Name: 'กุมารเวชศาสตร์โรคภูมิแพ้และภูมิคุ้มกัน', Code: 'กุมารเวชศาสตร์โรคภูมิแพ้และภูมิคุ้มกัน' ,Id:'กุมารแพทย์'},
  { Name: 'กุมารเวชศาสตร์พัฒนาการและพฤติกรรม', Code: 'กุมารเวชศาสตร์พัฒนาการและพฤติกรรม' ,Id:'กุมารแพทย์'},
  { Name: 'กุมารเวชศาสตร์โลหิตวิทยาและมะเร็งในเด็ก', Code: 'กุมารเวชศาสตร์โลหิตวิทยาและมะเร็งในเด็ก' ,Id:'กุมารแพทย์'},
  { Name: 'กุมารเวชศาสตร์โรคเลือด', Code: 'กุมารเวชศาสตร์โรคเลือด' ,Id:'กุมารแพทย์'},

  { Name: 'จักษุแพทย์: Contact Lens', Code: 'จักษุแพทย์: Contact Lens' ,Id:'จักษุแพทย์'},
  { Name: 'จักษุแพทย์: Cornea and Refractive Surgery', Code: 'จักษุแพทย์:Cornea and Refractive Surgery' ,Id:'จักษุแพทย์'},
  { Name: 'จักษุแพทย์: Electrophysiology', Code: 'จักษุแพทย์:Electrophysiology' ,Id:'จักษุแพทย์'},
  { Name: 'จักษุแพทย์: Glaucoma', Code: 'จักษุแพทย์:Glaucoma' ,Id:'จักษุแพทย์'},
  { Name: 'จักษุแพทย์:Low Vision', Code: 'จักษุแพทย์:Low Vision' ,Id:'จักษุแพทย์'},
  { Name: 'จักษุแพทย์: Neuro-Ophthalmology', Code: 'จักษุแพทย์:Neuro-Ophthalmology' ,Id:'จักษุแพทย์'},
  { Name: 'จักษุแพทย์: Ocular Immunology and Inflamation', Code: 'จักษุแพทย์:Ocular Immunology and Inflamation' ,Id:'จักษุแพทย์'},
  { Name: 'จักษุแพทย์: Occuloplastic and Recontractive Surgery', Code: 'จักษุแพทย์:Occuloplastic and Recontractive Surgery' ,Id:'จักษุแพทย์'},
  { Name: 'จักษุแพทย์: Pediatric Ophthalmology and Strabismus', Code: 'จักษุแพทย์:Pediatric Ophthalmology and Strabismus' ,Id:'จักษุแพทย์'},
  { Name: 'จักษุแพทย์: Public Health Ophthalmology', Code: 'จักษุแพทย์:Public Health Ophthalmology' ,Id:'จักษุแพทย์'},
  { Name: 'จักษุแพทย์: Retina and Vitreous', Code: 'จักษุแพทย์:Retina and Vitreous' ,Id:'จักษุแพทย์'},

  { Name: 'จิตเวชศาสตร์', Code: 'จิตเวชศาสตร์',Id:'จิตแพทย์'},
  { Name: 'จิตเวชเด็กและวัยรุ่น', Code: 'จิตเวชเด็กและวัยรุ่น',Id:'จิตแพทย์'},

  { Name: 'ประสาทวิทยา', Code: 'ประสาทวิทยา',Id:'ประสาทวิทยา'},

  { Name: 'พยาธิแพทย์', Code: 'พยาธิแพทย์',Id:'พยาธิแพทย์'},

  { Name: 'ผิวหนัง', Code: 'ผิวหนัง',Id:'ผิวหนัง'},
  
  { Name: 'เวชศาสตร์ครอบครัว', Code: 'เวชศาสตร์ครอบครัว',Id:'เวชศาสตร์ครอบครัว'},
  { Name: 'เวชศาสตร์ฉุกเฉิน', Code: 'เวชศาสตร์ฉุกเฉิน',Id:'เวชศาสตร์ฉุกเฉิน'},
 
  { Name: 'สาธารณสุขศาสตร์', Code: 'สาธารณสุขศาสตร์',Id:'เวชศาสตร์ป้องกัน'},
  { Name: 'ระบาดวิทยา', Code: 'ระบาดวิทยา',Id:'เวชศาสตร์ป้องกัน'},
  { Name: 'เวชศาสตร์ป้องกันคลินิก', Code: 'เวชศาสตร์ป้องกันคลินิก',Id:'เวชศาสตร์ป้องกัน'},
  { Name: 'เวชศาสตร์การบิน', Code: 'เวชศาสตร์การบิน',Id:'เวชศาสตร์ป้องกัน'},
  { Name: 'อาชีวเวชศาสตร์', Code: 'อาชีวเวชศาสตร์',Id:'เวชศาสตร์ป้องกัน'},
  { Name: 'สุขภาพจิตชุมชน', Code: 'สุขภาพจิตชุมชน',Id:'เวชศาสตร์ป้องกัน'},
  { Name: 'เวชศาสตร์การเดินทางและท่องเที่ยว', Code: 'เวชศาสตร์การเดินทางและท่องเที่ยว',Id:'เวชศาสตร์ป้องกัน'},

  { Name: 'เวชศาสตร์ฟื้นฟู', Code: 'เวชศาสตร์ฟื้นฟู',Id:'เวชศาสตร์ฟื้นฟู'},

  { Name: 'รังสีวิทยาทั่วไป', Code: 'รังสีวิทยาทั่วไป',Id:'รังสีวิทยา'},
  { Name: 'ภาพวินิจฉัยระบบประสาท', Code: 'ภาพวินิจฉัยระบบประสาท',Id:'รังสีวิทยา'},
  { Name: 'รังสีร่วมรักษาระบบประสาท', Code: 'รังสีร่วมรักษาระบบประสาท',Id:'รังสีวิทยา'},
  { Name: 'รังสีร่วมรักษาของลำตัว', Code: 'รังสีร่วมรักษาของลำตัว',Id:'รังสีวิทยา'},
  { Name: 'ภาพวินิจฉัยชั้นสูง', Code: 'ภาพวินิจฉัยชั้นสูง',Id:'รังสีวิทยา'},
  { Name: 'รังสีวิทยาวินิจฉัย', Code: 'รังสีวิทยาวินิจฉัย',Id:'รังสีวิทยา'},
  { Name: 'รังสีรักษาและมะเร็งวิทยา', Code: 'รังสีรักษาและมะเร็งวิทยา',Id:'รังสีวิทยา'},
  { Name: 'รังสีรักษาและเวชศาสตร์นิวเคลียร์', Code: 'รังสีรักษาและเวชศาสตร์นิวเคลียร์',Id:'รังสีวิทยา'},





  




 
];
// maps the local data column to fields property
public localFields: Object = { text: 'Name', value: 'Code',groupBy:'Id' };
// set the placeholder to MultiSelect Dropdown input element
public localWaterMark: string = 'Select Hospital';

onSubmit(form: NgForm): void {
    console.log(form.value.name);

    }

   
  }



 
