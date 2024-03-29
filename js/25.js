(function () {	
	function GLParticleSystem(count, attributes) {
		THREE.Points.call(this);
		var self = this;
		this.count = count;
		this.geometry = new THREE.BufferGeometry();
		Object.keys(attributes).forEach(function(name) {
			self.addAttribute(name, attributes[name]);
		});
	}
	GLParticleSystem.prototype = Object.create(THREE.Points.prototype);
	GLParticleSystem.prototype.constructor = GLParticleSystem;
	GLParticleSystem.prototype.addAttribute = function(name, width) {
		width = width || 1;
		var values = new Float32Array(this.count * width);
		for(var i = 0, l = values.length; i < l; i++) values[i] = 0;
		this.geometry.addAttribute(name, new THREE.BufferAttribute(values, width));
	};
	
	THREE.GLParticleSystem = GLParticleSystem;
})();

(function () {
var maxSpeed = 1;
var maxAge = 200;
var particleCount = 100000;
var renderer, scene, camera, controls;
var particleSystem;
var WIDTH = window.innerWidth;
var HEIGHT = window.innerHeight;
// Source: https://cdn.rawgit.com/mrdoob/three.js/r75/examples/textures/sprites/spark1.png
var textureUrl = 'data:image/png;base64,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';

init();
animate();

function initGeometry(geometry) {
	var attributes = geometry.attributes;
	var age = attributes.age.array;
	var customColor = attributes.customColor.array;
	var velocity = attributes.velocity.array;
	var count = age.length;
	var color = new THREE.Color();
	for (var i = 0, i3 = 0, l = count; i < l; i++, i3 += 3) {
		age[i] = Math.random()*maxAge,
		color.setHSL(Math.random(), 1.0, 0.9),
		customColor[i3+0] = color.r;
		customColor[i3+1] = color.g;
		customColor[i3+2] = color.b;
		velocity[i3+0] = (Math.random()*2-1)*maxSpeed;
		velocity[i3+1] = (Math.random()*2-1)*maxSpeed;
		velocity[i3+2] = (Math.random()*2-1)*maxSpeed;
	}
	attributes.age.needsUpdate = true;
	attributes.customColor.needsUpdate = true;
	attributes.velocity.needsUpdate = true;
}
function updateGeometry(geometry) {
	var age = geometry.attributes.age.array;
	var i = age.length; while(i--) {
		if(age[i]++ > maxAge) age[i] = 0;
	}
	geometry.attributes.age.needsUpdate = true;
}

function initScene() {
	camera = new THREE.PerspectiveCamera(40, WIDTH / HEIGHT, 1, 10000);
	camera.position.z = 800;
	scene = new THREE.Scene();
	renderer = new THREE.WebGLRenderer();
	renderer.setPixelRatio(window.devicePixelRatio);
	renderer.setSize(WIDTH, HEIGHT);
	document.body.appendChild(renderer.domElement);
	window.addEventListener('resize', onWindowResize, false);
	controls = new THREE.OrbitControls(camera, renderer.domElement);
}
function initParticleSystem() {
	particleSystem = new THREE.GLParticleSystem(particleCount, {
		age: 1,
		position: 3, // Unused
		customColor: 3,
		velocity: 3
	});
	var vertexShader =  document.getElementById('vertexshader').textContent;
	var fragmentShader = document.getElementById('fragmentshader').textContent;
	particleSystem.material = new THREE.ShaderMaterial({
		uniforms: {
			color: {type: "c", value: new THREE.Color(0xffffff)},
			texture: {type: "t", value: new THREE.TextureLoader().load(textureUrl)}
		},
		vertexShader: vertexShader,
		fragmentShader: fragmentShader,
		blending: THREE.AdditiveBlending,
		depthTest: false,
		transparent: true
	});
	scene.add(particleSystem);
	initGeometry(particleSystem.geometry);
}
function init() {
	console.clear();
	initScene();
	initParticleSystem();
}

function onWindowResize() {
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate(time) {
	requestAnimationFrame(animate);
	updateGeometry(particleSystem.geometry);
	renderer.render(scene, camera);
}

})();