import { AdminComponent } from './admin.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DivisionComponent } from './division/division.component';
import { LocationComponent } from './location/location.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { UpdateAdminComponent } from './update-admin/update-admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RoomComponent } from './room/room.component';
import { AreaComponent } from './area/area.component';
import { MoneyComponent } from './money/money.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';

const routes: Routes = [
  { path: 'admin', component: DashboardComponent },
  { path: 'division', component: DivisionComponent },
  { path: 'location', component: LocationComponent },
  { path: 'adminpanel', component: AdminPanelComponent },
  { path: 'adminupdate/:id', component: UpdateAdminComponent },
  { path: 'money', component: MoneyComponent },
  { path: 'area', component: AreaComponent },
  { path: 'room', component: RoomComponent },
  { path: 'admin-login', component: AdminLoginComponent },

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AdminRoutingModule { }
