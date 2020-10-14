import { Injectable, Input, Output } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: "root"
})

export class BusinessService {

  employeeid:number=+sessionStorage.getItem('id');

  getEmployeeId()
  {
    return this.employeeid;
  }
  setEmployeeId(id){
    this.employeeid=+sessionStorage.getItem('id');
  }


  constructor(private http: HttpClient) {

  }

  getEmployeeDataByEmail(email){
  const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa('Aravindjai0@gmail.com' + ':' + 'aravind') });

    return this.http.get("http://localhost:8088/employee/rest/getemployeeentitybyemail/" +email,{headers});
  }

  getEmployeeData() {
    return this.http.get("http://localhost:8088/employee/rest/getemployeeentitylist");
  }
  getEmployeeDataById(id) {
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa('Aravindjai0@gmail.com' + ':' + 'aravind') });
    return this.http.get("http://localhost:8088/employee/rest/getemployeeentitybyid/" + id,{headers});

  }
  addEmployeeData(employee) {
    return this.http.post("http://localhost:8088/employee/rest/addemployeeentitylist", employee);

  }

  updateEmployeeData(employee) {

    return this.http.patch("http://localhost:8088/employee/rest/updateemployee", employee);

  }

  deleteEmployeeData(id) {
    return this.http.delete("http://localhost:8088/user/rest/deleteemployeeentitybyid/" + id);
  }

  getProjectData() {
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa('siva@gmail.com' + ':' + 'sivs') });
    return this.http.get("http://localhost:8088/user/rest/getprojectentitylist",{headers});
  }

  getProjectDataById(id) {
    return this.http.get("http://localhost:8088/user/rest/getprojectentitybyid/" + id);

  }
  addProjectData(data) {
        return this.http.post("http://localhost:8088/user/rest/addprojectentitylist", data);
  }
  updateProjectData(data){
    return this.http.patch("http://localhost:8088/user/rest/projectupdate",data);
  }

  deleteProjectData(id) {
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa('siva@gmail.com' + ':' + 'sivs') });
    return this.http.delete("http://localhost:8088/user/rest/deleteprojectentitybyid/" +id,{headers});
  }


  getCompanyData() {
    return this.http.get("http://localhost:8088/getcompanyentitylist");
  }
  getCompanyDataById(id) {
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa('siva@gmail.com' + ':' + 'sivs') });
    return this.http.get("http://localhost:8088/employee/rest/getcompanyentitybyid/" + id,{headers});

  }
  addCompanyData(company) {
    return this.http.post("http://localhost:8088/addcompanyentitylist", company);
  }
  deleteCompanyData(id) {
    return this.http.delete("http://localhost:8088/deletecompanyentitybyid/" + id);
  }

}
