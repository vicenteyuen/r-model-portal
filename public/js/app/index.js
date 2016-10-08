/**
 * index page handle
 */
requirejs(['template/doT', 'three' , 'three.loaders.fbx'], function (doT, THREE) {

    // change dom element
    var domCanvas = document.getElementById('main-canvas');
    var width = domCanvas.clientWidth;
    var height = domCanvas.clientHeight;


    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    var renderer = new THREE.WebGLRenderer({
        antialias: true
    });
    renderer.setSize(width, height);
    domCanvas.appendChild(renderer.domElement);


    var geometry = new THREE.CubeGeometry(1, 1, 1);
    var material = new THREE.MeshBasicMaterial({
        color: 0x00ff00
    });
    var cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 5;

    function render() {
        "use strict";
        requestAnimationFrame(render);
        cube.rotation.x += 0.1;
        cube.rotation.y += 0.1;
        renderer.render(scene, camera);
    }

    render();

});