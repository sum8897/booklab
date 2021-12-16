import { Component, ViewChild } from '@angular/core';
import { IonSlides, NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private navCtrl: NavController) {}
  registerIn(){
    this.navCtrl.navigateRoot('/register')
  }
  submit(){
    this.navCtrl.navigateRoot('/login')
  }
  mainpge(){
    this.navCtrl.navigateRoot('/mainpage')
  }
}
