import {Component} from '@angular/core';
import { FormGroup, FormControl, FormBuilder , Validators} from '@angular/forms';
import {Router} from '@angular/router';
import { LoginModel } from './Model/LoginModel';
import { CarCleanService } from './car-clean.service';

@Component({
    selector: 'app-login-ui',
    templateUrl: './View/Login.html',
    styleUrls: []
})

export class LoginComponent{
    public LoginForm: FormGroup;
    public error: boolean = false;
    errorMessage: any;

constructor( private _router: Router , private _carCleanService: CarCleanService, private FormBuilder: FormBuilder)  {
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
             
            this._router.navigate(['/Dashboard']);
            this.error = false;
         }
    }, error => this.errorMessage = error);
}
moveRegistration() {
        this._router.navigateByUrl('/Registration');
    }
}



