import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user-service';
import { BusinessService } from 'src/app/services/business-service';
import { Router, ActivatedRoute } from '@angular/router';

import {AuthenticationService} from '../../services/authentication-service';
@Component({
  selector: 'app-user-home-page',
  templateUrl: './user-home-page.component.html',
  styleUrls: ['./user-home-page.component.css']
})
export class UserHomePageComponent implements OnInit {
email:any;
user:any="";
userid;
 public business;
  constructor(private userService:UserService,
    private businessService:BusinessService,
    private loginService:AuthenticationService,private router:Router,private route:ActivatedRoute) {

     }

  ngOnInit(): void {

    this.userid=+sessionStorage.getItem('id');
    this.getUserDataById();
    this.loginService.getProjectData().subscribe(data => this.business = data);
  }

onselect(project){
    this.router.navigate(['/userViewPage',project.id]);
  }

  getUserDataById(){
    this.userService.getUserDataById(this.userid).subscribe(data2 =>
      {
      console.log(this.user);
      this.user=data2;
    }
    )}

 logout(){
   this.loginService.logOut();
   this.router.navigate(['/userLoginPage']);
 }
loggedIn= this.loginService.isUserLoggedIn();


}

