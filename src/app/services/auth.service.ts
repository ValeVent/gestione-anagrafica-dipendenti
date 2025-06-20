import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ILoginResponse } from '../models/auth.model';
import { Observable } from 'rxjs';
import { BASE_URL } from '../shared/base_url';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<ILoginResponse> {
    return this.http.post<ILoginResponse>(`${BASE_URL}/auth/login`, { username, password });

  }
}
