import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private emailApiUrl = 'http://localhost:3000/sendEmail'; // Substitua pela URL do seu servidor Node.js

  constructor(private httpClient: HttpClient) { }

  sendEmail(name: string, email: string, message: string) {
    const data = { name, email, message };
    return this.httpClient.post(this.emailApiUrl, data);
  }
}
