import { Injectable } from '@angular/core';

// interface for link obj
export interface LinkObj {
  websiteName: string;
  link: string;
}


@Injectable()
export class DashboardServiceService {
  private linksData: LinkObj[] = [{
    websiteName: "google",
    link: "https://www.google.com"
  }, {
    websiteName: "angulario",
    link: "https://www.angular.io"
  }];
  constructor() { }
  getLinksData(): LinkObj[] {
    return this.linksData;
  }
  addLinkObj(obj: LinkObj) {
    this.linksData.push(obj);
  }
}
