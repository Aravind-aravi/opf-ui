import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { UserService } from '../../services/user-service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication-service';
import { UserData } from 'src/app/details/userdata';

@Component({
  selector: 'app-user-settings-page',
  templateUrl: './user-settings-page.component.html',
  styleUrls: ['./user-settings-page.component.css']
})
export class UserSettingsPageComponent implements OnInit {

  user: any = "";
  userid;
 data3:any="";
  loggedIn= this.loginService.isUserLoggedIn();
userdata:UserData=new UserData;
  constructor(private userService: UserService,
    private loginService: AuthenticationService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.userid = +sessionStorage.getItem('id');
    this.getUserDataById();
    // this.userdata=this.user;
  }


  getUserDataById() {
    this.userService.getUserDataById(this.userid).subscribe(data2=> {
      console.log(this.user);
      this.user = data2;
    }
    )
  }

  updateUserData(){
  console.log(this.user);
     this.userService.updateUserData(this.user).subscribe(
      data3=>{
        console.log(this.user);
        this.data3=data3;}
    )
  }

  logout() {
    this.loginService.logOut();
    this.router.navigate(['/userLoginPage']);
  }


}
