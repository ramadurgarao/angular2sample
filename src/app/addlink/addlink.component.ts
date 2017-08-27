import { Component, OnInit } from '@angular/core';
import { DashboardServiceService } from './../dashboard-service.service';
import { NgModel } from '@angular/forms';
import {Router} from '@angular/router';
@Component({
  selector: 'app-addlink',
  templateUrl: './addlink.component.html',
  styleUrls: ['./addlink.component.css']
})
export class AddlinkComponent implements OnInit {
  link:any;
  wname:any;
  constructor(private dashboard: DashboardServiceService,private router:Router) { }

  ngOnInit() {
  }
  addLink() {
    this.dashboard.addLinkObj({
      link:this.link,
      websiteName:this.wname
    });
    this.navigateToDashboard();
    return false;
  }
  navigateToDashboard(){
    this.router.navigate(["/dashboard"]);
  }

}
