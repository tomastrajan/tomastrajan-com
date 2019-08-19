import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = `/api/email`;

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  constructor(private http: HttpClient) {}

  sendEmail(email: Email): Observable<any> {
    return this.http.post(API_URL, email);
  }
}

export interface Email {
  firstname: string;
  lastname: string;
  company: string;
  email: string;
  message: string;
}
