let canvas = $('#myCanvas').get(0);
let ctx = canvas.getContext('2d');

let score = 0;

let x = canvas.width / 2;
let y = canvas.height - 30;

// Brick Globals
let brickRowCount = 3;
let brickColumnCount = 5;
let brickWidth = 75;
let brickHeight = 20;
let brickPadding = 10;
let brickOffsetTop = 30;
let brickOffsetLeft = 30;

// Generate arrays of bricks
let bricks = [];
for (let c = 0; c < brickColumnCount; c++) {
    bricks[c] = [];
    for (let r = 0; r < brickRowCount; r++) {
        if (Math.floor(Math.random() * 100) > 80) {
            bricks[c][r] = {
                x: 0,
                y: 0,
                status: 1,
                special: true
            }
        } else {
            bricks[c][r] = {
                x: 0,
                y: 0,
                status: 1,
                special: false
            }
        }


    }
}

// Ball Globals
let dx = 2;
let dy = -2;
let ballRadius = 10;

// paddle globals
let paddleHeight = 10;
let paddleWidthStandard = 80;
let paddleWidth = {w:80};
let paddleX = (canvas.width - paddleWidth.w) / 2;

// Control globals
let rightPressed = false;
let leftPressed = false;

// Special Globals
let specialTimer = 10;
let paddleWidthSpecial = 200;
let paddleSpecialRunning = false;

// Control event listeners
$(document).keydown(keyDownHandler);
$(document).keyup(keyUpHandler);

// Special functions

function animatePaddle(start = true) {
    if (!start && !paddleSpecialRunning) {
        console.log('biggering');
        paddleSpecialRunning = true;
        let tween = new TWEEN.Tween(paddleWidth)
            .to({w:paddleWidthSpecial}, 1000)
            .start();
        // for (let x = 0; x < paddleWidthSpecial; x++) {
        //     paddleWidth ++
        // }
    } else {
        console.log('smallering');
        paddleSpecialRunning = false;
        for (let x = paddleWidthSpecial; x > paddleWidthStandard; x--) {
            paddleWidth.w--
        }
    }
}

function paddleSpecial() {
    animatePaddle(false);
    setTimeout(animatePaddle, 3000)
}

// Collision detection for bricks
function collisionDetection() {
    for (let c = 0; c < brickColumnCount; c++) {
        for (let r = 0; r < brickRowCount; r++) {
            let b = bricks[c][r];
            if (ballRectCollisionDetection(x, y, b) && b.status === 1) {
                if (b.special) {
                    paddleSpecial()
                }
                dy = -dy;
                b.status = 0;
                score++;
                if (score === brickRowCount * brickColumnCount) {
                    alert('You Win!!!');
                    document.location.reload();
                }
            }
        }
    }
}

function ballRectCollisionDetection(ballX, ballY, brick) {

    let disX = Math.abs(ballX - brick.x - brickWidth / 2);
    let disY = Math.abs(ballY - brick.y - brickHeight / 2);

    if (disX > (brickWidth / 2 + ballRadius)) {
        return false;
    }
    if (disY > (brickHeight / 2 + ballRadius)) {
        return false;
    }

    if (disX <= (brickWidth / 2)) {
        return true;
    }
    if (disY <= (brickHeight / 2)) {
        return true;
    }

    let bx = disX - brickWidth / 2;
    let by = disY - brickHeight / 2;
    return (bx * bx + by * by <= (ballRadius * ballRadius))
}

// Control functions
function keyUpHandler(e) {
    if (e.keyCode === 39) {
        rightPressed = false;
    } else if (e.keyCode === 37) {
        leftPressed = false;
    }
}

function keyDownHandler(e) {
    if (e.keyCode === 39) {
        rightPressed = true;
    }
    else if (e.keyCode === 37) {
        leftPressed = true;
    }
}

// Drawing functions
function drawScore() {
    ctx.font = "16px Arial";
    ctx.fillStyle = "#0095DD";
    ctx.fillText("Score: " + score, 8, 20);
}

function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();

}

function drawPaddle() {
    ctx.beginPath();
    ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth.w, paddleHeight);
    ctx.fillStyle = '##0095DD';
    ctx.fill();
    ctx.closePath();
}

function drawBricks() {
    for (let c = 0; c < brickColumnCount; c++) {
        for (let r = 0; r < brickRowCount; r++) {
            if (bricks[c][r].status === 1) {
                let brickX = (c * (brickWidth + brickPadding)) + brickOffsetLeft;
                let brickY = (r * (brickHeight + brickPadding)) + brickOffsetTop;
                bricks[c][r].x = brickX;
                bricks[c][r].y = brickY;
                ctx.beginPath();
                ctx.rect(brickX, brickY, brickWidth, brickHeight);
                if (bricks[c][r].special) {
                    ctx.fillStyle = "#dd0011";
                } else {
                    ctx.fillStyle = "#0095DD";
                }

                ctx.fill();
                ctx.closePath();
            }
        }
    }
}

function draw() {
    // clear canvas
    console.log(paddleWidth);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Control movement
    if (rightPressed && paddleX < canvas.width - paddleWidth.w) {
        paddleX += 7;
    }
    else if (leftPressed && paddleX > 0) {
        paddleX -= 7;
    }


    // Collision detection
    if (y + dy < ballRadius) {
        dy = -dy;
    } else if (y + dy + paddleHeight > canvas.height - ballRadius) {
        if (x > paddleX && x < paddleX + paddleWidth.w) {
            dy = -dy;
        } else if (y + dy > canvas.height - ballRadius) {
            alert('Game Over! You suck');
            clearInterval(animate);
            document.location.reload();
        }

    } else if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
        dx = -dx;
    }

    x += dx;
    y += dy;

    // draw elements
    drawBall();
    drawPaddle();
    drawPaddle();
    drawBricks();
    drawScore();
    collisionDetection();
}

let animate = setInterval(draw, 10);
