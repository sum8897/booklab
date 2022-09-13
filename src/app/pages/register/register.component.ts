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
      'email': contactForm.value.email,
      'name': contactForm.value.name,
      'phone': contactForm.value.phone,
      'password': contactForm.value.password
    }
    // this.formData = new FormData();
    // this.formData.append('email',contactForm.value.email);
    // this.formData.append('name',contactForm.value.name);
    // this.formData.append('phone',contactForm.value.phone);
    // this.formData.append('password',contactForm.value.password);
    this.user.present('');
    this.auth.registerUser(reg_data).subscribe((data) => {
      this.user.dismiss();
      this.regRes = data;
      this.regData = this.regRes.message;
      this.user.showToast(this.regData);
    }, err => {
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
