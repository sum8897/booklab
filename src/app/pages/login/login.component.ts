import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
@ViewChild('password') password: ElementRef;
isChecked;
  constructor(private navCtrl: NavController) { }
passwordShow:boolean=false;
eyename="eye-off-outline";
passwordType='password';
  ngOnInit() {
    this.isChecked=localStorage.getItem('checked')
  }
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
  specilist(){
    this.navCtrl.navigateRoot('/doctorlist')
  }
  home(){
    this.navCtrl.navigateRoot('/mainpage')
  }
  hospitals(){
    this.navCtrl.navigateRoot('/hospitallist')
  }
  labs(){
    this.navCtrl.navigateRoot('/lablist')
  }
  checkClick(e){
    console.log(e.detail.checked);
    let checked=e.detail.checked;
    localStorage.setItem('checked',checked)
  }
// Only Integer Numbers
keyPressNumbers(event) {
  var inp = String.fromCharCode(event.keyCode);
  var charCode = (event.which) ? event.which : event.keyCode;
  // Only Numbers 0-9
  // if ((charCode < 48 || charCode > 57)) {
  //   event.preventDefault();
  //   console.log('false number not')
  //   return false;
    
  // } else {
  //   console.log('true numb')
  //   return true;
  // }

   if (/[a-zA-Z0-9]/.test(inp)) {
    console.log('true numb')
    return true;
  } else {
    event.preventDefault();
    console.log('false numb')
    return false;
  }
  
}
}
