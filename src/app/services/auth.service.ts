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

             getBannerImageApi() {
              // let token = localStorage.getItem('token');
              var headers = new HttpHeaders();
              headers = headers.append('Content-Type', 'application/json ');
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
              var headers = new HttpHeaders();
              headers = headers.append('Content-Type', 'application/json ');
              return this.http.get(this.url + 'lab_list', { headers: headers }).pipe(tap(res => {
              }))
            }

}
