import * as THREE from 'three';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import gsap from 'gsap'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';


export default class CoverPage {
    constructor(){
        this.scene = new THREE.Scene();

        //fog
        //this.scene.fog = new THREE.Fog(0x000000, 200, 600); // Color, Near, Far

        //skybox
        let materialArray = [];
        
        let texture_ft = new THREE.TextureLoader().load("./assets/skybox/heaven_ft.jpg")
        let texture_bk = new THREE.TextureLoader().load("./assets/skybox/heaven_bk.jpg")
        let texture_up = new THREE.TextureLoader().load("./assets/skybox/heaven_up.jpg")
        let texture_dn = new THREE.TextureLoader().load("./assets/skybox/heaven_dn.jpg")
        let texture_rt = new THREE.TextureLoader().load("./assets/skybox/heaven_rt.jpg")
        let texture_lf = new THREE.TextureLoader().load("./assets/skybox/heaven_lf.jpg")

        materialArray.push(new THREE.MeshBasicMaterial({map: texture_ft}))
        materialArray.push(new THREE.MeshBasicMaterial({map: texture_bk}))
        materialArray.push(new THREE.MeshBasicMaterial({map: texture_up}))
        materialArray.push(new THREE.MeshBasicMaterial({map: texture_dn}))
        materialArray.push(new THREE.MeshBasicMaterial({map: texture_rt}))
        materialArray.push(new THREE.MeshBasicMaterial({map: texture_lf}))

        for(let i=0;i<6;i++){
            materialArray[i].side = THREE.BackSide;
        }

        const skyboxGeo = new THREE.BoxGeometry(500, 500, 500)
        const skybox = new THREE.Mesh(skyboxGeo, materialArray)
        this.scene.add(skybox)

        const loader = new GLTFLoader();
        loader.load('./assets/3dModels/3dLogo2.glb', (gltf) => {
            this.model = gltf.scene;
            this.model.position.set(0, 0, 0);
            this.model.scale.set(2.2, 2.2, 2.2); // Ajuste a escala conforme necessário
            this.model.rotation.x = Math.PI / 2; // Girar 90 graus em torno do eixo x
            this.scene.add(this.model);
        }, undefined, (error) => {
            console.error('Erro ao carregar o modelo:', error);
        });

        const axesHelper = new THREE.AxesHelper(20); // Argumento: tamanho dos eixos
        //this.scene.add(axesHelper);


        const geometry = new THREE.SphereGeometry(3, 64, 64);
        //const logoGeometry 

        //adcionar logo como textura
        const textureLoader = new THREE.TextureLoader();
        
        const texture = textureLoader.load('./assets/logoCC.png', () => {
            // Callback opcional: será executado quando a textura for carregada
            console.log('Textura carregada com sucesso!');
        }, undefined, (err) => {
            // Callback de erro: será chamado se ocorrer um erro ao carregar a textura
            console.error('Erro ao carregar a textura:', err);
        });

        const material = new THREE.MeshStandardMaterial({
            /*color: "#00ff83",*/
            map: texture
        });
        this.mesh = new THREE.Mesh(geometry, material);

        //this.scene.add(this.mesh);

        const sizes = {
            width: window.innerWidth,
            height: window.innerHeight,
        }
        // Light
        const light = new THREE.PointLight(0xffffff, 50, 100, 1.7);
        light.position.set(0, 5, 12);
        this.scene.add(light);

        /*const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
        directionalLight.position.set(0, 0, 0); // Defina a direção da luz
        this.scene.add(directionalLight);*/

        /*const ambientLight = new THREE.AmbientLight(0xffffff, 0.5); // Cor branca e intensidade 0.5
        this.scene.add(ambientLight);*/

        // Camera
        this.camera = new THREE.PerspectiveCamera(45, sizes.width/sizes.height, 0.1, 10000);
        this.camera.position.x = 0
        this.camera.position.y = 0;
        this.camera.position.z = 30;
        this.scene.add(this.camera);

        // Renderer
        const canvas = document.querySelector(".webgl");
        this.renderer = new THREE.WebGLRenderer({ canvas });
        this.renderer.setSize(sizes.width, sizes.height);
        this.renderer.setPixelRatio(2)
        this.renderer.render(this.scene, this.camera);

        //Controls
        const controls = new OrbitControls(this.camera, canvas);
        controls.enableDamping = true
        controls.enablePan = false
        controls.enableZoom = false
        //controls.autoRotate = true
        controls.autoRotateSpeed = 5

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
            controls.update()
            //this.mesh.rotation.x += 0.01
            if (this.model) {
                //this.model.rotation.x += 0.01;
                //this.model.rotation.y += 0.01;
                this.model.rotation.z += 0.01;
            }
            this.renderer.render(this.scene, this.camera);
            window.requestAnimationFrame(loop);
        }
        loop()

        //timeline
        const tl = gsap.timeline({defaults: {duration: 1, }})
        tl.fromTo(this.mesh.scale, {z: 0, x: 0, y: 0}, {z:1, x:1, y: 1})
        tl.fromTo(".custom-button", {opacity: 0}, {opacity: 1})
    }

}
