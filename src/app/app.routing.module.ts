import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddlinkComponent } from './addlink/addlink.component';
const routes: Routes = [{
    path: 'dashboard',
    component: DashboardComponent
}, {
    path: 'addlink',
    component: AddlinkComponent
}, {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
}];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}