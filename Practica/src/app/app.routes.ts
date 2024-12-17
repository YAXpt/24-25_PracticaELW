import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UserAreaComponent } from './user-area/user-area.component';

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
    path: 'user/:id',
    component: UserAreaComponent,
    title: 'User Area'
  }
];
