/**
 * Created by vison on 2016/10/3.
 */
requirejs.config({
    baseUrl: '../..',
    paths: {
        app: '../app',
        'template/doT': '/js/lib/doT/doT',
        'three': '/js/lib/three/three',


        'three.loaders.fbx': '/js/lib/three/_loaders/fbx',
        'three.controls.deviceOrientation': '/js/lib/three/_controls/deviceOrientation',
        'three.controls.drag': '/js/lib/three/_controls/drag',
        'three.controls.editor': '/js/lib/three/_controls/editor',
        'three.controls.firstPerson': '/js/lib/three/_controls/firstPerson',
        'three.controls.fly': '/js/lib/three/_controls/fly',
        'three.controls.mouse': '/js/lib/three/_controls/mouse',
        'three.controls.orbit': '/js/lib/three/_controls/orbit',
        'three.controls.orthographicTrackball': '/js/lib/three/_controls/orthographicTrackball',
        'three.controls.pointerLock': '/js/lib/three/_controls/pointerLock',
        'three.controls.trackball': '/js/lib/three/_controls/trackball',
        'three.controls.transform': '/js/lib/three/_controls/transform',
        'three.controls.vr': '/js/lib/three/_controls/vr'

    },
    shim: {
        'three.loaders.fbx': {
            deps: ['three'],
            exports: 'threeLoad'
        }
    }

});