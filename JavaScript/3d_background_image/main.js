const focal_point_speed = 5;
const layer_difference = 1;


// if (window.addEventListener) window.addEventListener('DOMMouseScroll', wheel, false);
// window.onmousewheel = document.onmousewheel = wheel;
//
// function wheel(event) {
//     let delta = 0;
//     if (event.wheelDelta) {
//         console.log(event.wheelDelta);
//         delta = event.wheelDelta / 120;
//     }
//     else if (event.detail) {
//         console.log('detail');
//         delta = -event.detail / 3;
//     }
//
//     handle(delta);
//     if (event.preventDefault) {
//         event.preventDefault();
//     }
//     event.returnValue = false;
// }
//
// function handle(delta) {
//     let time = 100;
//     let distance = 100;
//
//     $('html, body').stop().animate({
//         scrollTop: $(window).scrollTop() - (distance * delta)
//     }, time);
//     camera.position.y += movement;
//     document.body.style.background = "url(" + canvas[0].toDataURL() + ")"
// }


// Setup a new scene
let scene = new THREE.Scene();


// Setup the camera
let camera = new THREE.PerspectiveCamera(90, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 10.7;
camera.position.y = 4.9;

// Setup the renderer
let renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);


// Add the lights
let ambientLight = new THREE.AmbientLight(0x111111);
scene.add(ambientLight);

let light = new THREE.PointLight(0xFFFFDD);
light.position.set(-15, 10, 15);
scene.add(light);


// Models
let model;
let sphereModel;

// Load the JSON files and provide callback functions (modelToScene
let loader = new THREE.JSONLoader();
loader.load("wireframe-hills-and-river.json", addModelToScene);


// After loading JSON from our file, we add it to the scene
function addModelToScene(geometry, material) {
    model = new THREE.Mesh(geometry, material);
    model.scale.set(0.5, 0.5, 0.5);
    scene.add(model);
}

// // Special callback to get a reference to the sphere
// function addSphereToScene( geometry, materials ){
//   let material = new THREE.MeshFaceMaterial(materials);
//   sphereModel = new THREE.Mesh( geometry, material );
//   sphereModel.scale.set(0.5,0.5,0.5);
//   sphereModel.position.y += 0.5;
//   scene.add( sphereModel );
// }


// Render loop to rotate our sphere by a little bit each frame
let render = function () {
    requestAnimationFrame(render);

//        if (typeof sphereModel != "undefined") {
//            // Rotate the sphere
//            sphereModel.rotation.y += 0.001;
//            sphereModel.rotation.x += 0.002;
//        }

    renderer.render(scene, camera);
};

render();
let height = $(document).outerHeight(true);
const movement = height / 10000;
let iScrollPos = 0;

$(window)
    .scroll(function () {
        console.log('Detected Scroll');
        console.log($(window).scrollTop() * 0.85);
        let iCurScrollPos = $(this).scrollTop();
        // if (camera.position.y > -16) {
        //     console.log('too low')
        // }
        if (iCurScrollPos > iScrollPos) {
            //Scrolling Down
            camera.position.y -= movement;
            document.body.style.background = "url(" + canvas[0].toDataURL() + ") no-repeat center center fixed";
            // console.log('..down');
            console.log(camera.position);
        } else {
            //Scrolling Up
            camera.position.y += movement;
            document.body.style.background = "url(" + canvas[0].toDataURL() + ") no-repeat center center fixed";
            // console.log('..up');
            console.log(camera.position);
        }
        iScrollPos = iCurScrollPos;

    })
    .on('resize', function () {
        camera.aspect = window.innerWidth / window.innerHeight;
        document.body.style.background = "url(" + canvas[0].toDataURL() + ") no-repeat center center fixed";
    });
// $(document).keydown(function (e) {
//     console.log(e.which);
//     switch (e.which) {
//         case 37: // left
//             break;
//
//         case 38: // up
//             camera.position.y += movement;
//             document.body.style.background = "url(" + canvas[0].toDataURL() + ")";
//             console.log(camera.position);
//             break;
//
//         case 39: // right
//             break;
//
//         case 40: // down
//             camera.position.y -= movement;
//             document.body.style.background = "url(" + canvas[0].toDataURL() + ")";
//             console.log(camera.position);
//             break;
//
//         case 87: // w
//             camera.position.z -= movement;
//             document.body.style.background = "url(" + canvas[0].toDataURL() + ")";
//             console.log(camera.position);
//             break;
//
//         case 83: // s
//             camera.position.z += movement;
//             document.body.style.background = "url(" + canvas[0].toDataURL() + ")";
//             console.log(camera.position);
//             break;
//         default:
//             return; // exit this handler for other keys
//     }
//     e.preventDefault(); // prevent the default action (scroll / move caret)
// });
let canvas;
canvas = $('canvas');

canvas.css('display', 'none');
setTimeout(function () {
    document.body.style.background = "url(" + canvas[0].toDataURL() + ") no-repeat center center fixed";
}, 100);

