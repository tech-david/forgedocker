import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

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


    

