import { Component, OnInit } from '@angular/core';
import { BusinessService } from '../../services/business-service'
import { ProjectData } from 'src/app/details/projectdata';
import { AuthenticationService } from 'src/app/services/authentication-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-business-project-page',
  templateUrl: './business-project-page.component.html',
  styleUrls: ['./business-project-page.component.css']
})
export class BusinessProjectPageComponent implements OnInit {
date:any;
employeeid;
  employee:any;
  loggedIn=this.loginService.isUserLoggedIn();

  constructor(private businessService:BusinessService,
    private loginService:AuthenticationService,
    private router:Router) { }

projectdata: ProjectData = new ProjectData;

ngOnInit(): void {
  this.employeeid=+sessionStorage.getItem('id');
  this.getEmployeeDataById();
  }

 public addProjectData(){
   console.log(this.projectdata);
  this.projectdata.employee_id=+sessionStorage.getItem('id');
   console.log(this.projectdata);
   this.businessService.addProjectData(this.projectdata).subscribe(data => this.date = data);
   console.log(this.projectdata);
   console.log("posted successfully");
 }

 getEmployeeDataById(){
  this.businessService.getEmployeeDataById(this.employeeid).subscribe(data2 =>
    {
    this.employee=data2;
  }
  )}


  logout(){
    this.loginService.logOut();
    this.router.navigate(['/businessLoginPage']);
  }


}
