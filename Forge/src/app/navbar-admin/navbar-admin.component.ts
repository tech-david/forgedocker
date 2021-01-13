import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth-service.service';

@Component({
  selector: 'app-navbar-admin',
  templateUrl: './navbar-admin.component.html',
  styleUrls: ['./navbar-admin.component.css']
})
export class NavbarAdminComponent implements OnInit {

  constructor(private AuthService: AuthService) { }

  ngOnInit(): void {
  }


  logout(): void{
    localStorage.setItem('isLoggedIn', 'false');
    localStorage.removeItem('token');   
    this.AuthService.logoutRequest().subscribe(
     data => {
     console.log("");});
    
    }

}
