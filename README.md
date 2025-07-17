# Gestione Anagrafica Dipendenti (con FakeStoreAPI)

Questo progetto è un'applicazione web sviluppata in Angular per la gestione di un'anagrafica di dipendenti. L'applicazione si connette a fakestoreapi.com per l'autenticazione degli utenti e per la gestione (CRUD - Create, Read, Update, Delete) dei dati dei dipendenti.

## Descrizione Approfondita del Progetto
L'applicazione "Gestione Anagrafica Dipendenti" è una Single Page Application (SPA) che offre un'interfaccia per interagire con un'API esterna. Gli utenti devono effettuare il login per accedere alle funzionalità principali. Una volta autenticati, possono visualizzare un elenco di dipendenti, aggiungerne di nuovi, modificare i dettagli di quelli esistenti e rimuoverli. La validazione dei form è gestita lato client e il routing di Angular permette una navigazione fluida tra le diverse sezioni dell'applicazione.

## Credenziali di Accesso per Test
Per accedere e testare le funzionalità di login e gestione, puoi utilizzare le seguenti credenziali (fornite da FakeStoreAPI):

- **Username**: johnd

- **Password**: m38rmF$

## Tecnologie Utilizzate
- **Angular**: Framework per la costruzione dell'applicazione web.

- **TypeScript**: Linguaggio di programmazione per lo sviluppo dell'applicazione.

- **HTML**: Struttura dei componenti e dei template.

- **CSS**: Per lo styling dei componenti.

- **Angular Router**: Per la gestione della navigazione tra le diverse pagine/viste dell'applicazione.

- **Angular Forms (Template-driven forms)**: Per la gestione dei form di input e la validazione.

- **Angular HttpClient**: Per effettuare richieste HTTP all'API esterna (fakestoreapi.com).

- **Bootstrap 5**: Framework CSS utilizzato per il layout responsivo e lo stile dei componenti (es. btn, form-control, table, card).

- **fakestoreapi.com**: API RESTful pubblica utilizzata per simulare l'autenticazione e la gestione degli utenti.

## Funzionalità Principali
- **Autenticazione Utente**: Gli utenti devono effettuare il login con credenziali valide per accedere all'area riservata. Il token di autenticazione viene memorizzato localmente.

- **Protezione delle Rotte**: Un AuthGuard impedisce l'accesso alle pagine protette senza un token di autenticazione valido.

- **Visualizzazione Lista Dipendenti**: Una tabella mostra i dettagli di tutti i dipendenti recuperati dall'API.

- **Aggiunta Nuovo Dipendente**: Un form dedicato permette di inserire i dati di un nuovo dipendente (username, email, password), con validazione dei campi e toggle per la visibilità della password.

- **Modifica Dipendente**: Possibilità di aggiornare i dettagli di un dipendente esistente tramite un form pre-compilato.

- **Eliminazione Dipendente**: Rimozione di un dipendente dalla lista con richiesta di conferma.

- **Interazione con API Esterna**: Tutte le operazioni CRUD sui dipendenti e l'autenticazione sono gestite tramite chiamate HTTP a fakestoreapi.com.

- **Componenti Riutilizzabili**: Utilizzo di componenti separati come HeaderComponent e TableComponent per una maggiore modularità.

## Come Avviare il Progetto
Segui questi passaggi per configurare ed eseguire il progetto localmente:

### Prerequisiti
- Node.js (versione LTS raccomandata)

- npm (Node Package Manager) o Yarn

- Angular CLI: Installa globalmente Angular CLI se non lo hai già fatto:

npm install -g @angular/cli

### Installazione
1. Clona il repository (o scarica la cartella del progetto):

git clone https://github.com/ValeVent/gestione-anagrafica-dipendenti.git

Assicurati di sostituire 'gestione-anagrafica-dipendenti.git' con il nome esatto del tuo repository.

2. Naviga nella directory del progetto:

cd gestione-anagrafica-dipendenti

3. Installa le dipendenze del progetto:

npm install

4. Configurazione tsconfig.json: Assicurati che i seguenti flag siano presenti e impostati su true nel tuo tsconfig.json (solitamente sotto compilerOptions) per permettere l'importazione di moduli JSON, se necessario:

{
  "compilerOptions": {
    "resolveJsonModule": true,
    "allowSyntheticDefaultImports": true,
    // ... altre opzioni
  }
}

### Avvio dell'Applicazione
1. Avvia il server di sviluppo Angular:

ng serve

2. Apri il tuo browser web e naviga su http://localhost:4200/. Verrai reindirizzato alla pagina di login.

## Stato del Progetto
Questo progetto è un'applicazione Angular completa e funzionale che dimostra l'integrazione con API RESTful esterne, l'implementazione di operazioni CRUD, la gestione dell'autenticazione e la protezione delle rotte, fornendo un esempio pratico di sviluppo di applicazioni di gestione dati.

## Contatti
- **GitHub**: https://github.com/ValeVent

- **LinkedIn**: https://www.linkedin.com/in/valentina-venturo

- **Sito Web**: http://www.valentinaventuro.it

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.12.

