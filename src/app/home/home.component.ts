import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
import { FormControl } from '@angular/forms';
import { map, filter, debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  providers: [ProfileService], // add the prividers to the component
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  gitprofile: any;
  repos: any;
  username: string;

  constructor(private profile: ProfileService) {
    }

  searchProfile(){
    this.profile.updateProfile(this.username);

    this.profile.getProfileInfomation().subscribe(gitprofile => {
      this.gitprofile = gitprofile;
      console.log(gitprofile);
    }
    );

    this.profile.getProfileRepositories().subscribe(repos => {
      this.repos = repos;
      console.log(repos);
    });

  }

  ngOnInit() {
    }

}
