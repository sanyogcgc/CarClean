import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import {Router } from '@angular/router';
@Component({
    selector: 'app-web-ui',
    templateUrl: './View/Dashboard.html',
    styleUrls: []
})

 export class DashboardComponent{

    constructor(
        private router: Router,  ) {}

    moveLogin() {
        this.router.navigate(['']);
    }


 }


