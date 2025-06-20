import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../../services/users.service';
import { IUser } from '../../models/auth.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-modifica-dipendente',
  templateUrl: './modifica-dipendente.component.html',
  styleUrls: ['./modifica-dipendente.component.css']
})
export class ModificaDipendenteComponent implements OnInit {
  user: IUser = {} as IUser;
  id!: number;

  constructor(
    private route: ActivatedRoute,
    private usersService: UsersService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id')!;   // Il + davanti converte la stringa in numero
    this.usersService.getAllUsers().subscribe(users => {
      const found = users.find(u => u.id === this.id);
      if (found) {
        this.user = { ...found }; // spread operator, che crea un nuovo oggetto con le stesse proprietà, così this.user non punta allo stesso oggetto ma a una copia indipendente
      }
    });
  }

  onUpdate(form: NgForm) {
    if (form.valid) {
      this.usersService.editUser(this.id, this.user).subscribe(() => {
        alert('Dipendente aggiornato con successo!');
        this.router.navigate(['dipendenti']);
      });
    }
  }

  onCancel() {
    this.router.navigate(['dipendenti']);
  }

}
