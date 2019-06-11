import { Component , Inject} from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import {Router } from '@angular/router';
import { CarCleanService } from './car-clean.service';
import {UserListModel} from './Model/UserList.Model';
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';

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
    userList: UserListModel[];
    constructor(
        private router: Router, private _carCleanService: CarCleanService ,
        @Inject(LOCAL_STORAGE)  private storage: WebStorageService ) {
            this.SessionData = this.storage.get('UserSessionData');
            this.loadUserDeatils();

        }

        loadUserDeatils(){
            this._carCleanService.getUserdetails(this.storage.get('UserSessionData')).subscribe((data) => {
                if (data != null)
                {
                    this.name = data.Name;
                    this.mobile = data.Mobile;
                    this.email = data.Email;
                    this.userList = data.userList;
                }
            }, error => this.errorMessage = error);

    }

    moveLogin() {
        this.router.navigate(['']);
    }


 }


