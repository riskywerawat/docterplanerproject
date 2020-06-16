import { Component} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-Filter',
  templateUrl: './Filter.component.html',
  styleUrls: ['./Filter.component.css']
})
export class FilterComponent {
  // define the JSON of data
  public countries: { [key: string]: Object; }[] = [
        { Name: 'Bang Khun Thian Hospital', Code: 'Bang Khun Thian Hospital' },
        { Name: 'Bangkok Christian Hospital', Code: 'Bangkok Christian Hospital' },
        { Name: 'Child Hospital', Code: 'Child Hospital' },
        { Name: 'Eye Center Bangkok Hospital', Code: 'Eye Center Bangkok Hospital' },
        { Name: 'Paolo Hospital', Code: 'Paolo Hospital' },
        { Name: 'Raminthra Hospital', Code: 'Raminthra Hospital' },
        { Name: 'Royal Irrigation Hospital', Code: 'Royal Irrigation Hospital' },
        { Name: 'Panya Hospital', Code: 'Panya Hospital' }, 
        { Name: 'Wachira Hospital', Code: 'Wachira Hospital' },
        { Name: 'Vibhavadi Hospital', Code: 'Vibhavadi Hospital' },
    ];
    // maps the local data column to fields property
    public localFields: Object = { text: 'Name', value: 'Code' };
    // set the placeholder to MultiSelect Dropdown input element
    public localWaterMark: string = '    Select Hospital';

    onSubmit(form: NgForm): void {
      console.log(form.value.name);
      console.log(form.value.name2);
      console.log(form.value.name3);
    }

    public department: { [key: string]: Object; }[] = [
      { Name2: 'แพทย์ทั่วไป', Code2: 'แพทย์ทั่วไป' },
      { Name2: 'กุมารแพทย์', Code2: 'กุมารแพทย์' },
      { Name2: 'จักษุแพทย์', Code2: 'จักษุแพทย์' },
      { Name2: 'จิตแพทย์', Code2: 'จิตแพทย์' },
      { Name2: 'ประสาทแพทย์', Code2: 'ประสาทแพทย์' },
      { Name2: 'พยาธิแพทย์', Code2: 'พยาธิแพทย์' },
      { Name2: 'ผิวหนัง', Code2: 'ผิวหนัง' },
      { Name2: 'เวชศาสตร์ครอบครัว', Code2: 'เวชศาสตร์ครอบครัว' },
      { Name2: 'เวชศาสตร์ฉุกเฉิน', Code2: 'เวชศาสตร์ฉุกเฉิน' },
      { Name2: 'เวชศาสตร์ป้องกัน', Code2: 'เวชศาสตร์ป้องกัน' },
      { Name2: 'เวชศาสตร์ฟื้นฟู', Code2: 'เเวชศาสตร์ฟื้นฟู' },
      { Name2: 'รังสีแพทย์', Code2: 'รังสีแพทย์' },
    ];
     // maps the local data2 column to fields property
      public branchFields: Object = { text: 'Name2', value: 'Code2' };
    // set the placeholder to MultiSelect Dropdown input element
      public branchMark: string = ' Select Department';
  

