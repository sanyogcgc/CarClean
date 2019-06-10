import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { RegistrationModel } from './Model/Registration.Model';
import { LoginModel } from './Model/LoginModel';

@Injectable()
export class CarCleanService {
  constructor(private _http: Http ) {}

  // Register user.
  saveEmployee( regData) {
  return this._http.post('http://localhost:1026/api/User/Registration', regData ).map(
    (response: Response) => response.json()).catch(this.errorHandler);

  }
  // Login user
  loginEmployee( loginData) {
    return this._http.post('http://localhost:1026/api/User/Login', loginData ).map(
      (response: Response) => response.json()).catch(this.errorHandler);
    }
   errorHandler(error: Response) {
       console.log(error);
       return Observable.throw(error);
       }
     }
