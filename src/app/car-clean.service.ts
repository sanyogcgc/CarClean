import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


@Injectable()
export class CarCleanService {
  myAppUrl: string = '';
  constructor(private _http: Http ) {
    }
  // getEmployees() {  
  //     return this._http.get(this.myAppUrl + 'api/Employee/Index')  
  //         .map((response: Response) => response.json())  
  //         .catch(this.errorHandler);  
  // }  
  // getEmployeeById(id: number) {  
  //     return this._http.get(this.myAppUrl + "api/Employee/Details/" + id)  
  //         .map((response: Response) => response.json())  
  //         .catch(this.errorHandler)  
  // }  
  saveEmployee(RegistrationModel) {

  return this._http.post('http://localhost:1026/api/Values/Registration', RegistrationModel).map(
    (response: Response) => response.json()).catch(this.errorHandler);

  }

  // updateEmployee(employee) {  
  //     return this._http.put(this.myAppUrl + 'api/Employee/Edit', employee)  
  //         .map((response: Response) => response.json())  
  //         .catch(this.errorHandler);  
  // }  
  // deleteEmployee(id) {  
  //     return this._http.delete(this.myAppUrl + "api/Employee/Delete/" + id)  
  //         .map((response: Response) => response.json())  
  //         .catch(this.errorHandler);  
  // }  
   errorHandler(error: Response) {
       console.log(error);
       return Observable.throw(error);
       }
     }
