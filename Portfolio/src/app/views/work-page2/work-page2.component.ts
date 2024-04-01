import { Component } from '@angular/core';

@Component({
  selector: 'app-work-page2',
  templateUrl: './work-page2.component.html',
  styleUrls: ['./work-page2.component.css']
})
export class WorkPage2Component {
  
  ngAfterViewInit() {
    this.setupCarousel();
    this.setupButtonClickHandlers();
    this.setupVideoMuted();
    this.setupItemVideoBackground();  
  }

  private setupCarousel() {
    const nextButton = document.getElementById('next');
    const prevButton = document.getElementById('prev');
    const slide = document.getElementById('slide') as HTMLElement;

    if (nextButton && prevButton && slide) {
        const logCentralImageUrl = () => {
            const lists = document.querySelectorAll('.item');
            const centralIndex = Math.floor(lists.length / 2);
            const centralItem = lists[centralIndex] as HTMLElement;

            if (centralItem) {
                console.log(centralItem.style.backgroundImage.split('"')[1]);
            }
        };

        logCentralImageUrl();

        nextButton.addEventListener('click', () => {
            const lists = document.querySelectorAll('.item');
            slide.prepend(lists[lists.length - 1]);

            const centralIndex = Math.floor(lists.length / 2);
            const centralItem = lists[centralIndex] as HTMLElement;

            if (centralItem) {
                centralItem.style.transform = `translateX(${centralItem.offsetWidth * 0.3}px)`;
                setTimeout(() => {
                    centralItem.style.transform = 'translateX(0)';
                }, 300);

                logCentralImageUrl();
            }
        });

        prevButton.addEventListener('click', () => {
            const lists = document.querySelectorAll('.item');
            slide.appendChild(lists[0]);

            const centralIndex = Math.floor(lists.length / 2);
            const centralItem = lists[centralIndex] as HTMLElement;

            if (centralItem) {
                centralItem.style.transform = `translateX(-${centralItem.offsetWidth * 0.3}px)`;
                setTimeout(() => {
                    centralItem.style.transform = 'translateX(0)';
                }, 300);

                logCentralImageUrl();
            }
        });
    }
  }

  private setupButtonClickHandlers() {
    document.querySelectorAll('.item button').forEach((button) => {
      if (button instanceof HTMLElement) {
        button.addEventListener('click', () => {
          const youtubeLink = button.getAttribute('data-youtube-link');
          if (youtubeLink) {
            window.open(youtubeLink);
          }
        });
      }
    });
  }

  private setupVideoMuted() {
    const videoElements = document.querySelectorAll('.video-background');
    videoElements.forEach(video => {
      if (video instanceof HTMLVideoElement) {
        video.volume = 0;
        video.play();
      }
    });
  }

  private setupItemVideoBackground() {
    const videoBackground = document.querySelector('.video-background') as HTMLVideoElement;
    const items = document.querySelectorAll('.item');
  
    items.forEach(item => {
      item.addEventListener('click', () => {
        const videoSrc = item.getAttribute('data-video');
        if (videoSrc && videoBackground) {
          videoBackground.innerHTML = `
            <source src="${videoSrc}" type="video/mp4">
            Seu navegador não suporta o elemento de vídeo.
          `;
          videoBackground.load();
          videoBackground.play();
          videoBackground.style.visibility = 'visible';
        }
      });
    });
  }

}
