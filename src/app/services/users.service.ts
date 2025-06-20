import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BASE_URL } from '../shared/base_url';
import { IUser } from '../models/auth.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>(`${BASE_URL}/users`, {
      headers: { 
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      }
    });
  }

  createNewUser(username: string, email:string, password: string): Observable<IUser> {
    return this.http.post<IUser>(`${BASE_URL}/users`, { username, email, password }, {
      headers: { 
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      }
    });
  }

  deleteUser (id: number): Observable<IUser> {
    return this.http.delete<IUser>(`${BASE_URL}/users/${id}`, {
      headers: { 
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      }
    });
  }

  editUser(id: number, user: IUser): Observable<IUser> {
    return this.http.put<IUser>(`${BASE_URL}/users/${id}`, user, {
      headers: { 
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      }
    });
  }
}
