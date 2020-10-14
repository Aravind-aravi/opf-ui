import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpHeaders, HttpEvent  } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  userid:number=+sessionStorage.getItem('id');
  private baseUrl = 'http://localhost:8088/user/rest';

  getUserId()
  {
    return this.userid;
  }
  setUserId(id){
    this.userid=+sessionStorage.getItem('id');
  }
  constructor(private http: HttpClient) {
  }

  getUserData() {
    return this.http.get("http://localhost:8088/user/rest/getuserentitylist");
  }

  getUserDataById(id) {
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa('Aravindjai0@gmail.com' + ':' + 'aravind') });
    return this.http.get("http://localhost:8088/user/rest/getuserentitybyid/" +id,{headers});
  }
  getUserDataByEmail(email){
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa('Aravindjai0@gmail.com' + ':' + 'aravind') });
    return this.http.get("http://localhost:8088/user/rest/getuserentitybyemail/"+ email,{headers});
  }
  addUserData(user) {

    return this.http.post("http://localhost:8088/user/rest/adduserentitylist",user);
  }

  updateUserData(user) {
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa('jones@gmail.com' + ':' + 'jones') });

    return this.http.patch("http://localhost:8088/user/rest/updateuser",user,{headers});
  }
  deleteUserData(id) {
    return this.http.delete("http://localhost:8088/deleteuserentitybyid/" + id);
  }
  startproject(user){
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa('jones@gmail.com' + ':' + 'jones') });
    return this.http.patch("http://localhost:8088/user/rest/startproject",user,{headers});
  }

  upload(file: File): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa('Aravindjai0@gmail.com' + ':' + 'aravind') });

    formData.append('file', file);
    const req = new HttpRequest('POST', `${this.baseUrl}/api/file/upload`,formData, {
      reportProgress: true,
      responseType: 'json',
      headers
    });

    return this.http.request(req);
  }


  uploadfile(user){
    return this.http.patch("http://localhost:8088/user/rest/uploadfile",user);
   }
uploadProjec(user){
  return this.http.patch("http://localhost:8088/user/rest/uploadproject",user);

}


  getFiles(): Observable<any> {
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa('123@gmail.com' + ':' + 'aravind') });

    return this.http.get(`${this.baseUrl}/api/file/all`,{headers});
  }

getFilesById(id){
  const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa('123@gmail.com' + ':' + 'aravind') });
  return this.http.get("http://localhost:8088/user/rest/api/file/" + id,{headers});
}
   addfile(file){
  return this.http.post("http://localhost:8088/user/rest/uploadFile",file);
}
getallfile(){
  return this.http.get("http://localhost:8088/user/rest/getallfiles");
}
  getContributedUserData() {
    return this.http.get("http://localhost:8088/user/rest/getcontributeduserentitylist");
  }
  getContributedUserDataById(id) {
    return this.http.get("http://localhost:8088/user/rest/getcontributeduserentitybyid/" + id);

  }
  updateContributedUserData(contributeduser) {
    return this.http.patch("http://localhost:8088/user/rest/updatestatus", contributeduser);
  }
  deleteContributedUserData(id) {
    return this.http.delete("http://localhost:8088/user/rest/deletecontributeduserentitybyid/" + id);
  }



}



