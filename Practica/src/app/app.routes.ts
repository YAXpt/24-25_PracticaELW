import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UserAreaComponent } from './user-area/user-area.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Pikmin Home'
  },
  {
    path: 'login',
    component: LoginComponent,
    title: 'Login'
  },
  {
    path: 'user',
    component: UserAreaComponent,
    title: 'User Area'
  },
  {
    path: 'profile/:id',
    component: UserProfileComponent,
    title: 'Profile'
  }
];
