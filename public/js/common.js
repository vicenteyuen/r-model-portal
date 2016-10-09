/**
 * Created by vison on 2016/10/3.
 */
requirejs.config({
    baseUrl: '../..',
    paths: {
        app: '../app',
        'template/doT': '/js/lib/doT/doT',
        'three': '/js/lib/three/three.min',

        'three.loaders.fbx': '/js/lib/three/_loaders/fbx',
        'three.controls.orbit': '/js/lib/three/_controls/orbit'

    },
    shim: {

    }

});