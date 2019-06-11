import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginComponent } from './Login.Component';
import { DashboardComponent } from './Dashboard.Component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistrationComponent } from './Registration.Componenet';
import { RouterModule } from '@angular/router';
import { RoutingConfig } from './Routing/Routing.Config';
import {HttpClientModule} from '@angular/common/http';
import { CarCleanService } from './car-clean.service';
import {HttpModule} from '@angular/http';
import { StorageServiceModule} from 'angular-webstorage-service';


@NgModule({
  declarations: [
    AppComponent, DashboardComponent , LoginComponent, RegistrationComponent
  ],
  imports: [BrowserModule ,  RouterModule.forRoot(RoutingConfig), FormsModule, ReactiveFormsModule, HttpClientModule ,
     HttpModule , StorageServiceModule] ,
  providers: [CarCleanService],
  bootstrap: [AppComponent]
})
export class AppModule { }
