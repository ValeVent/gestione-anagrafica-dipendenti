import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { ListaUtentiComponent } from './pages/lista-utenti/lista-utenti.component';
import { InserimentoDipendenteComponent } from './pages/inserimento-dipendente/inserimento-dipendente.component';
import { ModificaDipendenteComponent } from './pages/modifica-dipendente/modifica-dipendente.component';
import { authGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dipendenti',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'dipendenti',
    component: ListaUtentiComponent,
    canActivate: [authGuard],
  },
  {
    path: 'inserimento',
    component: InserimentoDipendenteComponent,
  },
  {
    path: 'modifica/:id',
    component: ModificaDipendenteComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
