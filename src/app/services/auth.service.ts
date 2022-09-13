import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest ,HttpParams} from '@angular/common/http';
import { tap, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url="https://nocodesucessor.com/booklabonline/api/";
  constructor(private http: HttpClient,
             public user:UserService) { }


             registerUser(reg_data:any){
              // var headers = new HttpHeaders();
              // headers = headers.append('Content-Type', 'application/x-www-form-urlencoded');
              let options = {
                headers: new HttpHeaders().set('content-Type','application/x-www-form-urlencoded'), 
               
            };
              return this.http.post(this.url + 'registration', reg_data, options).pipe(tap(res => {
              }))
            }


            loginUser(reg_data){
              var headers = new HttpHeaders();
              headers = headers.append('Content-Type', 'application/x-www-form-urlencoded');
              return this.http.post(this.url + 'login', reg_data, { headers: headers }).pipe(tap(res => {
              }))
            }


             getBannerImageApi() {
              // let token = localStorage.getItem('token');
              var headers = new HttpHeaders();
              headers = headers.append('Content-Type', 'application/json');
              // headers = headers.append('Authorization', 'Bearer' + ' ' + token);
              return this.http.get(this.url + 'banner_list', { headers: headers }).pipe(tap(res => {
              }))
            }
            getDoctorHomelistApi() {
              var headers = new HttpHeaders();
              headers = headers.append('Content-Type', 'application/json ');
              return this.http.get(this.url + 'doctor_cat_list', { headers: headers }).pipe(tap(res => {
              }))
            }

            getLabHomelistApi() {
              var headers = new HttpHeaders();
              headers = headers.append('Content-Type', 'application/json ');
              return this.http.get(this.url + 'lab_cat_list', { headers: headers }).pipe(tap(res => {
              }))
            }
            getDoctorlistApi() {
              var headers = new HttpHeaders();
              headers = headers.append('Content-Type', 'application/json ');
              return this.http.get(this.url + 'doctor_list', { headers: headers }).pipe(tap(res => {
              }))
            }
            getLablistApi() {
              //*** */ Center lab list also in lab page 
              var headers = new HttpHeaders();
              headers = headers.append('Content-Type', 'application/json ');
              return this.http.get(this.url + 'center_lab', { headers: headers }).pipe(tap(res => {
              }))
            }
            getHealthHomeListApi() {
              var headers = new HttpHeaders();
              headers = headers.append('Content-Type', 'application/json ');
              return this.http.get(this.url + 'health_list', { headers: headers }).pipe(tap(res => {
              }))
            }
            gethHomeLabListApi() {
              // **** in home page help checks 
              var headers = new HttpHeaders();
              headers = headers.append('Content-Type', 'application/json ');
              return this.http.get(this.url + 'home_lab_list', { headers: headers }).pipe(tap(res => {
              }))
            }
            gethHomePickUpApi() {
              // **** in home page help checks 
              var headers = new HttpHeaders();
              headers = headers.append('Content-Type', 'application/json ');
              return this.http.get(this.url + 'home_lab', { headers: headers }).pipe(tap(res => {
              }))
            }
            getcity(){
              var headers = new HttpHeaders();
              headers = headers.append('Content-Type', 'application/json ');
              return this.http.get(this.url + 'citylist', { headers: headers }).pipe(tap(res => {
              }))
            }
            bookingApi(booking_data:any){
              var headers = new HttpHeaders();
              headers = headers.append('Content-Type', 'application/x-www-form-urlencoded');
              return this.http.post(this.url + 'booking', booking_data, { headers: headers }).pipe(tap(res => {
              }))
            }


}
