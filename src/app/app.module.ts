import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginComponent } from './Login.Component';
import { DashboardComponent } from './Dashboard.Component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';
import { RoutingConfig } from './Routing/Routing.Config';





@NgModule({
  declarations: [
    AppComponent, DashboardComponent , LoginComponent,
  ],
  imports: [BrowserModule ,  RouterModule.forRoot(RoutingConfig), FormsModule, ReactiveFormsModule] ,
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
