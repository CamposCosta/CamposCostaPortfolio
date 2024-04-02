import { Component, ElementRef, ViewChild } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailService } from 'src/app/services/email.service';

@Component({
  selector: 'app-inicial-page',
  templateUrl: './inicial-page.component.html',
  styleUrls: ['./inicial-page.component.css']
})
export class InicialPageComponent {
  emailForm: FormGroup;

  constructor(private emailService: EmailService, private http: HttpClient, private fb: FormBuilder) {
    this.emailForm = fb.group({
      name: ['', [Validators.required,Validators.maxLength(100), Validators.pattern('[a-zA-Z ]*')]], // Nome não alfanumérico
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@gmail.com')]], // Email do tipo Gmail
      message: ['', [Validators.required, Validators.maxLength(100)]] // Mensagem com menos de 100 caracteres
    });
  }

  // Adicione as funções slideIconLeft() e slideIconRight() aqui
  slideIconLeft() {
    const icon = document.getElementById('icon');
    if (icon) {
      (icon as HTMLElement).style.transform = 'translateX(-10px)';
    }
  }

  slideIconRight() {
    const icon = document.getElementById('icon');
    if (icon) {
      (icon as HTMLElement).style.transform = 'translateX(0px)';
    }
  }

  slideIconLeft3() {
    const icon = document.getElementById('icon3');
    if (icon) {
        (icon as HTMLElement).style.transform = 'translateX(10px)';  // Move o ícone para a direita
    }
}

slideIconRight3() {
    const icon = document.getElementById('icon3');
    if (icon) {
        (icon as HTMLElement).style.transform = 'translateX(0px)';  // Volta o ícone à posição original
    }
}

  slideIconDown() {
    const icon = document.getElementById('icon2');
    if (icon) {
      icon.style.top = '-10px';
    }
  }

  slideIconUp() {
    const icon = document.getElementById('icon2');
    if (icon) {
      icon.style.top = '-20px';
    }
  }


  sendEmail() {
    if (this.emailForm.valid) {
      const nameControl = this.emailForm.get('name');
      const emailControl = this.emailForm.get('email');
      const messageControl = this.emailForm.get('message');
  
      if (nameControl && emailControl && messageControl) {
        const name = nameControl.value;
        const email = emailControl.value;
        const message = messageControl.value;
  
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  
        this.http.post('http://localhost:3000/send-email', { name, email, message }, { headers })
          .subscribe(response => {
            console.log('Resposta do servidor:', response);
          }, error => {
            console.error('Erro ao enviar o email:', error);
          });
  
        this.emailForm.reset();
      } else {
        // Realize ações apropriadas em caso de erro
      }
    }
  }
  


  scroll(el: HTMLElement) {
    el.scrollIntoView({behavior: 'smooth'});
  }
}
