import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import * as THREE from 'three';
import CoverPage from '../../../assets/jsFiles/coverPage.js';

@Component({
  selector: 'app-cover-page',
  templateUrl: './cover-page.component.html',
  styleUrls: ['./cover-page.component.css']
})
export class CoverPageComponent implements AfterViewInit {
  private CoverPage: CoverPage|undefined;
  
  constructor(){}

  ngAfterViewInit(){
    this.initialize();
    //this.animate();
  }

  private initialize(){
    this.CoverPage = new CoverPage();
  }

  private animate(){
    this.CoverPage?.update();
  }

}
