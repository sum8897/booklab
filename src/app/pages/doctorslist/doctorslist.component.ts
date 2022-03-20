import { Component, OnInit } from '@angular/core';
import { IonSlides, NavController } from '@ionic/angular';
@Component({
  selector: 'app-doctorslist',
  templateUrl: './doctorslist.component.html',
  styleUrls: ['./doctorslist.component.scss'],
})
export class DoctorslistComponent implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {}
  home(){
    this.navCtrl.navigateRoot('/mainpage')
  }
  hospitals(){
    this.navCtrl.navigateRoot('/hospitallist')
  }
  labs(){
    this.navCtrl.navigateRoot('/lablist')
  }

  pharmacyList=[
    {
      id:1,
      img:'../../assets/icon/dr_Specialist.png',
      name:'MBBS, MD(General Medicine) Physician etc',
    },
    {
      id:2,
      img:'../../assets/icon/dr_location.png',
      name:'Kailash Hospital, Noida',
    },
    {
      id:3,
      img:'../../assets/icon/dr_lang.png',
      name:'English,Hindi,Tamil',
    },
]
}
