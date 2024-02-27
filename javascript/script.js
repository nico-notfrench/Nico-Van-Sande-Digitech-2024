<script>
  // Initialize Three.js scene
  const scene = new THREE.Scene();

  // Add lights to the scene
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
  scene.add(ambientLight);
  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
  directionalLight.position.set(0, 1, 0);
  scene.add(directionalLight);

  // Create a Three.js renderer
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.getElementById('model-container').appendChild(renderer.domElement);

  // Load the 3D model
  const loader = new THREE.GLTFLoader();
  loader.load('Models/Pirate Blender Model.glb', function (gltf) {
    scene.add(gltf.scene);
    renderer.render(scene, camera);
  });
</script>

<script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
