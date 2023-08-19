import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  login(username: string, password: string) : Observable<any> {
    const headers = new HttpHeaders({
      Authorization: 'Basic' + btoa(username + ':' + password),
    });

    return this.http.get(`${this.baseUrl}/api/login`, { headers })
  }
}
