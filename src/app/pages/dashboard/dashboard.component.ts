import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {}
  dashboard=[
    {
      id:1,
      name:'Doctors',
      img:'../../assets/img/icon-1.png',
    },
    {
      id:2,
      name:'Best Hospitals',
      img:'../../assets/img/icon-2.png',
    },
    {
      id:3,
      name:'Pharmacy Price',
      img:'../../assets/img/icon-3.png',
    },
    {
      id:4,
      name:'Laboratoty Prices & report',
      img:'../../assets/img/icon-2.png',
    },
    {
      id:5,
      name:'Doctors',
      img:'../../assets/img/icon-1.png',
    },
    {
      id:6,
      name:'Best Hospitals',
      img:'../../assets/img/icon-2.png',
    },
    {
      id:7,
      name:'Pharmacy Price',
      img:'../../assets/img/icon-3.png',
    },
    {
      id:8,
      name:'Laboratoty Prices & report',
      img:'../../assets/img/icon-2.png',
    },
    {
      id:5,
      name:'Doctors',
      img:'../../assets/img/icon-1.png',
    },
    {
      id:6,
      name:'Best Hospitals',
      img:'../../assets/img/icon-2.png',
    },
    {
      id:7,
      name:'Pharmacy Price',
      img:'../../assets/img/icon-3.png',
    },
    {
      id:8,
      name:'Laboratoty Prices & report',
      img:'../../assets/img/icon-2.png',
    },
  ]

}
