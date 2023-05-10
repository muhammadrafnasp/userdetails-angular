import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private http: HttpClient) { }

  // user details api url
  userDetails = 'https://reqres.in/api/users?page=1';

  userData(): Observable<any> {
    return this.http.get(this.userDetails)
  }

  searchKey = new BehaviorSubject('')
}
