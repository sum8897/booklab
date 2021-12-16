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
  homeClick(){
    this.navCtrl.navigateRoot('/home')
  }
}
