import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';

const { apiUrl, apiKey } = environment;

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  constructor(private http: HttpClient) {}

  sendEmail(email: Email): Observable<any> {
    return this.http.post(
      `${apiUrl}/ax/get-in-touch`,
      { domain: 'tomastrajan.com', ...email },
      {
        headers: {
          'x-api-key': apiKey,
        },
      }
    );
  }
}

export interface Email {
  firstname: string;
  lastname: string;
  company: string;
  email: string;
  message: string;
}
