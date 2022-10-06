import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  formData: FormData = new FormData();
  constructor(private navCtrl: NavController,
    private user: UserService,
    private auth: AuthService) { }

  ngOnInit() { }
  regRes;
  regData;
  onSubmit(contactForm: any) {
    console.log(contactForm.value);
    let reg_data = {
      email: contactForm.value.email,
      name: contactForm.value.name,
      phone: contactForm.value.phone,
      password: contactForm.value.password
    }
    console.log(typeof(reg_data))
    this.user.present('');
    this.auth.registerUser(JSON.stringify(reg_data)).subscribe((data) => {
      this.user.dismiss();
      this.regRes = data;
      this.regData = this.regRes.message;
      this.user.showToast(this.regData);
      console.log(data);
      if(localStorage.getItem('bookingClick')=='bookingClick'){
        this.navCtrl.navigateForward(['booking-whoom'])
      }
      else{
        this.navCtrl.navigateForward(['mainpage']);
      }
    }, err => {
      if(localStorage.getItem('bookingClick')=='bookingClick'){
        this.navCtrl.navigateForward(['booking-whoom'])
      }
      else{
        this.navCtrl.navigateForward(['mainpage']);
      }
      this.user.dismiss();
      alert(err.error)
    })
  }
  logIn() {
    this.navCtrl.navigateRoot('/login')
  }
  specilist() {
    this.navCtrl.navigateRoot('/doctorlist')
  }
  home() {
    this.navCtrl.navigateRoot('/mainpage')
  }
  hospitals() {
    this.navCtrl.navigateRoot('/hospitallist')
  }
  labs() {
    this.navCtrl.navigateRoot('/lablist')
  }
}
