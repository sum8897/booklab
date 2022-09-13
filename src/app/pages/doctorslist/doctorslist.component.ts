import { Component, OnInit,  NgZone } from '@angular/core';
import { AlertController, IonSlides, NavController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';
@Component({
  selector: 'app-doctorslist',
  templateUrl: './doctorslist.component.html',
  styleUrls: ['./doctorslist.component.scss'],
})
export class DoctorslistComponent implements OnInit {
price:any;
location:any;
specialist:any;

latitude: any = 0; //latitude
longitude: any = 0; //longitude
address: string;
  constructor(private navCtrl: NavController,
              public auth: AuthService,
              public user:UserService,
              private alertController: AlertController,
              private geolocation: Geolocation,
              private nativeGeocoder: NativeGeocoder) {
                this.doctorList();
                this.price="price";
                this.location="location";
                this.specialist="specialist";
               }

  ngOnInit() {}

  options = {
    timeout: 10000, 
    enableHighAccuracy: true, 
    maximumAge: 3600,
    maxResult:5,
    useLocale: true,
  };
  // use geolocation to get user's device coordinates
  getCurrentCoordinates() {
    this.geolocation.getCurrentPosition().then((resp) => {
      console.log(resp)
      this.latitude = resp.coords.latitude;
      this.longitude = resp.coords.longitude;
      this.getAddress(this.latitude, this.longitude);
     }).catch((error) => {
       console.log('Error getting location', error);
     });
  }
  // geocoder options
  nativeGeocoderOptions: NativeGeocoderOptions = {
    useLocale: true,
    maxResults: 5
  };
  // get address using coordinates
  getAddress(lat,long){
    this.nativeGeocoder.reverseGeocode(lat, long, this.nativeGeocoderOptions)
    .then((res: NativeGeocoderResult[]) => {
      this.address = this.pretifyAddress(res[0]);
      alert(this.address);
    })
    .catch((error: any) => {
      alert('Error getting location'+ (error));
    });
  }
  // address
  pretifyAddress(address){
    let obj = [];
    let data = "";
    for (let key in address) {
      obj.push(address[key]);
    }
    obj.reverse();
    for (let val in obj) {
      if(obj[val].length)
      data += obj[val]+', ';
    }
    return address.slice(0, -2);
  }

  async selectPrice(){
      const alert = await this.alertController.create({
        header: 'Select Price',
   
        inputs: [
          {
            label: '250',
            type: 'radio',
            value: '250',
          },
          {
            label: '500',
            type: 'radio',
            value: '500',
          },
          {
            label: '600',
            type: 'radio',
            value: '600',
          },
          {
            label: '800',
            type: 'radio',
            value: '800',
          },
          {
            label: '1000',
            type: 'radio',
            value: '1000',
          },
        ],
        buttons: [
       {
        text:'ok',
        role: 'confirm',
       handler:(alert)=>{
        this.price=alert;
       console.log(alert)
       },
       }
        ],
      });
  
      await alert.present();
    }
   async selectLocation(){
    const alert = await this.alertController.create({
      header: 'Select Location',
 
      inputs: [
        {
          label: 'Noida',
          type: 'radio',
          value: 'noida',
        },
        {
          label: 'Delhi',
          type: 'radio',
          value: 'Delhi',
        },
        {
          label: 'Gr Noida',
          type: 'radio',
          value: 'gr noida',
        },
        {
          label: 'Allahabad',
          type: 'radio',
          value: 'allahabad',
        },
        {
          label: 'Naini',
          type: 'radio',
          value: 'Naini',
        },
      ],
      buttons: [
     {
      text:'ok',
      role: 'confirm',
     handler:(alert)=>{
      this.location=alert;
     console.log(alert)
     },
     }
      ],
    });

    await alert.present();
   }
  async selectSpecialist(){
    const alert = await this.alertController.create({
      header: 'Select Specialization',
 
      inputs: [
        {
          label: 'Physicain',
          type: 'radio',
          value: 'physician',
        },
        {
          label: 'Oncologists',
          type: 'radio',
          value: 'oncologists',
        },
        {
          label: 'Physiatrists',
          type: 'radio',
          value: 'physiatrists',
        },
        {
          label: 'Urologists',
          type: 'radio',
          value: 'urologists',
        },
      ],
      buttons: [
     {
      text:'ok',
      role: 'confirm',
     handler:(alert)=>{
      this.specialist=alert;
     console.log(alert)
     },
     }
      ],
    });

    await alert.present();
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
  doctorListRes:any;
  doctorListData:any;
  doctorList(){
    this.user.present('');
    this.auth.getDoctorlistApi().subscribe((data)=>{
      this.user.dismiss();
      this.doctorListRes=data;
      this.doctorListData=this.doctorListRes.data;
      console.log(this.doctorListData)
    },err=>{
      this.user.dismiss();
    })

  }

  pharmacyList=[
    {
      id:1,
      img:'../../assets/icon/dr_Specialis.png',
      name:'MBBS, MD(General Medicine) Physician etc',
    },
    {
      id:2,
      img:'../../assets/icon/dr_location.png',
      name:'Kailash Hospital, Noida',
    },
    {
      id:3,
      img:'../../assets/icon/dr_lang.png',
      name:'English,Hindi,Tamil',
    },
]
}
