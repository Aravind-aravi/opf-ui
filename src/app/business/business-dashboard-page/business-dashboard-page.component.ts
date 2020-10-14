import { Component, OnInit  ,Input, Output ,EventEmitter} from '@angular/core';
import { UserService } from 'src/app/services/user-service';
import { BusinessService } from 'src/app/services/business-service';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectData } from 'src/app/details/projectdata';
import { Observable } from 'rxjs';
import { AuthenticationService } from 'src/app/services/authentication-service';
import { ContributeduserData } from 'src/app/details/contributeduserdata';
@Component({
  selector: 'app-business-dashboard-page',
  templateUrl: './business-dashboard-page.component.html',
  styleUrls: ['./business-dashboard-page.component.css']
})
export class BusinessDashboardPageComponent implements OnInit {
  fileUploads: Observable<string[]>;

  constructor(private userService:UserService,
    private businessService:BusinessService,
    private loginService:AuthenticationService,
    private route:ActivatedRoute,
    private router:Router) { }
id:any;

data:any;
data4:any;
data2:any;
projectdata: ProjectData = new ProjectData;
contributeduserdata:ContributeduserData=new ContributeduserData;

employeeid;
employee:any="";
loggedIn=this.loginService.isUserLoggedIn();
data5:any;
  ngOnInit(): void {
    this.employeeid =+sessionStorage.getItem('id');
    this.getemployeeByid();

  this.id=this.route.snapshot.params['id'];
  this.getProjectDataById();
  this.updateProjectData();
  this.projectdata=this.data2;
  this.fileUploads = this.userService.getFiles();

    }

   updateProjectData(){
     console.log(this.data2);

    this.businessService.updateProjectData(this.data2).subscribe(data =>{this.data=data;})
    //    {
    //   this.data = data;
    //   }
    //   )

  }


  getProjectDataById(){
  this.businessService.getProjectDataById(this.id).subscribe(data7 =>
    {

    this.data2=data7;
  }
  )}

  getemployeeByid() {
    this.businessService.getEmployeeDataById(this.employeeid).subscribe(data3 => {
      this.employee = data3;
    }
        )
  }

approved(id){
  console.log(id);
  this.contributeduserdata.id=id;
  this.contributeduserdata.approved_status="APPROVED";
   console.log(this.contributeduserdata);
  this.userService.updateContributedUserData(this.contributeduserdata).subscribe(data4=>{this.data4=data4;})
  console.log("approved");
}
reject(id){ console.log(id);
  this.contributeduserdata.id=id;
  this.contributeduserdata.approved_status="REJECTED";
   console.log(this.contributeduserdata);
  this.userService.updateContributedUserData(this.contributeduserdata).subscribe(data5=>{this.data5=data5;})
  console.log("REJECTED");

  }

  logout(){
    this.loginService.logOut();
    this.router.navigate(['/businessLoginPage']);
  }


}



