import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { UserLoginPageComponent } from './user/user-login-page/user-login-page.component';
import { BusinessLoginPageComponent } from './business/business-login-page/business-login-page.component';
import { UserHomePageComponent } from './user/user-home-page/user-home-page.component';
import { UserViewPageComponent } from './user/user-view-page/user-view-page.component';
import { UserProjectPageComponent } from './user/user-project-page/user-project-page.component';
import { BusinessDashboardPageComponent } from './business/business-dashboard-page/business-dashboard-page.component';
import { BusinessHomePageComponent } from './business/business-home-page/business-home-page.component';
import { BusinessProjectPageComponent } from './business/business-project-page/business-project-page.component';
import { UserViewProfilePageComponent } from './user/user-view-profile-page/user-view-profile-page.component';
import { UserSettingsPageComponent } from './user/user-settings-page/user-settings-page.component';
import { BusinessViewProfilePageComponent } from './business/business-view-profile-page/business-view-profile-page.component';
import { FormsModule }   from '@angular/forms';
import { UserService } from './services/user-service';
import { BusinessService } from './services/business-service';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    UserLoginPageComponent,
    BusinessLoginPageComponent,
    UserHomePageComponent,
    UserViewPageComponent,
    UserProjectPageComponent,
    BusinessDashboardPageComponent,
    BusinessHomePageComponent,
    BusinessProjectPageComponent,
    UserViewProfilePageComponent,
    UserSettingsPageComponent,
    BusinessViewProfilePageComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,HttpClientModule,
  ],
  providers: [UserService,BusinessService],
  bootstrap: [AppComponent]
})
export class AppModule { }
