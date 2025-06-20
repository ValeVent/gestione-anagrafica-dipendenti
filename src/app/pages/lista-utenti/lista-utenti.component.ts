import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { IUser } from '../../models/auth.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-utenti',
  templateUrl: './lista-utenti.component.html',
  styleUrl: './lista-utenti.component.css'
})
export class ListaUtentiComponent implements OnInit {

  userList: IUser[] = []; 

  constructor(private usersService: UsersService, private router: Router) {}

  ngOnInit() {
    this.usersService.getAllUsers().subscribe((res) => {
      this.userList = res;
    });
  }

  onDelete(id: number) {
    this.usersService.deleteUser(id).subscribe((res) => {
      console.log(res);
      if (confirm('Sei sicura di voler eliminare questo utente?')) {
      this.usersService.getAllUsers().subscribe((res) => {
        this.userList = res;
      })
      }
    })
  }

  onEdit(id: number) {
    this.router.navigate(['modifica', id]);
  }
}
  
