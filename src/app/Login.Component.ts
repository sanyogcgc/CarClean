import {Component , Inject } from '@angular/core';
import { FormGroup, FormControl, FormBuilder , Validators} from '@angular/forms';
import {Router} from '@angular/router';
import { LoginModel } from './Model/LoginModel';
import { CarCleanService } from './car-clean.service';
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';

@Component({
    selector: 'app-login-ui',
    templateUrl: './View/Login.html',
    styleUrls: []
})

export class LoginComponent{
    public LoginForm: FormGroup;
    public error: boolean = false;
    errorMessage: any;

constructor( private _router: Router , private _carCleanService: CarCleanService,
    private FormBuilder: FormBuilder , @Inject(LOCAL_STORAGE) private storage: WebStorageService)  {
    this.LoginForm = this.FormBuilder.group({
        username: ['', [Validators.required]],
        password: ['', [Validators.required]]
   });
} 
Login(data: LoginModel) {
    this._carCleanService.loginEmployee(this.LoginForm.value).subscribe((data) => {
        if (data == 0)
        {
            this.error = true;
         //alert('Mobile or Email already exist!!!');
        }
        else
         {
            this._carCleanService.sessionUserID = data;
            this.storage.set('UserSessionData', data);

            this._router.navigate(['/Dashboard']);
            this.error = false;
         }
    }, error => this.errorMessage = error);
}
moveRegistration() {
        this._router.navigateByUrl('/Registration');
    }
}



