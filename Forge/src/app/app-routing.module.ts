import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import {RegistrationComponent}from './registration/registration.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { AuthGuard } from './guards/auth.guard';
import { NavbarComponent } from './navbar/navbar.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ProjectsComponent } from './projects/projects.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminPortViewComponent } from './admin-port-view/admin-port-view.component';
import { AdminCriteriaComponent } from './admin-criteria/admin-criteria.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent,  },
  { path:'registration', component: RegistrationComponent},
  { path:'user-home', component: UserHomeComponent, canActivate: [AuthGuard]},
  { path:'', component: LoginComponent},
  { path:'project', component: ProjectsComponent, canActivate: [AuthGuard]},
  { path:'aboutMe', component: AboutMeComponent, canActivate: [AuthGuard]},
  { path:'portfolio', component: PortfolioComponent, canActivate: [AuthGuard]},
  { path:'portfolio/:id', component: PortfolioComponent, canActivate: [AuthGuard]},
  { path:'navbar', component: NavbarComponent, canActivate: [AuthGuard]},
  { path:'admin-home', component: AdminHomeComponent, canActivate: [AuthGuard]},
  { path: 'viewPortfolio/:id', component: AdminPortViewComponent, canActivate: [AuthGuard]},
  { path: 'admin-criteria', component: AdminCriteriaComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
