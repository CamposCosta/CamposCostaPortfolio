import * as THREE from 'three';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"


export default class CoverPage {
    constructor(){
        this.scene = new THREE.Scene();

        const geometry = new THREE.SphereGeometry(3, 64, 64);
        const material = new THREE.MeshStandardMaterial({
            color: "#00ff83",
        });
        this.mesh = new THREE.Mesh(geometry, material);
        this.scene.add(this.mesh);

        console.log(this.mesh)


        const sizes = {
            width: window.innerWidth,
            height: window.innerHeight,
        }
        // Light
        const light = new THREE.PointLight(0xffffff, 70, 100, 1.7);
        light.position.set(0, 10, 10);
        this.scene.add(light);

        // Camera
        this.camera = new THREE.PerspectiveCamera(45, sizes.width/sizes.height, 0.1, 100);
        this.camera.position.z = 20;
        this.scene.add(this.camera);

        // Renderer
        const canvas = document.querySelector(".webgl");
        this.renderer = new THREE.WebGLRenderer({ canvas });
        this.renderer.setSize(sizes.width, sizes.height);
        this.renderer.render(this.scene, this.camera);

        window.addEventListener("resize", () => {
            console.log("resizing")
            sizes.width = window.innerWidth
            sizes.height = window.innerHeight
            //camera
            this.camera.aspect = sizes.width / sizes.height
            this.camera.updateProjectionMatrix()
            this.renderer.setSize(sizes.width, sizes.height)
        })

        const loop = () => {
            this.mesh.rotation.x += 0.2
            this.renderer.render(this.scene, this.camera);
            window.requestAnimationFrame(loop);
        }
        loop()
    }

    update = () => {
        if (this.mesh) {
            this.mesh.rotation.x += 0.01;
            this.mesh.rotation.y += 0.01;
        }

        this.renderer.render(this.scene, this.camera);
        requestAnimationFrame(this.update);
    };
}
