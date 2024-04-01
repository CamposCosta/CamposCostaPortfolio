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
    const items = document.querySelectorAll('.item');
    items.forEach((item, index) => {
      const video = item.querySelector('video') as HTMLVideoElement | null;
      
      if (video) {
        if (index === 1) {
          video.currentTime = 0;  // Reinicia o vídeo para o início
          video.play();  // Inicia a reprodução do vídeo
          video.setAttribute('style', 'display: block;');  // Exibe o vídeo
          item.classList.add('hide-background');  // Adiciona a classe para ocultar a imagem de fundo
        } else {
          video.pause();  // Pausa o vídeo
          video.setAttribute('style', 'display: none;');  // Oculta o vídeo
          item.classList.remove('hide-background');  // Remove a classe para exibir a imagem de fundo
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
