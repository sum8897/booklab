import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { Platform } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { SidememuComponent } from './pages/sidememu/sidememu.component';
import { ContactusComponent } from './pages/contactus/contactus.component';

import { Network } from '@ionic-native/network/ngx';
import { DoctorslistComponent } from './pages/doctorslist/doctorslist.component';
import { RegisterComponent } from './pages/register/register.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MainpageComponent } from './pages/mainpage/mainpage.component';
import { LabListComponent } from './pages/lab-list/lab-list.component';

@NgModule({
  declarations: [
              AppComponent,
              LoginComponent,
              RegisterComponent,
              SidememuComponent,
              ContactusComponent,
              DoctorslistComponent,
              DashboardComponent,
              MainpageComponent,
              LabListComponent,
            ],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [Platform,
    StatusBar,
    SplashScreen,
    Network,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
