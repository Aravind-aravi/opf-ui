import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BusinessService } from '../../services/business-service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication-service';


@Component({
  selector: 'app-business-home-page',
  templateUrl: './business-home-page.component.html',
  styleUrls: ['./business-home-page.component.css']
})
export class BusinessHomePageComponent implements OnInit {
  public project;
  data: any;
  deletedata: any;

employeeid;
employee:any="";
loggedIn=this.loginService.isUserLoggedIn();


  constructor(private businessService: BusinessService,
    private loginService: AuthenticationService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.employeeid =+sessionStorage.getItem('id');
    this.getemployeeByid();
    this.loginService.getProjectData().subscribe(data => this.project = data);

  }
  public deleteProjectData(id: number) {
    this.businessService.deleteProjectData(id).subscribe(deletedata => this.project = deletedata);
    console.log("deleted successfully");
    this.router.navigate(['/businessHomePage']);

  }
  onselect(project) {
    this.router.navigate(['/businessDashboardPage', project.id]);
  }
  getemployeeByid() {
    this.businessService.getEmployeeDataById(this.employeeid).subscribe(data2 => {
      this.employee = data2;
    }
        )
  }


  logout(){
    this.loginService.logOut();
    this.router.navigate(['/businessLoginPage']);
  }


}
