import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-work-page',
  templateUrl: './work-page.component.html',
  styleUrls: ['./work-page.component.css']
})
export class WorkPageComponent implements AfterViewInit {

  ngAfterViewInit() {
    this.setupCarousel();
    this.setupButtonClickHandlers();
  }

  private setupCarousel() {
    document.getElementById('next')?.addEventListener('click', () => {
      const lists = document.querySelectorAll('.item');
      document.getElementById('slide')?.appendChild(lists[0]);
    });

    document.getElementById('prev')?.addEventListener('click', () => {
      const lists = document.querySelectorAll('.item');
      document.getElementById('slide')?.prepend(lists[lists.length - 1]);
    });
  }

  private setupButtonClickHandlers() {
    // Adicione um manipulador de eventos para os botões "See more"
    document.querySelectorAll('.item button').forEach((button) => {
      if (button instanceof HTMLElement) {
        button.addEventListener('click', () => {
          // Obtenha o link do YouTube associado ao botão clicado
          const youtubeLink = button.getAttribute('data-youtube-link');
          if (youtubeLink) {
            // Abra o link do YouTube em uma nova janela
            window.open(youtubeLink);
          }
        });
      }
    });
  }
}
