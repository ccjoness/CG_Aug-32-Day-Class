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
const camera_top = 5;
const camera_bottom = -25;
camera.position.z = 11;
camera.position.y = camera_top;

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
let maxScroll = .05 * height;
let movement = height / 10000;
let iScrollPos = 0;

function debouncer(func, tmeout) {
    let timeoutID, timeout = tmeout || 200;
    return function () {
        let scope = this, args = arguments;
        clearTimeout(timeoutID);
        timeoutID = setTimeout(function () {
            func.apply(scope, Array.prototype.slice.call(args));
        }, timeout);
    };
}

function findCameraVector() {
    // percentage of widow pos for scroll area
    let top = $(window).scrollTop(); // pixel val of top window pos
    let current_percent_of_element_dec = top / maxScroll; //what percentage have we moved in decimal form?

    if (current_percent_of_element_dec * 100 < 100.0) {
        console.log(parseFloat((current_percent_of_element_dec * 100).toFixed(1)));
        // console.log((current_percent_of_element_dec * 100).toFixed(2) + '%'); // percent of total moved
        // console.log(current_percent_of_element_dec * top)
    }
}

$(window)
    .scroll(function () {
        console.log('Detected Scroll');
        // this.preventDefault();
        // let current_pos = ($(window).scrollTop() / $(document).outerHeight(true)) * 100;
        findCameraVector();
        // let iCurScrollPos = $(this).scrollTop();
        //
        // if (iCurScrollPos > iScrollPos) {
        //     //Scrolling Down
        //     camera.position.y -= movement;
        //     document.body.style.background = "url(" + canvas[0].toDataURL() + ") no-repeat center center fixed";
        //
        // } else {
        //     //Scrolling Up
        //     camera.position.y += movement;
        //     document.body.style.background = "url(" + canvas[0].toDataURL() + ") no-repeat center center fixed";
        //     // console.log('..up');
        //     // console.log(camera.position);
        // }
        // // }
        // iScrollPos = iCurScrollPos;


    })
    .on('resize', function () {
        height = $(document).outerHeight(true);
        maxScroll = .05 * height;
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

