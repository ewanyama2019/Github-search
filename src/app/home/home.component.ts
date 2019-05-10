import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  gitprofile: object;
  repos: object;
  username: string;

  constructor(private profile: ProfileService) { }

  ngOnInit() {
    this.profile.getProfileInfomation().subscribe(data => {
      this.gitprofile = data;
      console.log(this.gitprofile);
    }
    );
  }

}
