import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder,Validators } from '@angular/forms';
import { RegistrationModel } from './Model/Registration.Model';

@Component ({
    selector: 'app-register',
    templateUrl: './View/Registration.html',
    styleUrls: []
})

export class RegistrationComponent{
    public RegisterForm: FormGroup;
    private error: boolean = false;
    constructor(
        private router: Router , private RegisterFormBuilder: FormBuilder) {
       this.RegisterForm = this.RegisterFormBuilder.group({
           name : ['', [Validators.required]],
           mobile : ['', [Validators.required]],
           email : ['', [Validators.required]],

       });
        }

        moveLogin() {
        this.router.navigate(['']);
    }

    Register(data: RegistrationModel) {
       this.error = true;
    }

}