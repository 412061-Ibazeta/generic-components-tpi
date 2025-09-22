import { Routes } from '@angular/router';
import {HomeBody} from './components/home-body/home-body';

export const routes: Routes = [
  { path: '', component: HomeBody },
  { path: 'home', component: HomeBody },
];
