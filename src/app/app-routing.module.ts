import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { UserLoginPageComponent } from './user/user-login-page/user-login-page.component';
import { BusinessLoginPageComponent } from './business/business-login-page/business-login-page.component';

import {UserHomePageComponent } from '././user/user-home-page/user-home-page.component';
import {UserViewPageComponent } from '././user/user-view-page/user-view-page.component';
import{UserProjectPageComponent} from '././user/user-project-page/user-project-page.component';
import {BusinessHomePageComponent} from '././business/business-home-page/business-home-page.component';
import {BusinessDashboardPageComponent} from '././business/business-dashboard-page/business-dashboard-page.component';
import {BusinessViewProfilePageComponent} from'././business/business-view-profile-page/business-view-profile-page.component';
import{BusinessProjectPageComponent} from '././business/business-project-page/business-project-page.component';
import {UserViewProfilePageComponent} from '././user/user-view-profile-page/user-view-profile-page.component';
import {UserSettingsPageComponent}from '././user/user-settings-page/user-settings-page.component';
import { AuthGaurdService } from './services/auth-gaurd-service';

const   routes: Routes = [{path:"",component: HomePageComponent},
{path:"home",component: HomePageComponent},
{path:"userLoginPage",component:UserLoginPageComponent},
{path:"businessLoginPage",component: BusinessLoginPageComponent},
{path:"userHomePage",component: UserHomePageComponent,canActivate:[AuthGaurdService] },
{path:"userViewPage/:id",component: UserViewPageComponent,canActivate:[AuthGaurdService] },
{path:"userProjectPage/:id",component:UserProjectPageComponent,canActivate:[AuthGaurdService] },
{path:"businessHomePage",component:BusinessHomePageComponent,canActivate:[AuthGaurdService]},
{path:"businessDashboardPage/:id",component:BusinessDashboardPageComponent,canActivate:[AuthGaurdService]},
{path:"businessProjectPage",component:BusinessProjectPageComponent,canActivate:[AuthGaurdService]},
{path:"userViewProfilePage",component:UserViewProfilePageComponent,canActivate:[AuthGaurdService] },
{path:"userSettingsPage",component:UserSettingsPageComponent,canActivate:[AuthGaurdService] },
{path:"businessViewProfilePage",component:BusinessViewProfilePageComponent,canActivate:[AuthGaurdService]},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[BusinessDashboardPageComponent]
