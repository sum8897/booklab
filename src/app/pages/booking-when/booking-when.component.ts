import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { UserService } from 'src/app/services/user.service';
import { BookingLabComponent } from '../booking-lab/booking-lab.component';
import { BookingWhoomComponent } from '../booking-whoom/booking-whoom.component';

@Component({
  selector: 'app-booking-when',
  templateUrl: './booking-when.component.html',
  styleUrls: ['./booking-when.component.scss'],
})
export class BookingWhenComponent implements OnInit {
  @Input() bookingWhere:any;
  @Input() bookingWhom:any;
  fees=600;
  type: any='when';
  constructor(public modalCtrl: ModalController,
             private router: Router,
             private user: UserService) { 
              this.type="when";
              console.log(this.type);
             }

  ngOnInit() {

  }
  async segmentChanged(ev: any) {
    this.type = ev.detail.value;
    console.log(this.type);
    if(this.type=="where"){
      this.user.lab_type="";
      this.user.lab_type=this.type;
      this.router.navigateByUrl('/booking-lab')
      // const modal =await this.modalCtrl.create({
      //   component: BookingLabComponent
      // });
      // return await modal.present();
    }
    if(this.type=="whom"){
      this.user.lab_type="";
      this.user.lab_type=this.type;
      this.router.navigateByUrl('/booking-whoom')
      // const modal =await this.modalCtrl.create({
      //   component: BookingWhoomComponent
      // });
      // return await modal.present();
    }if(this.type=="when"){
      this.user.lab_type="";
      this.user.lab_type=this.type;
      this.router.navigateByUrl('/booking-when')
      // const modal =await this.modalCtrl.create({
      //   component: BookingWhenComponent
      // });
      // return await modal.present();
    }
  }
  dismiss(){
    this.modalCtrl.dismiss(); 
  }
}
