import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private auth: AuthService,
    private user: UserService) { }
cityRes:any;
cityData:any;
  cityList() {
    this.user.present('...');
    this.auth.getcity().subscribe((data) => {
      this.user.dismiss();
      this.cityRes=data;
      this.cityData=this.cityRes.data;
    }, err => {
      this.user.dismiss();
    })
  }
}