      public province: { [key: string]: Object; }[] = [
        { Name3: 'Chiang Mai Province', Code3: 'Chiang Mai Province' },    { Name3: 'Chiang Rai Province', Code3: 'Chiang Rai Province' },
        { Name3: 'Lampang Province', Code3: 'Lampang Province' },        { Name3: 'Lamphun Province', Code3: 'Lamphun Province' },
        { Name3: 'Mae Hong Son Province', Code3: 'Mae Hong Son Province' },  { Name3: 'Nan Province', Code3: 'Nan Province' },
        { Name3: 'Phayao Province', Code3: 'Phayao Province' },  { Name3: 'Phrae Province', Code3: 'Phrae Province' },
        { Name3: 'Uttaradit Province', Code3: 'Uttaradit Province' }, { Name3: 'Kalasin Province', Code3: 'Kalasin Province' },
        { Name3: 'Khon Kaen Province', Code3: 'Khon Kaen Province' },{ Name3: 'Chaiyaphum Province', Code3: 'Chaiyaphum Province' },
        { Name3: 'Nakhon Phanom Province', Code3: 'Nakhon Phanom Province' },{ Name3: 'Nakhon Ratchasima Province', Code3: 'Nakhon Ratchasima Province' },
        { Name3: 'Bueng Kan Province', Code3: 'Bueng Kan Province' },{ Name3: 'Buriram Province', Code3: 'Buriram Province' },
        { Name3: 'Maha Sarakham Province', Code3: 'Maha Sarakham Province' },{ Name3: 'Mukdahan Province', Code3: 'Mukdahan Province' },
        { Name3: 'Yasothon Province', Code3: 'Yasothon Province' },{ Name3: 'Roi Et  Province', Code3: 'Roi Et  Province' },
        { Name3: 'Loei Province', Code3: 'Loei Province' },{ Name3: 'Sakon Nakhon Province', Code3: 'Sakon Nakhon Province' },
        { Name3: 'Surin Province', Code3: 'Surin Province' },{ Name3: 'Sisaket Province', Code3: 'Sisaket Province' },
        { Name3: 'Nong Khai Province', Code3: 'Nong Khai Province' },{ Name3: 'Nong Bua Lamphu Province', Code3: 'Nong Bua Lamphu Province' },
        { Name3: 'Udon Thani Province', Code3: 'Udon Thani Province' },{ Name3: 'Ubon Ratchathani  Province', Code3: 'Ubon Ratchathani  Province' },
        { Name3: 'Amnat Charoen  Province', Code3: 'Amnat Charoen  Province' },        { Name3: 'Bangkok  Province', Code3: 'Bangkok  Province' },
        { Name3: 'Kamphaeng Phet   Province', Code3: 'Kamphaeng Phet   Province' },        { Name3: 'Chai Nat   Province', Code3: 'Chai Nat  Province' },
        { Name3: 'Nakhon Nayok  Province', Code3: 'Nakhon Nayok  Province' },        { Name3: 'Nakhon Pathom  Province', Code3: 'Nakhon Pathom  Province' },
        { Name3: 'Nakhon Sawan  Province', Code3: 'Nakhon Sawan  Province' },        { Name3: 'Nonthaburi  Province', Code3: 'Nonthaburi  Province' },
        { Name3: 'Pathum Thani   Province', Code3: 'Pathum Thani   Province' },   { Name3: 'Phra Nakhon Si Ayutthaya  Province', Code3: 'Phra Nakhon Si Ayutthaya  Province' },
        { Name3: 'Phichit  Province', Code3: 'Phichit  Province' },    { Name3: 'Phitsanulok  Province', Code3: 'Phitsanulok Province' },
        { Name3: 'Phetchabun Province', Code3: 'Phetchabun  Province' },        { Name3: 'Lopburi  Province', Code3: 'Lopburi  Province' },
        { Name3: 'Samut Prakan Province', Code3: 'Samut Prakan  Province' },        { Name3: 'Samut Songkhram  Province', Code3: 'Samut Songkhram  Province' },
        { Name3: 'Samut Sakhon  Province', Code3: 'Samut Sakhon  Province' },        { Name3: 'Sing Buri   Province', Code3: 'Sing Buri   Province' },
        { Name3: 'Sukhothai  Province', Code3: 'Sukhothai Province' },      { Name3: 'Suphan Buri  Province', Code3: 'Suphan Buri  Province' },
        { Name3: 'Saraburi  Province', Code3: 'Saraburi  Province' },    { Name3: 'Ang Thong  Province', Code3: 'Ang Thong  Province' },
        { Name3: 'Uthai Thani Province', Code3: 'Uthai Thani Province' },  { Name3: 'Chanthaburi Province', Code3: 'Chanthaburi Province' },
        { Name3: 'Chachoengsao Province', Code3: 'Chachoengsao Province' },        { Name3: 'Chonburi Province', Code3: 'Chonburi Province' },
        { Name3: 'Trat Province', Code3: 'Trat Province' },        { Name3: 'Prachinburi  Province', Code3: 'Prachinburi  Province' },
        { Name3: 'Rayong Province', Code3: 'Rayong Province' },        { Name3: 'Sa Kaeo Province', Code3: 'Sa Kaeo Province' },
        { Name3: 'Kanchanaburi Province', Code3: 'Kanchanaburi Province' },        { Name3: 'Tak Province', Code3: 'Tak Province' },
        { Name3: 'Prachuap Khiri Khan Province', Code3: 'Prachuap Khiri Khan Province' },        { Name3: 'Phetchaburi Province', Code3: 'Phetchaburi Province' },
        { Name3: 'Ratchaburi  Province', Code3: 'Ratchaburi  Province' },        { Name3: 'Krabi Province', Code3: 'Krabi Province' },
        { Name3: 'Chumphon Province', Code3: 'Chumphon Province' },        { Name3: 'Trang Province', Code3: 'Trang Province' },
        { Name3: 'Nakhon Si Thammarat Province', Code3: 'Nakhon Si Thammarat Province' },        { Name3: 'Narathiwat Province', Code3: 'Narathiwat Province' },
        { Name3: 'Pattani Province', Code3: 'Pattani Province' },        { Name3: 'Phang Nga Province', Code3: 'Phang Nga Province' },
        { Name3: 'Phatthalung Province', Code3: 'Phatthalung Province' },        { Name3: 'Phuket  Province', Code3: 'Phuket  Province' },
        { Name3: 'Ranong Province', Code3: 'Ranong Province' },        { Name3: 'Satun Province', Code3: 'Satun Province' },
        { Name3: 'Songkhla Province', Code3: 'Songkhla Province' },        { Name3: 'Surat Thani  Province', Code3: 'Surat Thani  Province' },
        { Name3: 'Yala  Province', Code3: 'Yala  Province' },
     ];
       // maps the local data2 column to fields property
        public countyFields: Object = { text: 'Name3', value: 'Code3' };
      // set the placeholder to MultiSelect Dropdown input element
        public countyMark: string = '    Select Province';


