import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user-service';
import { BusinessService } from 'src/app/services/business-service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication-service';
import { ProjectData } from 'src/app/details/projectdata';
import { UserData } from 'src/app/details/userdata';

@Component({
  selector: 'app-user-view-page',
  templateUrl: './user-view-page.component.html',
  styleUrls: ['./user-view-page.component.css']
})
export class UserViewPageComponent implements OnInit {
  id: any;
  data2: any;
  user: any = "";
  userid;
  data: any;
  projectdata: ProjectData = new ProjectData;
  userdata: UserData = new UserData;
  loggedIn = this.loginService.isUserLoggedIn();

  constructor(private userService: UserService,
    private businessService: BusinessService,
    private loginService: AuthenticationService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

    this.userid = +sessionStorage.getItem('id');
    this.getUserDataById();

    this.id = this.route.snapshot.params['id'];
    this.getProjectDataById();
  }

  getProjectDataById() {
    this.businessService.getProjectDataById(this.id).subscribe(data2 => {
      console.log(this.data2);
      this.data2 = data2;
    }
    )
  }


  onselect() {
    this.user.project_id = this.id;
    console.log(this.user);
   this.userService.startproject(this.user).subscribe(data => this.data = data);
    console.log("posted successfully");
   this.router.navigate(['/userProjectPage',this.id]);
  }

  getUserDataById() {
    this.userService.getUserDataById(this.userid).subscribe(data2 => {
      console.log(this.user);
      this.user = data2;
    }
    )
  }

  logout() {
    this.loginService.logOut();
    this.router.navigate(['/userLoginPage']);
  }


}
