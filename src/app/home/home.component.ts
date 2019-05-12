import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  providers: [ProfileService], //add the prividers to the component
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  gitprofile: any;
  repos: object;
  username: string;

  constructor(private profile: ProfileService) { }

  ngOnInit() {
    this.profile.getProfileInfomation().subscribe(gitprofile => {
      this.gitprofile = gitprofile;
      console.log(gitprofile);
    }
    );
  }

}
