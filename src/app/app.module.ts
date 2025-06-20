import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { ListaUtentiComponent } from './pages/lista-utenti/lista-utenti.component';
import { InserimentoDipendenteComponent } from './pages/inserimento-dipendente/inserimento-dipendente.component';
import { ModificaDipendenteComponent } from './pages/modifica-dipendente/modifica-dipendente.component';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule, provideHttpClient } from '@angular/common/http';
import { TableComponent } from './components/table/table.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListaUtentiComponent,
    InserimentoDipendenteComponent,
    ModificaDipendenteComponent,
    TableComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
