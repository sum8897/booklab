import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {}
  logIn(){
    this.navCtrl.navigateRoot('/login')
  }
}
