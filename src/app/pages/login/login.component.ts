import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private router: Router, private authService: AuthService) { }

  isShown: boolean = false;

  onTogglePassword() {
    this.isShown = !this.isShown;
  }

  onLogin(form: NgForm) {
    this.authService.login(form.value.username, form.value.password).subscribe((res) => {
      console.log(res);
      localStorage.setItem('token', res.token);
      this.router.navigate(['dipendenti']);
    })
  }
}
