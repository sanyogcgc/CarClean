
import { Routes } from '@angular/router';
import { LoginComponent } from '../Login.Component';
import { DashboardComponent } from '../Dashboard.Component';

 export const RoutingConfig: Routes = [
     {
         path: '',
         component: LoginComponent},
     {
         path: 'Dashboard',
         component: DashboardComponent }

]
;


