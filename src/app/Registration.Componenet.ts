import { Component, OnInit , Inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { RegistrationModel } from './Model/Registration.Model';
import { CarCleanService } from './car-clean.service';
import { Http, Headers } from '@angular/http';
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';


@Component ({
selector: 'app-register',
templateUrl: './View/Registration.html',
styleUrls: []
})

export class RegistrationComponent{
public RegisterForm: FormGroup;
private error: boolean = false;
private errorUserExist: boolean = false;
errorMessage: any;
constructor(
    private _router: Router , private _carCleanService: CarCleanService, private RegisterFormBuilder: FormBuilder ,
    @Inject(LOCAL_STORAGE) private storage: WebStorageService ) {
 this.RegisterForm = this.RegisterFormBuilder.group({
 name : ['', [Validators.required]],
 mobile : ['', [Validators.required]],
 email : ['', [Validators.required]],

 });
}

moveLogin() {
this._router.navigate(['']);
}

Register(data: RegistrationModel) {
if (!this.RegisterForm.valid) {
this.error = true;
return;
}

this._carCleanService.saveEmployee(this.RegisterForm.value).subscribe((data1) => {
    if (data1 == 0)
    {
        this.errorUserExist = true;
     //alert('Mobile or Email already exist!!!');
    }
    else
     {
        this.storage.set('UserSessionData', data1);

        this._router.navigate(['/Dashboard']);
        this.errorUserExist = false;

     }
}, error => this.errorMessage = error);
this.error = false;

}

}