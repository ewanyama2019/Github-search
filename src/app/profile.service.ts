import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ProfileService {


  private username: string;
  private clientsecret = '5be2bacf98ee90698772aa913d1509f165ff0ee3';

  constructor(private http: HttpClient) {
    console.log('Service is now ready');
    this.username = 'ewanyama2019';
  }

  getProfileInfomation() {
    return this.http.get('https://api.github.com/users/' + this.username + '?access_token=5be2bacf98ee90698772aa913d1509f165ff0ee3');
      }
  updateProfile(username: string) {
    this.username = username;
  }
}
