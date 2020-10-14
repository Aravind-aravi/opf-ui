import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user-service';
import { UserData }  from '../../details/userdata';
import {AuthenticationService} from '../../services/authentication-service';
import { Router } from '@angular/router';
import { BusinessService } from 'src/app/services/business-service';
@Component({
  selector: 'app-user-login-page',
  templateUrl: './user-login-page.component.html',
  styleUrls: ['./user-login-page.component.css']
})
export class UserLoginPageComponent implements OnInit {
data:any;

email = '';
password = '';
invalidLogin = false;
id:String;
  constructor(private userservice:UserService,private loginservice:AuthenticationService,private router: Router,
    private businessService:BusinessService) { }

  userdata: UserData = new UserData;

  ngOnInit(): void {

  }

  addUserData(){
    this.userservice.addUserData(this.userdata).subscribe(data => this.data = data);
    console.log(this.userdata);
  }

  checkLogin(){
    (this.loginservice.authenticate(this.email,this.password).subscribe(
      data2 => {
        this.router.navigate(['/userHomePage']);
        this.invalidLogin = false;
      },
      error => {
        this.invalidLogin = true;
                }
    ));
     }

}
