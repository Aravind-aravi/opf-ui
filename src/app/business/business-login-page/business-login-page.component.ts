import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user-service';
import { EmployeeData } from '../../details/employeedata';
import { AuthenticationService } from '../../services/authentication-service';
import { Router } from '@angular/router';
import { BusinessService } from 'src/app/services/business-service';
@Component({
  selector: 'app-business-login-page',
  templateUrl: './business-login-page.component.html',
  styleUrls: ['./business-login-page.component.css']
})
export class BusinessLoginPageComponent implements OnInit {
  employeedata: EmployeeData = new EmployeeData;
  data: any;

  email:any = '';
  password :any= '';
  invalidLogin = false

  constructor(private userservice: UserService, private loginservice: AuthenticationService, private router: Router,
    private businessService: BusinessService) { }

  ngOnInit(): void {
  }

  addEmployeeData() {
    this.businessService.addEmployeeData(this.employeedata).subscribe(data => this.data = data);
    console.log(this.employeedata);
  }

  checkLogin() {
    (this.loginservice.authenticateemployee(this.email,this.password).subscribe(
      data2 => {

        this.router.navigate(['/businessHomePage']);
        this.invalidLogin = false;
        console.log("login");
      },
      error => {
        this.invalidLogin = true;
      }
    ));
  }

}
