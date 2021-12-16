import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, NavController } from '@ionic/angular';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss'],
})
export class MainpageComponent implements OnInit {

  @ViewChild('slides', {static: true}) slides: IonSlides;
  slideOpts = {
    initialSlide: 0,
    speed: 400,
    spaceBetween: 10,
    slidesPerView: 1.0,
    centeredSlide:true,
    autoplay:true
    // slidesPerColumn: 1,
  };
  ngOnInit() {}
  constructor(private navCtrl: NavController) {}
  locationcard = false;
  locationShow() {
    this.locationcard = true;
  }
  selectedReligion;
  selectedReligionId;
  selectReligion(e) {
    console.log(e.currentTarget.value);
    this.selectedReligion = e.currentTarget.value.name;
    this.selectedReligionId = e.currentTarget.value.id;
    this.locationcard = false;
  }

  locationList=[
    {id:1,name:'Mirzapur'},
    {id:2,name:'Allahabad'},
    {id:3,name:'Jhanshi'},
    {id:4,name:'Noida'},
    {id:5,name:'Greater Noida'},
    {id:6,name:'East Delhi'},
    {id:7,name:'South Delhi'},
    {id:8,name:'Lucknow'},
    {id:9,name:'Meeruth'}
  ]

  firstSlide=[
    {
      id:1,
      img:'../../assets/img/icon-1.png',
      name:'Search Best Online Professional'
    },
    {
      id:2,
      img:'../../assets/img/icon-2.png',
      name:'View Professional Profile'
    },
    {
      id:3,
      img:'../../assets/img/icon-3.png',
      name:'Get Instant Doctor Appoinment'
    },
    {
      id:4,
      img:'../../assets/img/icon-1.png',
      name:'Search Best Online Professional'
    },
    {
      id:5,
      img:'../../assets/img/icon-2.png',
      name:'View Professional Profile'
    },
    {
      id:6,
      img:'../../assets/img/icon-3.png',
      name:'Get Instant Doctor Appoinment'
    },
  ]

  serviceList=[
    {
      id:1,
      img:'../../assets/img/services/hospitals.jpg',
      name:'Hospitals (1000+)'
    },
    {
      id:2,
      img:'../../assets/img/services/doctors.jpg',
      name:'Doctors (50000+)'
    },
    {
      id:3,
      img:'../../assets/img/services/pharmacies.jpg',
      name:'Pharmacies (700+)'
    },
    {
      id:4,
      img:'../../assets/img/services/clinics.jpg',
      name:'Clinics (1450+)'
    },
    {
      id:5,
      img:'../../assets/img/services/laboratories.jpg',
      name:'Laboratories (6000+)'
    },
    {
      id:6,
      img:'../../assets/img/services/surgery-rooms.jpg',
      name:'Surgery Rooms (2600+)'
    },
  ]

  // Psychotherapist
  spelistList=[
    {
      id:1,
      img:'../../assets/img/doctors/doctor1.png',
      name:'Psychotherapist',
      text:'Depression, Anxiety, OCD, Eating Disorders'
    },
    {
      id:2,
      img:'../../assets/img/doctors/doctor2.png',
      name:'Child Specilist',
      text:'Vomiting, Cough, Stomach Issues for your child'
    },
    {
      id:3,
      img:'../../assets/img/services/pharmacies.jpg',
      name:'Physician',
      text:'Seasonal Fluss, Stomach issues, Headaches'
    },
    {
      id:4,
      img:'../../assets/img/services/clinics.jpg',
      name:'Gynaecologist',
      text:'PCOD, Period Issues, Pregnancy'
    },
    {
      id:5,
      img:'../../assets/img/services/laboratories.jpg',
      name:'Eye Specialist',
      text:'Eye strain, Dry eyes, Vision issues'
    },
  ]

  featureList=[
    {
      id:1,
      img:'../../assets/img/labs/mri-scanner.jpg',
      name:'MRI',
    },
    {
      id:2,
      img:'../../assets/img/labs/ct-scan.jpg',
      name:'CT Scan',
    },
    {
      id:3,
      img:'../../assets/img/labs/x-ray.jpg',
      name:'X Ray',
    },
    {
      id:4,
      img:'../../assets/img/labs/ultrasound.jpg',
      name:'UltraSound',
    },
  ]
    pharmacyList=[
      {
        id:1,
        img:'../../assets/img/Pharmacy/pharmacy2.png',
        name:'Order Medicine',
      },
      {
        id:2,
        img:'../../assets/img/Pharmacy/pharmacy2.png',
        name:'Healthcare Prodcuts',
      },
      {
        id:3,
        img:'../../assets/img/Pharmacy/pharmacy3.png',
        name:'Lab Tests',
      },
  ]

  specilist(){
    this.navCtrl.navigateRoot('/doctorlist')
  }

}
