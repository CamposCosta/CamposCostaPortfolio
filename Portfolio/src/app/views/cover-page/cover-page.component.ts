import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import * as THREE from 'three';
import CoverPage from '../../../assets/jsFiles/coverPage.js';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cover-page',
  templateUrl: './cover-page.component.html',
  styleUrls: ['./cover-page.component.css']
})
export class CoverPageComponent implements AfterViewInit {
  private CoverPage: CoverPage|undefined;
  
  constructor(private router: Router){}

  ngAfterViewInit(){
    this.initialize();
    //this.animate();
  }

  private initialize(){
    this.CoverPage = new CoverPage();
  }

  /*private animate(){
    this.CoverPage?.update();
  }*/

  enterSite() {
    this.router.navigate(['/inicial-page']);
  }

} 
/*
import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as THREE from 'three';

@Component({
  selector: 'app-cover-page',
  templateUrl: './cover-page.component.html',
  styleUrls: ['./cover-page.component.css']
})
export class CoverPageComponent implements OnInit {
  @ViewChild('webglCanvas', { static: true }) webglCanvas!: ElementRef<HTMLCanvasElement>;
  private scene: THREE.Scene;
  private camera: THREE.PerspectiveCamera;
  private renderer!: THREE.WebGLRenderer;
  private sphere: THREE.Mesh;

  constructor(private router: Router) {
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.sphere = this.createEarth();
  }

  ngOnInit() {
    this.setup();
    this.animate();
  }

  private setup() {
    this.renderer = new THREE.WebGLRenderer({ canvas: this.webglCanvas.nativeElement });
    this.renderer.setSize(window.innerWidth / 2, window.innerHeight / 2);
    this.renderer.shadowMap.enabled = true;

    this.camera.position.z = 5;

    this.scene.add(new THREE.AmbientLight(0xffffff, 0.5));

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 5, 5);
    directionalLight.castShadow = true;
    this.scene.add(directionalLight);

    // Adicionando um plano para receber sombras
    const groundGeometry = new THREE.PlaneGeometry(10, 10);
    const groundMaterial = new THREE.ShadowMaterial({ opacity: 0.5 });
    const ground = new THREE.Mesh(groundGeometry, groundMaterial);
    ground.rotation.x = -Math.PI / 2;
    ground.position.y = -2;
    ground.receiveShadow = true;
    this.scene.add(ground);

    this.sphere.castShadow = true;
    this.sphere.receiveShadow = true;

    this.scene.add(this.sphere);
  }

  private createEarth(): THREE.Mesh {
    const geometry = new THREE.SphereGeometry(2, 32, 32);
    const material = new THREE.MeshStandardMaterial({
      color: 0xffffff, // Cor verde para simular a Terra
      roughness: 0.8,
      metalness: 0.2
    });
    return new THREE.Mesh(geometry, material);
  }

  private animate() {
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotação da esfera (simulando a rotação da Terra)
      this.sphere.rotation.y += 0.005;

      this.renderer.render(this.scene, this.camera);
    };

    animate();
  }

  enterSite() {
    this.router.navigate(['/inicial-page']);
  }
}*/


