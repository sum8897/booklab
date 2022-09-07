import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';
import { BookingWhenComponent } from '../booking-when/booking-when.component';
import { BookingWhoomComponent } from '../booking-whoom/booking-whoom.component';


@Component({
  selector: 'app-booking-lab',
  templateUrl: './booking-lab.component.html',
  styleUrls: ['./booking-lab.component.scss'],
})
export class BookingLabComponent implements OnInit {
  @Input() bookingWhom:any;
  @Input() bookingWhen:any;
  fees=600;
  type: any="where";
  constructor(public modalCtrl: ModalController,
              private router: Router,
              private auth: AuthService,
              private user: UserService) {
                this.type="where";
                console.log(this.type);
              }

  ngOnInit() {

  }
  async segmentChanged(ev: any) {
    this.type = ev.detail.value;
    console.log(this.type);
    if(this.type=="when"){
      this.user.lab_type="";
      this.user.lab_type=this.type;
      this.router.navigateByUrl('/booking-when');
      // const modal =await this.modalCtrl.create({
      //   component: BookingWhenComponent,
      //   componentProps: {bookingWhen: this.type}
      // });
      // return await modal.present();
    }
    if(this.type=="whom"){
      this.user.lab_type="";
      this.user.lab_type=this.type;
      this.router.navigateByUrl('/booking-whoom');
      // const modal =await this.modalCtrl.create({
      //   component: BookingWhoomComponent,
      //   componentProps: {bookingWhom: this.type}
      // });
      // return await modal.present();
    }if(this.type=="where"){
      this.user.lab_type="";
      this.user.lab_type=this.type;
      this.router.navigateByUrl('/booking-lab');
      // const modal =await this.modalCtrl.create({
      //   component: BookingLabComponent,
      //   componentProps: {bookingWhere: this.type}
      // });
      // return await modal.present();
    }
  }
  dismiss(){
    this.modalCtrl.dismiss(); 
  }
}
