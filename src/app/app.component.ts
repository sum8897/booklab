import { Location } from '@angular/common';
import { Component, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { AlertController , IonRouterOutlet, Platform} from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { Network } from '@ionic-native/network/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html', 
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  @ViewChild(IonRouterOutlet, {static: true}) routeroutlet: IonRouterOutlet;
  @ViewChildren(IonRouterOutlet) routerOutlets: QueryList < IonRouterOutlet > ;

  lastTimeBackPress = 0;
  timePeriodToExit = 2000;
  navigate : any;
  constructor(
    private alertController: AlertController,
              private location: Location,
              private platform: Platform,
              private statusBar: StatusBar,
              private splashScreen: SplashScreen,
              private router : Router,
              private network: Network,
  ) {
    this.sideMenu();
    this.initializeApp();
    this.backButtonEvent();
    //  this.NetworkButtonEvent()
     window.addEventListener('offline',()=>{
       this.openAlert();
     })
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  NetworkButtonEvent(){
    this.platform.backButton.subscribeWithPriority(111,()=>{
    
     // this.router.navigate(['']) 
     navigator["app"].exitApp;
    })
  }
 async openAlert(){
const alert=await this.alertController.create({
  header: 'Check Network Connection',
  message: 'You do not have Internet Connection',
  buttons:[{
    text:'ok',
    handler:()=>{
      navigator['app'].exitApp();
    }
  }]
});
await alert.present();
  }
backButtonEvent() {
  this.platform.backButton.subscribeWithPriority(0, () => {
    this.routerOutlets.forEach(async(outlet: IonRouterOutlet) => {
      if (this.router.url != '/home') {
        // await this.router.navigate(['/']);
        await this.location.back();
      } else if (this.router.url === '/home') {
        if (new Date().getTime() - this.lastTimeBackPress >= this.timePeriodToExit) {
          this.lastTimeBackPress = new Date().getTime();
          this.presentAlertConfirm();
        } else {
          navigator['app'].exitApp();
        }
      }
    });
  });
}

async presentAlertConfirm() {
  const alert = await this.alertController.create({
    header: 'BookLab Confirmation',
    message: 'Are you sure you want to exit the BookLab App?',
    buttons: [{
      text: 'Cancel',
      role: 'cancel',
      cssClass: 'secondary',
      handler: (blah) => {}
    }, {
      text: 'Close App',
      handler: () => {
        navigator['app'].exitApp();
      }
    }]
  });

  await alert.present();
}



  sideMenu()
  {
    this.navigate =
    [
      {
        title : "Home",
        url   : "/mainpage",
        icon  : "home"
      },
      {
        title : "Doctor List",
        url   : "/doctorlist",
        icon  : "people-outline"
      },
      {
        title : "Dashboard",
        url   : "/dashboard",
        icon  : "podium-outline"
      },
      {
        title : "Support",
        url   : "/dashboard",
        icon  : "call-outline"
      },
      {
        title : "LogIn",
        url   : "/login",
        icon  : "call-outline"
      },
      {
        title : "Register",
        url   : "/register",
        icon  : "call-outline"
      },
      {
        title : "booking Lab",
        url   : "/booking-lab",
        icon  : "call-outline"
      },
      {
        title : "By Whom",
        url   : "/booking-whoom",
        icon  : "call-outline"
      },
      {
        title : "When",
        url   : "/booking-when",
        icon  : "call-outline"
      },
    ]
  }
}
