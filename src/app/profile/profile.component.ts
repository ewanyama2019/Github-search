import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  gitprofile: object;
  repos: object;
  username: string;

  constructor() { }

  ngOnInit() {
    // this.data.getProfileInfomation().subscribe(data =>){
    //   this.gitprofile = data;
    //   console.log(this.gitprofile);
    // }
  }

}
