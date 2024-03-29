import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { BookingLabComponent } from './pages/booking-lab/booking-lab.component';
import { BookingWhenComponent } from './pages/booking-when/booking-when.component';
import { BookingWhoomComponent } from './pages/booking-whoom/booking-whoom.component';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DoctorslistComponent } from './pages/doctorslist/doctorslist.component';
import { LabListComponent } from './pages/lab-list/lab-list.component';
import { LoginComponent } from './pages/login/login.component';
import { MainpageComponent } from './pages/mainpage/mainpage.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'mainpage',
    pathMatch: 'full'
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'register',
    component: RegisterComponent
  },
  {
    path:'contact',
    component:ContactusComponent
  },
  {
    path:'doctorlist',
    component: DoctorslistComponent
  },
  {
    path:'home/doctorlist',
    component: DoctorslistComponent
  },
  {
    path:'hospitallist',
    component: DashboardComponent
  },
  {
    path:'mainpage',
    component: MainpageComponent
  },
  {
    path:'lablist',
    component: LabListComponent
  },
  {
    path: 'booking-lab',
    component: BookingLabComponent
  },
  {
    path: 'booking-when',
    component: BookingWhenComponent
  },
  {
    path: 'booking-whoom',
    component: BookingWhoomComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
