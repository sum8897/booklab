import { Component, OnInit ,  ViewChild, } from '@angular/core';
import { AlertController, IonSegment, NavController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-lab-list',
  templateUrl: './lab-list.component.html',
  styleUrls: ['./lab-list.component.scss'],
})
export class LabListComponent implements OnInit {
  @ViewChild(IonSegment) segment: IonSegment;
  homepick=true;
  centerpick=false;
  test_type:any;
location:any;
lab:any;
  constructor(private navCtrl: NavController,
    public auth: AuthService,
    public user:UserService,
    private alertController: AlertController) { 
      this.labdataget();
    this.test_type="test Type";
    this.location="location";
    this.lab="specialist";
  }
  labRes;
  labDataAll;
  labdataget(){
    this.user.present('');
    this.auth.getLablistApi().subscribe((lab_data)=>{
      this.user.dismiss();
      console.log(lab_data)
    },err=>{
  this.user.dismiss();
    })
  }
  categorias = [
    {
      id:1,
name:'Home Pickup',
    },{
 id:2,
 name:'Center Visit'
  }
  ];
  ngOnInit() {
  }
  ionViewDidEnter() {
    console.log(this.categorias[0].name);
    this.segment.value = this.categorias[0].name;
 }
  segmentChanged(ev: any) {
    console.log('Segment changed', ev.detail.value);
    if(ev.detail.value=="Home Pickup"){
      this.homepick=true;
      this.centerpick=false;
    }else{
      this.homepick=false;
      this.centerpick=true;
    }
  }
  checkedValue(data,e){
    console.log(JSON.stringify(data)+"::"+JSON.stringify(e.detail))
  }
  book(data){
    console.log(data)
  }
  async selectTestType(){
    const alert = await this.alertController.create({
      header: 'Test Type',
 
      inputs: [
        {
          label: 'test A',
          type: 'radio',
          value: 'text_a',
        },
        {
          label: 'test B',
          type: 'radio',
          value: 'test_b',
        },
        {
          label: 'test C',
          type: 'radio',
          value: 'test_c',
        },
        {
          label: 'Test D',
          type: 'radio',
          value: 'test_d',
        },
        {
          label: 'test E',
          type: 'radio',
          value: 'test_e',
        },
      ],
      buttons: [
     {
      text:'ok',
      role: 'confirm',
     handler:(alert)=>{
      this.test_type=alert;
     console.log(alert)
     },
     }
      ],
    });

    await alert.present();
  }
 async selectLocation(){
  const alert = await this.alertController.create({
    header: 'Select Location',

    inputs: [
      {
        label: 'Noida',
        type: 'radio',
        value: 'noida',
      },
      {
        label: 'Delhi',
        type: 'radio',
        value: 'Delhi',
      },
      {
        label: 'Gr Noida',
        type: 'radio',
        value: 'gr noida',
      },
      {
        label: 'Allahabad',
        type: 'radio',
        value: 'allahabad',
      },
      {
        label: 'Naini',
        type: 'radio',
        value: 'Naini',
      },
    ],
    buttons: [
   {
    text:'ok',
    role: 'confirm',
   handler:(alert)=>{
    this.location=alert;
   console.log(alert)
   },
   }
    ],
  });

  await alert.present();
 }
async selectLab(){
  const alert = await this.alertController.create({
    header: 'Select Lab',

    inputs: [
      {
        label: 'Lab A',
        type: 'radio',
        value: 'lab_a',
      },
      {
        label: 'Lab B',
        type: 'radio',
        value: 'lab_b',
      },
      {
        label: 'Lab C',
        type: 'radio',
        value: 'lab_c',
      },
      {
        label: 'lab_d',
        type: 'radio',
        value: 'lab_d',
      },
    ],
    buttons: [
   {
    text:'ok',
    role: 'confirm',
   handler:(alert)=>{
    this.lab=alert;
   console.log(alert)
   },
   }
    ],
  });

  await alert.present();
 }
  home(){
    this.navCtrl.navigateRoot('/mainpage')
  }
  specilist(){
    this.navCtrl.navigateRoot('/doctorlist')
  }
  labdata=[
    {
    id:1,
    name: 'Dr Batra Lab',
    test: '2 Tests Included',
    offprice: 999,
    dis: 30,
    price: 699.3,
    img: '../../../assets/icon/HEALTHIANS.png'
  },
  {
    id:2,
    name: 'Max Lab',
    test: '3 Tests Included',
    offprice: 1999,
    dis: 30,
    price: 1199.4,
    img:'../../../assets/icon/thyrocare.png'
  },
  {
    id:3,
    name: 'Vedanta Delhi',
    test: '2 Tests Included',
    offprice: 1999,
    dis: 40,
    price: 1199.4,
    img: '../../../assets/icon/HEALTHIANS.png'
  },
]

centerdata=[
  {
  id:1,
  name: 'Medicare Lab',
  test: '2 Tests Included',
  offprice: 999,
  dis: 30,
  price: 699.3,
  img: '../../../assets/icon/HEALTHIANS.png'
},
{
  id:2,
  name: 'Dr Lab Lab',
  test: '3 Tests Included',
  offprice: 1999,
  dis: 40,
  price: 1199.4,
  img:'../../../assets/icon/thyrocare.png'
},
{
  id:3,
  name: 'Pathology Point Allahabad',
  test: '2 Tests Included',
  offprice: 1999,
  dis: 20,
  price: 1199.4,
  img:'../../../assets/icon/thyrocare.png'
},
]
}
