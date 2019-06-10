import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import {Router } from '@angular/router';
import { CarCleanService } from './car-clean.service';
@Component({
    selector: 'app-web-ui',
    templateUrl: './View/Dashboard.html',
    styleUrls: []
})

 export class DashboardComponent{
    SessionData: number= null;
    errorMessage: any;
    name: string;
    email: string;
    mobile: string;
    constructor(
        private router: Router, private _carCleanService: CarCleanService ) {
            this.SessionData = _carCleanService.sessionUserID;
            this.loadUserDeatils();

        }

        loadUserDeatils(){
            this._carCleanService.getUserdetails(this.SessionData).subscribe((data) => {
                if (data != null)
                {
                    this.name = data.Name;
                    this.mobile = data.Mobile;
                    this.email = data.Email;
                }
            }, error => this.errorMessage = error);

    }

    moveLogin() {
        this.router.navigate(['']);
    }


 }


