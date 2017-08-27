import { Component, OnInit } from '@angular/core';
import { DashboardServiceService, LinkObj } from '../dashboard-service.service';

// component decorator - dont put any semicolon after ending of this
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  links: LinkObj[];
  constructor(private dashboard: DashboardServiceService) { }

  ngOnInit() {
    this.links = this.dashboard.getLinksData();
  }
}
