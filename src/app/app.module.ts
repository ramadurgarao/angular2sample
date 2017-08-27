import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddlinkComponent } from './addlink/addlink.component';
import { AppRoutingModule } from './app.routing.module';
import { DashboardServiceService, LinkObj } from './dashboard-service.service';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AddlinkComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule, FormsModule
  ],
  providers: [DashboardServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
