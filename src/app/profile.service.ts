import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'    //we declare that this service should be created by the root application injector.
})
export class ProfileService {


  private username: string;
  private clientsecret = 'f41453364bd60c7dde4977378522d4adacdf7bf1';

  constructor(private http: HttpClient) {
    console.log('Service is now ready');
    this.username = 'ewanyama2019';
  }

  getProfileInfomation() {
    return this.http.get('https://api.github.com/users/' + this.username + '?access_token' + this.clientsecret);
      }
  updateProfile(username: string) {
    this.username = username;
  }

  getProfileRepositories() {
    return this.http.get('https://api.github.com/users/' + this.username + '?repos/access_token' + this.clientsecret);
  }
  // findprofile() {
  //   this.profile.updateProfile(this.username);
  //   this.profile.getProfileInfomation().subscribe(data =>{
  //     this.username data;
  //     console.log(this.username);

  //   }
  // }
}
