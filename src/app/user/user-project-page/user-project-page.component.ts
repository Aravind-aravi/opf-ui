import { Component, OnInit,Input, Output ,EventEmitter, ɵAPP_ID_RANDOM_PROVIDER } from '@angular/core';
import { UserService } from '../../services/user-service';
import { ActivatedRoute, Router } from '@angular/router';
import { BusinessService } from 'src/app/services/business-service';
import { Observable } from 'rxjs';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { AuthenticationService } from 'src/app/services/authentication-service';
import { ContributeduserData } from 'src/app/details/contributeduserdata';

@Component({
  selector: 'app-user-project-page',
  templateUrl: './user-project-page.component.html',
  styleUrls: ['./user-project-page.component.css']
})
export class UserProjectPageComponent implements OnInit {
  @Input() users:any="";
  @Output() usersData=new EventEmitter();
id:any;
data2:any;
selectedFiles: FileList;
currentFile: File;
progress = 0;
message = '';
data3:any;
data4:any;
user:any="";
userid;
fileInfos: Observable<any>;
approvedid:any;
pending:any;
loggedIn= this.loginservice.isUserLoggedIn();
contributeddata:ContributeduserData=new ContributeduserData;
  constructor(private userService:UserService,
    private loginservice:AuthenticationService,
    private businessService:BusinessService,private route:ActivatedRoute,private router:Router) {

  }

  ngOnInit(): void {
    this.approvedid=+sessionStorage.getItem('approveid');

    this.userid=+sessionStorage.getItem('id');
    this.getUserDataById();

    this.id=this.route.snapshot.params['id'];
    this.getProjectDataById();
    this.fileInfos = this.userService.addfile(File);
  }

  getProjectDataById(){
    this.businessService.getProjectDataById(this.id).subscribe(data2 =>
      {
      this.data2=data2;
    }
    )}


  onClick(){
    this.users.rented=!this.users.rented;
    this.usersData.emit(this.users)
  }
  selectFile(event) {
    this.selectedFiles = event.target.files;
  }
  getUserDataById(){
    this.userService.getUserDataById(this.userid).subscribe(data2 =>
      {
      console.log(this.user);
      this.user=data2;
    }
    )}

  upload() {

    this.progress = 0;

    this.currentFile = this.selectedFiles.item(0);
    console.log(this.currentFile);
    this.userService.upload(this.currentFile).subscribe(
      event => {
        if (event.type === HttpEventType.UploadProgress) {
          this.progress = Math.round(100 * event.loaded / event.total);
        } else if (event instanceof HttpResponse) {
          this.message = event.body.message;
          this.fileInfos = this.userService.addfile(File);
        }
      },
      err => {
        this.progress = 0;
        this.message = 'Could not upload the file!';
        this.currentFile = undefined;
      });

    this.selectedFiles = undefined;
    console.log("uploaded successfully");

  }


uploadfile(id){
  this.contributeddata.project_id=this.id;
  this.contributeddata.user_id=this.userid;
  this.contributeddata.id=id;
  this.contributeddata.approved_status="REJECTED";
  console.log(this.contributeddata);
 this.userService.uploadfile(this.contributeddata).subscribe(data3=>{this.data3=data3;})
}

// uploadProject(id){
//   this.user.contributeduser_id=id;
//   console.log(this.user);
//   this.userService.uploadProjec(this.user).subscribe(data4=>{this.data4=data4;})
// }

  logout(){
    this.loginservice.logOut();
    this.router.navigate(['/userLoginPage']);
  }


}
