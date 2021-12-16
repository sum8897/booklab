import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
@ViewChild('password') password: ElementRef;

  constructor(private navCtrl: NavController) { }
passwordShow:boolean=false;
eyename="eye-off-outline";
passwordType='password';
  ngOnInit() {}
  passToggle(){
    if(this.passwordShow){
      this.passwordShow=false;
      this.passwordType='password';
      this.eyename='eye-off-outline';
      this.password.nativeElement.setAttribute('type','password');
    }else{
      this.passwordShow=true;
      this.passwordType='text';
      this.eyename='eye-outline'
      this.password.nativeElement.setAttribute('type','password');
    }
  }
  registerIn(){
    this.navCtrl.navigateRoot('/register')
  }
  submit(){
    this.navCtrl.navigateRoot('/mainpage')
  }
}
