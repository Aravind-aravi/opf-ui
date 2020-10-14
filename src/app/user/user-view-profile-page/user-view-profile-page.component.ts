import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user-service';
import { AuthenticationService } from 'src/app/services/authentication-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-view-profile-page',
  templateUrl: './user-view-profile-page.component.html',
  styleUrls: ['./user-view-profile-page.component.css']
})
export class UserViewProfilePageComponent implements OnInit {

  user: any = "";
  userid;
  loggedIn = this.loginService.isUserLoggedIn();

  constructor(private userService: UserService, private loginService: AuthenticationService, private router: Router) {
  }

  ngOnInit(): void {
    this.userid = +sessionStorage.getItem('id');
    this.getUserDataById();

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
