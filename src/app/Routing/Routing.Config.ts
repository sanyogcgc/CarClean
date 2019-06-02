
import { Routes } from '@angular/router';
import { LoginComponent } from '../Login.Component';
import { DashboardComponent } from '../Dashboard.Component';
import { RegistrationComponent } from '../Registration.Componenet';

 export const RoutingConfig: Routes = [
     {
         path: '',
         component: LoginComponent},
     {
         path: 'Dashboard',
         component: DashboardComponent },
         {
             path: 'Registration',
             component: RegistrationComponent },

]
;


