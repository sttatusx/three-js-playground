import * as THREE from "three";
import * as windowUtils from "./utils/window";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const scene = new THREE.Scene();

// Camera

const camera = new THREE.PerspectiveCamera(75, windowUtils.getViewPortAspectRatio(), 0.1, 1000);
camera.position.setZ(4);
scene.add(camera);

// Renderer!

const canvas = document.querySelector(".canvas") as HTMLCanvasElement;
const renderer = new THREE.WebGLRenderer({ canvas });

// Controls

const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;

// Update sizes on view port resize

// TODO: find a better name
function updateSizesOnResize(renderer: THREE.WebGLRenderer, camera: THREE.PerspectiveCamera) {
  const viewPortSizes = windowUtils.getViewPortSizes();

  // Camera
  camera.aspect = windowUtils.getViewPortAspectRatio();
  camera.updateProjectionMatrix();

  // Rendrer
  renderer.setSize(viewPortSizes.width, viewPortSizes.height);
  renderer.setPixelRatio(window.devicePixelRatio);
}

updateSizesOnResize(renderer, camera);
window.addEventListener("resize", () => updateSizesOnResize(renderer, camera));

// Random Objects!

const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
const cubeMaterial = new THREE.MeshBasicMaterial({ color: "royalblue", wireframe: true });
const cubeMesh = new THREE.Mesh(cubeGeometry, cubeMaterial);

scene.add(cubeMesh);

// Animate!

function animate() {
  cubeMesh.rotation.x -= Math.sin(0.02)
  cubeMesh.rotation.y += Math.sin(0.02)
  
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}

animate();
