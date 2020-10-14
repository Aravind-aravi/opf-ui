import { Component, OnInit } from '@angular/core';
import { BusinessService } from '../../services/business-service';
import { AuthenticationService } from 'src/app/services/authentication-service';
import { Router } from '@angular/router';
import { EmployeeData } from 'src/app/details/employeedata';

@Component({
  selector: 'app-business-view-profile-page',
  templateUrl: './business-view-profile-page.component.html',
  styleUrls: ['./business-view-profile-page.component.css']
})
export class BusinessViewProfilePageComponent implements OnInit {
data3:any;
  employeeid;
  employee:any="";
  loggedIn=this.loginService.isUserLoggedIn();
employeedata:EmployeeData=new EmployeeData;
  constructor(private businessService:BusinessService,
    private loginService:AuthenticationService,private router:Router) { }

  ngOnInit(): void {
    this.employeeid=+sessionStorage.getItem('id');
    this.getEmployeeDataById();

  }

  getEmployeeDataById(){
    this.businessService.getEmployeeDataById(this.employeeid).subscribe(data2 =>
      {
      console.log(this.employee);
      this.employee=data2;
    }
    )}

updateEmployee(){
  console.log(this.employee);
   this.businessService.updateEmployeeData(this.employee).subscribe(data3=>{this.data3=data3;})
}



    logout(){
      this.loginService.logOut();
      this.router.navigate(['/businessLoginPage']);
    }


}
