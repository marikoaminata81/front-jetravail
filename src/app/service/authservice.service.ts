import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Icredentials } from '../interface/icredentials';
import { Observable } from 'rxjs';
import { Itokens } from '../interface/itokens';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {
  url = 'http://localhost:8080/api/auth/signin'

  constructor(private http: HttpClient) { }

  login(credentials: Icredentials): Observable<Itokens>{
      return this.http.post<Itokens>(this.url, credentials)
    }

}
