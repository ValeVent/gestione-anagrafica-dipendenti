import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { UsersService } from '../../services/users.service';
import { IUser } from '../../models/auth.model';

@Component({
  selector: 'app-inserimento-dipendente',
  templateUrl: './inserimento-dipendente.component.html',
  styleUrl: './inserimento-dipendente.component.css'
})
export class InserimentoDipendenteComponent {

  constructor(private router: Router, private usersService: UsersService ) { }
  
    isShown: boolean = false;
    userList: IUser[] = [];
  
    onTogglePassword() {
      this.isShown = !this.isShown;
    }
  
    onSave(form: NgForm) {
      this.usersService.createNewUser(form.value.username, form.value.email, form.value.password).subscribe((res) => {
        console.log(res);
        this.usersService.getAllUsers().subscribe((res) => { 
          this.router.navigate(['dipendenti']); 
          this.userList = res;        
        })
      })
    }

    onCancel() {
      this.router.navigate(['dipendenti']);
    }

}

