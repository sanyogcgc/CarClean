import {Component} from '@angular/core';
import { FormGroup, FormControl, FormBuilder , Validators} from '@angular/forms';
import {Router} from '@angular/router';
import { LoginModel } from './Model/LoginModel';
@Component({
    selector: 'app-login-ui',
    templateUrl: './View/Login.html',
    styleUrls: []
})

export class LoginComponent{
    public LoginForm: FormGroup;
    public error: boolean = false;

constructor( private router: Router ,  private FormBuilder: FormBuilder)  {
    this.LoginForm = this.FormBuilder.group({
        username: ['', [Validators.required]],
        password: ['', [Validators.required]]
   });
} 
Login(data: LoginModel) {
    if (data.username == "admin" && data.password == "admin") {
       
        this.router.navigateByUrl("/Dashboard");
    }
    else {
        this.error = true;
    }

}
moveRegistration() {
        this.router.navigate(['/Registration']);
    }
}



