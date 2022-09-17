import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';
import { BookingLabComponent } from '../booking-lab/booking-lab.component';
import { BookingWhenComponent } from '../booking-when/booking-when.component';

@Component({
  selector: 'app-booking-whoom',
  templateUrl: './booking-whoom.component.html',
  styleUrls: ['./booking-whoom.component.scss'],
})
export class BookingWhoomComponent implements OnInit {
  @Input() bookingWhere:any;
  @Input() bookingWhen:any;
  type: any="whom";
  fees=600;
  constructor(public modalCtrl: ModalController,
              private router: Router,
              private user: UserService,
              private auth: AuthService) {
                this.type="whom";
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
      this.router.navigateByUrl('/booking-when')
    }
    else if(this.type=="whom"){
      this.user.lab_type="";
      this.user.lab_type=this.type;
      this.router.navigateByUrl('/booking-whoom')
      // const modal =await this.modalCtrl.create({
      //   component: BookingWhoomComponent
      // });
      // return await modal.present();
    }else if(this.type=="where"){
      this.user.lab_type="";
      
      this.user.lab_type=this.type;
      this.router.navigateByUrl('/booking-lab')
      // const modal =await this.modalCtrl.create({
      //   component: BookingLabComponent
      // });
      // return await modal.present();
    }
  }
  name:any;
  phone:any;
  email:any;
  age:any;
  gender:any;
  formData:any;
  submit(){
    
    if(this.name==undefined || this.phone==undefined || this.email==undefined || this.age==undefined || this.gender==undefined){
      alert('Please fill All Input Fileds')
    }else{

      console.log(this.name);
      console.log(this.phone);
      console.log(this.email);
      console.log(this.age);
      console.log(this.gender);

      let body={
        'email': this.email,
        'name' : this.name,
        'phone': this.phone,
        'age'  : this.age,
        'gender':this.gender, 
        'date': '20-09-2022',
        'time':'10:30',
        'type':'doctor',
        'reference_id': '15'

      }
      this.user.present('wait...');
      this.auth.bookingApi(body).subscribe((booking)=>{
        this.user.dismiss();
      console.log(booking)
      },err=>{
        this.user.dismiss();
        console.log(err)
      })

    }

  }
  onAddressSubmit(formdata:any){
    console.log(formdata.value);
  }
  dismiss(){
    this.modalCtrl.dismiss(); 
  }
}
