import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, NavController } from '@ionic/angular';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss'],
})
export class MainpageComponent implements OnInit {

  @ViewChild('slides', {static: true}) slides: IonSlides;
  slideOpts1 = {
    initialSlide: 0,
    speed: 1000,
    spaceBetween: 10,
    slidesPerView: 3.0,
    centeredSlide:true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
      stopOnLastSlide: true
},
    pager:true,
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      // clickable: true
    }
    // slidesPerColumn: 1,
  };
  slideOpts2 = {
    initialSlide: 0,
    speed: 400,
    spaceBetween: 10,
    slidesPerView: 2.0,
    centeredSlide:true,
    autoplay: false
    // slidesPerColumn: 1,
  };
  slideOpts4 = {
    initialSlide: 0,
    speed: 400,
    spaceBetween: 5,
    slidesPerView: 2.0,
    centeredSlide:true,
    autoplay: false
    // slidesPerColumn: 1,
  };
  slideOpts = {
    initialSlide: 0,
    speed: 400,
    spaceBetween: 10,
    slidesPerView: 3.0,
    centeredSlide:true,
    autoplay:true
    // slidesPerColumn: 1,
  };
  slideOpts3 = {
    initialSlide: 0,
    speed: 1000,
    spaceBetween: 0,
    slidesPerView: 2.0,
    centeredSlide:true,
    // autoplay:true
    // slidesPerColumn: 1,
  };

  ngOnInit() {
  }
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
 
  appointment=[
    {
      id:1,
      img:'../../assets/homepage/Search-dr.png',
      name:'Search Best Online Professional'
    },
    {
      id:2,
      img:'../../assets/homepage/profile.png',
      name:'View Professional Profile'
    },
    {
      id:3,
      img:'../../assets/homepage/Instant-dr.png',
      name:'Get Intance Doctor Appointment'
    },
    {
      id:4,
      img:'../../assets/homepage/Search-dr.png',
      name:'Search Best Online Professional'
    },
    {
      id:5,
      img:'../../assets/homepage/profile.png',
      name:'View Professional Profile'
    },
    {
      id:6,
      img:'../../assets/homepage/Instant-dr.png',
      name:'Get Intance Doctor Appointment'
    },
  ]

    digitalData=[
    {
      id:1,
      img:'../../assets/icon/MEDICINE-IMAGE.png',
      name:'Search Best Online Professional'
    },
    {
      id:2,
      img:'../../assets/icon/MEDICINE-IMAGE.png',
      name:'View Professional Profile'
    },
    {
      id:3,
      img:'../../assets/icon/MEDICINE-IMAGE.png',
      name:'Get Intance Doctor Appointment'
    },
    {
      id:4,
      img:'../../assets/icon/MEDICINE-IMAGE.png',
      name:'Search Best Online Professional'
    },
    {
      id:5,
      img:'../../assets/icon/MEDICINE-IMAGE.png',
      name:'View Professional Profile'
    },
    {
      id:6,
      img:'../../assets/icon/MEDICINE-IMAGE.png',
      name:'Get Intance Doctor Appointment'
    },
  ]
  orderappointment=[
    {
      id:1,
      img:'../../assets/homepage/profile.png',
      name:'View Professional Profile'
    },
    {
      id:2,
      img:'../../assets/homepage/Instant-dr.png',
      name:'Get Intance Doctor Appointment'
    },
  ]

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
      img:'../../assets/homepage/Hospitals_image.png',
      name:'Hospitals (1000+)'
    },
    {
      id:2,
      img:'../../assets/homepage/Pharmacies_image.png',
      name:'Doctors (50000+)'
    },
    {  
      id:3,
      img:'../../assets/homepage/Hospitals_image.png',
      name:'Pharmacies (700+)'
    },
    {
      id:4,
      img:'../../assets/homepage/Pharmacies_image.png',
      name:'Clinics (1450+)'
    },
    {
      id:5,
      img:'../../assets/homepage/Hospitals_image.png',
      name:'Laboratories (6000+)'
    },
    {
      id:6,
      img:'../../assets/homepage/Pharmacies_image.png',
      name:'Surgery Rooms (2600+)'
    },
  ]
number=[
  {
    id:1,
   number:'2k+',
   text:'Experience Doctors'
  },
  {
    id:2,
   number:'4k+',
   text:'Satisfied labs',
  },
  {
    id:3,
   number:'6k+',
   text:'Total Calls'
  },
  {
    id:4,
   number:'30k+',
   text:'Total Clients'
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
  labs(){
    this.navCtrl.navigateRoot('/lablist')
  }

}
