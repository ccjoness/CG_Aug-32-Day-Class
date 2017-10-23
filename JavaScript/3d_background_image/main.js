// Setup a new scene
let scene = new THREE.Scene();
let height = $(document).outerHeight(true);
let maxScroll = Math.round(.2 * height);
let vectorArray = [5, 4.5, 4.0, 3.5, 3.0, 2.5, 2.0, 1.5, 1.0, 0.5, 0.0, -0.5, -1.0, -1.5, -2.0, -2.5, -3.0, -3.5, -4.0, -4.5, -5.0, -5.5, -6.0, -6.5, -7.0, -7.5, -8.0, -8.5, -9.0, -9.5, -10.0, -10.5, -11.0, -11.5, -12.0, -12.5, -13.0, -13.5, -14.0, -14.5, -15.0, -15.5, -16.0, -16.5, -17.0, -17.5, -18.0, -18.5, -19.0, -19.5, -20.0, -20.5, -21.0, -21.5, -22.0, -22.5, -23.0, -23.5, -24.0, -24.5, -25];
let bgFrames = vectorArray.length - 1;

let time = 3000; // animation time
// Setup the camera
let camera = new THREE.PerspectiveCamera(90, window.innerWidth / window.innerHeight, 0.1, 1000);
const camera_top = 5;
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

// Load the JSON files and provide callback functions (modelToScene
let loader = new THREE.JSONLoader();
loader.load("wireframe-hills-and-river.json", addModelToScene);


// After loading JSON from our file, we add it to the scene
function addModelToScene(geometry, material) {
    model = new THREE.Mesh(geometry, material);
    model.scale.set(0.5, 0.5, 0.5);
    scene.add(model);
}

let render = function () {
    requestAnimationFrame(render);
    document.body.style.background = "url(" + canvas[0].toDataURL() + ") no-repeat center center fixed";
    renderer.render(scene, camera);
};


function findCameraVector() {
    let top = $(window).scrollTop(); // pixel val of top window pos
    let current_percent_of_element_dec = top / maxScroll; //what percentage have we moved in decimal form?
    camera.position.y = vectorArray[parseInt(parseFloat(((current_percent_of_element_dec).toFixed(4)) * bgFrames).toFixed(0))];

}

$(window)
    .scroll(function (event) {
        console.log('Detected Scroll');
        findCameraVector();

    })
    .on('resize', function () {
        height = $(document).outerHeight(true);
        maxScroll = .05 * height;
        camera.aspect = window.innerWidth / window.innerHeight;
        document.body.style.background = "url(" + canvas[0].toDataURL() + ") no-repeat center center fixed";
    });

let canvas;
canvas = $('canvas');
render();
canvas.css('display', 'none');
$('.spacer').css('height', window.innerHeight + 'px');
$('#bg01').css('top', window.innerHeight + 'px');

let keys = [37, 38, 39, 40];

function preventDefault(e) {
    e = e || window.event;
    if (e.preventDefault)
        e.preventDefault();
    e.returnValue = false;
}

function keydown(e) {
    for (let i = keys.length; i--;) {
        if (e.keyCode === keys[i]) {
            preventDefault(e);
            return;
        }
    }
}

function wheel(e) {
    preventDefault(e);
}

function disable_scroll() {
    if (window.addEventListener) {
        window.addEventListener('DOMMouseScroll', wheel, false);
    }
    window.onmousewheel = document.onmousewheel = wheel;
    document.onkeydown = keydown;
}

function enable_scroll() {
    if (window.removeEventListener) {
        window.removeEventListener('DOMMouseScroll', wheel, false);
    }
    window.onmousewheel = document.onmousewheel = document.onkeydown = null;
}

let animating = false;


function handle(delta, direction) {
    animating = true;
    disable_scroll();

    if (direction === -1) {
        $('.main').stop().animate({'opacity': '1'}, 3000);
    } else if (direction === 1) {
        $('.main').stop().animate({'opacity': '0'}, 2000);
    }

    $('html, body').stop().animate({
        scrollTop: delta
    }, time, function () {
        animating = false;
        enable_scroll()
    });

}

window.addEventListener('wheel', findScrollDirectionOtherBrowsers);

function findScrollDirectionOtherBrowsers(event) {
    let delta;
    if (event.wheelDelta) {
        delta = event.wheelDelta;
    } else {
        delta = -1 * event.deltaY;
    }

    if (delta < 0) {
        if ($(window).scrollTop() < maxScroll + 10 && !animating) {
            handle($('.main').offset().top, -1);

        }
        console.log("DOWN");
    } else if (delta > 0) {
        if ($(window).scrollTop() < $('.main').offset().top && !animating) {
            handle(0, 1);

        }
        console.log("UP");
    }

}

$(document).ready(function () {
    window.scrollTo(0, 0);
    setTimeout(function () {
        // document.body.style.background = "url(" + canvas[0].toDataURL() + ") no-repeat center center fixed";
        $('body').addClass('loaded');
    }, 1000);

});