import { Injectable } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  lab_type:any;
  constructor( public toast:ToastController,
    public loadingController: LoadingController,) { }

  isLoading = false;
           
  async present( msg ) {
    this.isLoading = true;
    return await this.loadingController.create({
     message: msg,
      // duration: 5000,
    }).then(a => {
      a.present().then(() => {
        console.log('presented');
        if (!this.isLoading) {
          a.dismiss().then(() => console.log('abort presenting'));
        }
      });
    });
  }          
  async dismiss() {
    this.isLoading = false;
    return await this.loadingController.dismiss().then(() => console.log('dismissed'));
  }

async showToast(msg){
let toast =await this.toast.create({
message: msg,
position: 'middle',
duration: 3000
});
toast.present();
}

}
