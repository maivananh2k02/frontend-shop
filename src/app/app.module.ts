import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AdminMasterComponent} from './components/admin/admin-layouts/admin-master/admin-master.component';
import {AdminHeaderComponent} from './components/admin/admin-layouts/admin-header/admin-header.component';
import {AdminSidebarComponent} from './components/admin/admin-layouts/admin-sidebar/admin-sidebar.component';
import {AdminFooterComponent} from './components/admin/admin-layouts/admin-footer/admin-footer.component';
import {AdminDashboardComponent} from './components/admin/admin-dashboard/admin-dashboard.component';
import {UserMasterComponent} from './components/page/user-layouts/user-master/user-master.component';
import {UserHeaderComponent} from './components/page/user-layouts/user-header/user-header.component';
import {UserFooterComponent} from './components/page/user-layouts/user-footer/user-footer.component';
import {UserSidebarComponent} from './components/page/user-layouts/user-sidebar/user-sidebar.component';
import {UserDashboardComponent} from './components/page/user-dashboard/user-dashboard.component';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {ProfileComponent} from './components/admin/profile/profile.component';
import {EditProfileComponent} from './components/admin/profile/edit-profile/edit-profile.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDialogModule} from "@angular/material/dialog";
import {ProfileUserComponent} from './components/page/profile-user/profile-user.component';
import {AngularFireModule} from "@angular/fire/compat";
import {AngularFireStorageModule} from "@angular/fire/compat/storage";
import {environment} from "../environments/environment";

@NgModule({
  declarations: [
    AppComponent,
    AdminMasterComponent,
    AdminHeaderComponent,
    AdminSidebarComponent,
    AdminFooterComponent,
    AdminDashboardComponent,
    UserMasterComponent,
    UserHeaderComponent,
    UserFooterComponent,
    UserSidebarComponent,
    UserDashboardComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    EditProfileComponent,
    ProfileUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, "cloud")
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}