import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'    // we declare that this service should be created by the root application injector.
})
export class ProfileService {


  private username: string;
  private clientsecret = 'd6cc08e3d3538c361538764522c05bc476e7b77c';
  baseUrl: string = 'https://api.github.com/users/' + this.username + '?access_token' + this.clientsecret;

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
    return this.http.get('https://api.github.com/users/' + this.username + '/repos?access_token' + this.clientsecret);
    map(res => res);
  }
  }

