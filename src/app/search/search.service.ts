import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})

export class SearchService {

  // private username: string;
  // private clientsecret = 'f41453364bd60c7dde4977378522d4adacdf7bf1';
  // baseUrl: string = 'https://api.github.com/users/' + this.username + '?access_token' + this.clientsecret;

  // constructor(private http: HttpClient) { }

  // searchProfile(queryString: string) {
  //   const _URL = this.baseUrl + queryString;
  //   // let _URL = this.baseUrl + queryString;
  //   return this.http.get(_URL);
  //   console.log(this.http.get(_URL));
  //   }
}
