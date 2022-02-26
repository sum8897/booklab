import { Component, OnInit ,  ViewChild, } from '@angular/core';
import { IonSegment, NavController } from '@ionic/angular';
@Component({
  selector: 'app-lab-list',
  templateUrl: './lab-list.component.html',
  styleUrls: ['./lab-list.component.scss'],
})
export class LabListComponent implements OnInit {
  @ViewChild(IonSegment) segment: IonSegment;
  homepick=true;
  centerpick=false;
  constructor(private navCtrl: NavController) { 
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
