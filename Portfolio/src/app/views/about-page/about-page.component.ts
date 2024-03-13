import { Component, AfterViewInit } from '@angular/core';
import Typed from 'typed.js';  

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.css']
})
export class AboutPageComponent implements AfterViewInit {

  ngAfterViewInit() {
    // Lógica do Typed.js
    this.setupTypedEffect();
  }

  private setupTypedEffect() {
    const options = {
      strings: ["an Editor", "a Director of photography", "a Videographer"],
      typeSpeed: 100,
      backSpeed: 80,
      backDelay: 1500,
      loop: true
    };

    const typed = new Typed(".multiText", options);
  }
}