        constructor() {}
        hospital: any[] = [];
      
        ngOnInit() {
          Promise.all([this.getListHospital()])
            .then((res) => {})
            .catch((err) => {
              console.log(err);
            });
        }
        getListHospital() {
          // data ที่ดึงจาก api from db
          this.hospital.push(
            {
              id: Math.random().toString(16).slice(2, 8),
              date_short:
                this.dateconvert(new Date(2020, 11, 25)).split(' ')[1] +
                ' ' +
                this.dateconvert(new Date(2020, 11, 25)).split(' ')[2],
              doctortype: 'แพทย์ทั่วไป',
              position_doc: 'Check up',
              hospital: 'โรงพยาบาลกรุงเทพ',
              money: '2500',
              datetime: this.dateconvert(new Date(2020, 11, 25)),
              start_time: '9.00',
              end_time: '13.00',
            },
            {
              id: Math.random().toString(16).slice(2, 8),
              date_short:
                this.dateconvert(new Date(2020, 11, 22)).split(' ')[1] +
                ' ' +
                this.dateconvert(new Date(2020, 11, 22)).split(' ')[2],
              doctortype: 'แพทย์ทั่วไป',
              position_doc: 'ER',
              hospital: 'โรงพยาบาลกรุงเทพ',
              money: '2200',
              datetime: this.dateconvert(new Date(2020, 11, 22)),
              start_time: '9.00',
              end_time: '14.00',
            },
            {
              id: Math.random().toString(16).slice(2, 8),
              date_short:
                this.dateconvert(new Date(2020, 11, 21)).split(' ')[1] +
                ' ' +
                this.dateconvert(new Date(2020, 11, 21)).split(' ')[2],
              doctortype: 'แพทย์ทั่วไป',
              position_doc: 'Check up',
              hospital: 'โรงพยาบาลกรุงเทพ',
              money: '2200',
              datetime: this.dateconvert(new Date(2020, 11, 21)),
              start_time: '9.00',
              end_time: '15.00',
            },
            {
              id: Math.random().toString(16).slice(2, 8),
              date_short:
                this.dateconvert(new Date(2020, 11, 20)).split(' ')[1] +
                ' ' +
                this.dateconvert(new Date(2020, 11, 20)).split(' ')[2],
              doctortype: 'แพทย์ทั่วไป',
              position_doc: 'ER',
              hospital: 'โรงพยาบาลกรุงเทพ',
              money: '1200',
              datetime: this.dateconvert(new Date(2020, 11, 20)),
              start_time: '9.00',
              end_time: '11.00',
            },
            {
              id: Math.random().toString(16).slice(2, 8),
              date_short:
                this.dateconvert(new Date(2020, 11, 19)).split(' ')[1] +
                ' ' +
                this.dateconvert(new Date(2020, 11, 19)).split(' ')[2],
              doctortype: 'แพทย์ทั่วไป',
              position_doc: 'Check up',
              hospital: 'โรงพยาบาลกรุงเทพ',
              money: '2500',
              datetime: this.dateconvert(new Date(2020, 11, 19)),
              start_time: '9.00',
              end_time: '16.00',
            }
          );
        }
        sortListbyDate() {
          // this.hospital.sort()
        }
        dateconvert(date: Date) {
          var now = date;
          var thday = new Array(
            'อาทิตย์',
            'จันทร์',
            'อังคาร',
            'พุธ',
            'พฤหัส',
            'ศุกร์',
            'เสาร์'
          );
          var thmonth = new Array(
            'มกราคม',
            'กุมภาพันธ์',
            'มีนาคม',
            'เมษายน',
            'พฤษภาคม',
            'มิถุนายน',
            'กรกฎาคม',
            'สิงหาคม',
            'กันยายน',
            'ตุลาคม',
            'พฤศจิกายน',
            'ธันวาคม'
          );
      
          return (
            'วัน' +
            thday[now.getDay()] +
            'ที่ ' +
            now.getDate() +
            ' ' +
            thmonth[now.getMonth()] +
            ' ' +
            (0 + now.getFullYear() + 543)
          );
        }
        navigateDetailbyId(id) {
          console.log(id);
        }
        
}
