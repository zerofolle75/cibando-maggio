import { Component, DoCheck } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements DoCheck{
  user: any;

  constructor(public auth:AuthService, private router: Router){}

  ngDoCheck(): void {
    if (JSON.parse(localStorage.getItem('user')) !== null)
      this.user= JSON.parse(localStorage.getItem('user'));

  }

  logout(){
    this.auth.logout();
    this.router.navigate(['/home']);
  }

}
