import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-work-page',
  templateUrl: './work-page3.component.html',
  styleUrls: ['./work-page3.component.css']
})
export class WorkPage3Component implements AfterViewInit {

  ngAfterViewInit() {
    this.setupCarousel();
    this.setupButtonClickHandlers();
    this.updateVideoVisibility();
    this.setVideoVolume();
  }

  private setupCarousel() {
    document.getElementById('next')?.addEventListener('click', () => {
      const lists = document.querySelectorAll('.item');
      document.getElementById('slide')?.appendChild(lists[0]);
      this.updateVideoVisibility(); // Atualiza a visibilidade do vídeo após mover o carrossel
    });

    document.getElementById('prev')?.addEventListener('click', () => {
      const lists = document.querySelectorAll('.item');
      document.getElementById('slide')?.prepend(lists[lists.length - 1]);
      this.updateVideoVisibility(); // Atualiza a visibilidade do vídeo após mover o carrossel
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

  private updateVideoVisibility() {
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
  
    // Obtém todos os itens
    const items = document.querySelectorAll('.item');
  
    // Processa cada item
    items.forEach((item, index) => {
      const video = item.querySelector('video') as HTMLVideoElement | null;
  
      // Se estiver em um dispositivo móvel, sempre pausa e esconde os vídeos
      if (isMobile) {
        if (video) {
          video.pause();
          video.style.display = 'none';
        }
        item.classList.remove('hide-background');
      }
      // Caso contrário, usa a lógica para desktop
      else {
        if (video) {
          if (index === 1) { // Index é baseado na sua lógica de carrossel. Certifique-se de que 1 é o índice correto para o vídeo atualmente visível.
            video.currentTime = 0;
            video.play();
            video.style.display = 'block';
            item.classList.add('hide-background');
          } else {
            video.pause();
            video.style.display = 'none';
            item.classList.remove('hide-background');
          }
        }
      }
    });
  }
  
  
  
  
  

  private setVideoVolume() {
    const videos = document.querySelectorAll('video');
    videos.forEach((video) => {
      (video as HTMLVideoElement).volume = 0;
    });
  }
}
