import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  providers: [ProfileService], // add the prividers to the component
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  gitprofile: any;
  repos: object;
  username: string;

  constructor(private profile: ProfileService) { }

  ngOnInit() {
    this.profile.getProfileInfomation().subscribe(gitprofile => {
      this.gitprofile = gitprofile;
      console.log(gitprofile);
    });
   }

}
