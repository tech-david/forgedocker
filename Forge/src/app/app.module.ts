import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 
import { DragDropModule } from '@angular/cdk/drag-drop';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { EducationComponent } from './education/education.component';
import { IndustryEquivalencyComponent } from './industry-equivalency/industry-equivalency.component';
import { SkillsComponent } from './skills/skills.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { ProjectsComponent } from './projects/projects.component';
import { AdminPortViewComponent } from './admin-port-view/admin-port-view.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { MatCardHeader, MatCardModule} from '@angular/material/card';
import {  MatCardModule} from '@angular/material/card';

import { RichTextEditorAllModule, ToolbarService} from '@syncfusion/ej2-angular-richtexteditor';
import { MatIconModule } from '@angular/material/icon';
import { ChartsModule } from 'ng2-charts';

import { NavbarComponent } from './navbar/navbar.component';
import { MDBBootstrapModule} from 'angular-bootstrap-md';
import { NavbarModule, WavesModule, ButtonsModule } from 'angular-bootstrap-md';
import { AdminUserInfoComponent } from './admin-user-info/admin-user-info.component';
import { AdminAboutMeComponent } from './admin-about-me/admin-about-me.component';
import { AdminEducationComponent } from './admin-education/admin-education.component';
import { AdminIndustryEquivalnecyComponent } from './admin-industry-equivalnecy/admin-industry-equivalnecy.component';
import { AdminSkillsComponent } from './admin-skills/admin-skills.component';
import { AdminProjectsComponent } from './admin-projects/admin-projects.component';
import { NavbarAdminComponent } from './navbar-admin/navbar-admin.component';
import { AdminCriteriaComponent } from './admin-criteria/admin-criteria.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    AdminHomeComponent,
    UserHomeComponent,
    PortfolioComponent,
    UserInfoComponent,
    AboutMeComponent,
    EducationComponent,
    IndustryEquivalencyComponent,
    SkillsComponent,
    WorkExperienceComponent,
    ProjectsComponent,
    AdminPortViewComponent,
    NavbarComponent,
    AdminUserInfoComponent,
    AdminAboutMeComponent,
    AdminEducationComponent,
    AdminIndustryEquivalnecyComponent,
    AdminSkillsComponent,
    AdminProjectsComponent,
    NavbarAdminComponent,
    AdminCriteriaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    DragDropModule,
    BrowserAnimationsModule,
    MatCardModule, 
    MatIconModule,
    // MatCardHeader,
    RichTextEditorAllModule,
    ChartsModule,
    NavbarModule,
    WavesModule,
    ButtonsModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [ToolbarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
