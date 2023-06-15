import { Injectable } from '@angular/core';
import { Subject, ReplaySubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiBaseUrl= '/api/users';

  datiUtente = new ReplaySubject();
  userRole = new ReplaySubject;

  constructor(private http: HttpClient) { }

  insertUser(user: any): Observable<any>{
    return this.http.post<any>(`${this.apiBaseUrl}/signup`,user);
  }

  getUserProfile(email: string): Observable<string>{
    const user = {email: email}
    return this.http.post<string>(`${this.apiBaseUrl}/user`, user);
  }

}
