import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { EmailService } from 'src/app/services/email.service';

@Component({
  selector: 'app-inicial-page',
  templateUrl: './inicial-page.component.html',
  styleUrls: ['./inicial-page.component.css']
})
export class InicialPageComponent {
  constructor(private emailService: EmailService, private http: HttpClient) { }

  sendEmail(nameInput: HTMLInputElement, emailInput: HTMLInputElement, messageInput: HTMLInputElement) {
    const name = nameInput.value;
    const email = emailInput.value;
    const message = messageInput.value;

    // Define o cabeçalho 'Content-Type' como 'application/json'
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    // Faça a solicitação HTTP para o servidor Node.js com o cabeçalho 'Content-Type' configurado
    this.http.post('http://localhost:3000/send-email', { name, email, message }, { headers })
      .subscribe(response => {
        console.log('Resposta do servidor:', response);
      }, error => {
        console.error('Erro ao enviar o email:', error);
      });

    // Limpar os campos após o envio
    nameInput.value = '';
    emailInput.value = '';
    messageInput.value = '';
  }



  scrollToAbout() {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  scrollToContact() {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
