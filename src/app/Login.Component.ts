import {Component} from '@angular/core';
import {Router} from '@angular/router';
@Component({
    selector: 'app-login-ui',
    templateUrl: './View/Login.html',
    styleUrls: []
})

export class LoginComponent{

constructor( private router: Router , )  {}

    moveDashboard() {
        this.router.navigate(['/Dashboard']);
    }
}



