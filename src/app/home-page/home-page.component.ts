import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }


public onselect(){
  this.router.navigate(['/userLoginPage']);
}
public onselectemployee(){
  this.router.navigate(['/businessLoginPage']);
}
}
