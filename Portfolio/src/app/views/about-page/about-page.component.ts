import { Component, AfterViewInit } from '@angular/core';
import Typed from 'typed.js';  

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.css']
})
export class AboutPageComponent implements AfterViewInit {

  showDialog = false;

  images: string[] = [
    'assets/AboutMe_Photo1.JPG',
    'assets/AboutMe_Photo2.jpg',
    'assets/AboutMe_Photo3.jpg',
    'assets/AboutMe_Photo4.JPG',
    //'assets/Francisco Costa (9).png'
    // Adicione mais URLs de imagens conforme necessário
  ];

  altDescriptions: string[] = [
    'Description for Image 1',
    'Description for Image 2',
    'Description for Image 3',
    'Description for Image 4',
    'Description for Image 5'
    // Adicione mais descrições conforme necessário
  ];

  currentIndex: number = 0;

  ngAfterViewInit() {
    // Lógica do Typed.js
    this.setupTypedEffect();
    this.showSlides();
  }

  showSlides() {
    setInterval(() => {
        this.currentIndex = (this.currentIndex + 1) % this.images.length;
    }, 3000); // Altera a imagem a cada 3 segundos (3000 milissegundos)
}

  handleImageError(index: number) {
    this.images[index] = 'assets/default_image.jpg'; // Substitua 'assets/default_image.jpg' pelo caminho da sua imagem padrão
  }

  private setupTypedEffect() {
    const options = {
      strings: ["A Diretor of photography.", "A Director and Production Assistant"],
      typeSpeed: 100,
      backSpeed: 80,
      backDelay: 1500,
      loop: true
    };

    const typed = new Typed(".multiText", options);
  }

  openDialog() {
    this.showDialog = true;
    console.log(this.showDialog)
  }

  closeDialog() {
    this.showDialog = false;
  }
}
