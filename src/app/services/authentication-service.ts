import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

export class User {
  constructor(
    public status: string,
  ) { }

}


export class Employee {
  constructor(
    public status: string,
  ) { }

}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
user;
employee;
  constructor(private http: HttpClient) {
  }
  authenticate(email, password) {
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(email + ':' + password) });
    console.log(headers);
    return this.http.get<User>('http://localhost:8088/user/rest/getuserentitybyemail/'+email ,{ headers }).pipe(
      map(
        userData => {
          console.log(headers);
          sessionStorage.setItem('email', email);
          sessionStorage.setItem('id',userData.toString());
          console.log(userData);
          this.user=userData;
          return userData;
        }
      )

    );
  }



authenticateemployee(email,password) {

    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(email + ':' + password) });

    return this.http.get<Employee>('http://localhost:8088/employee/rest/getemployeeentitybyemail/'+email ,{ headers }).pipe(
      map(
        employeeData => {
          console.log(email);
          sessionStorage.setItem('email', email);
          sessionStorage.setItem('id',employeeData.toString());
          console.log(employeeData);
          this.employee=employeeData;
          return employeeData;
        }
      )

    );
  }

  getProjectData() {
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa('123@gmail.com' + ':' + 'aravind') });
    return this.http.get("http://localhost:8088/user/rest/getprojectentitylist",{headers});
  }



  isUserLoggedIn() {
    let user = sessionStorage.getItem('email');
    console.log(!(user === null));
    return !(user === null);
  }

  logOut() {
    sessionStorage.removeItem('email');
    sessionStorage.removeItem('id');
  }
}
