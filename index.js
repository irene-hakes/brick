import { canvas, ctx } from './canvas.js';
import { drawBricks, brickColumnCount, brickRowCount, bricks, brickWidth, brickHeight } from './drawBricks.js';
import { Ball, Paddle } from './objects.js'

let x = canvas.width / 2;
let y = canvas.height - 30;
let dx = 2;
let dy = -2;
const ballRadius = 10;

const paddleHeight = 10;
const paddleWidth = 75;
let paddleX = (canvas.width - paddleWidth) / 2;

let rightPressed = false;
let leftPressed = false;

let score = 0;

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

const keyDownHandler = event => {
  if (event.key === "Right" || event.key === "ArrowRight") {
    rightPressed = true;
  }
  else if (event.key === "Left" || event.key === "ArrowLeft") {
    leftPressed = true;
  }
}

const keyUpHandler = event => {
  if (event.key === "Right" || event.key === "ArrowRight") {
    rightPressed = false;
  }
  else if (event.key === "Left" || event.key === "ArrowLeft") {
    leftPressed = false;
  }
}

const collisionDetection = () => {
  for (let col = 0; col < brickColumnCount; col++) {
    for (let row = 0; row < brickRowCount; row++) {
      const b = bricks[col][row];
      if (b.status === 1) {
        if (x > b.x && x < b.x + brickWidth && y > b.y && y < b.y + brickHeight) {
          dy = -dy;
          b.status = 0;
          score++;
          if (score === brickRowCount * brickColumnCount) {
            alert("YOU WIN, CONGRATULATIONS!");
            document.location.reload();
            clearInterval(interval);
          }
        }
      }
    }
  }
}



const drawScore = () => {
  ctx.font = "16px Arial";
  ctx.fillStyle = "#0095DD";
  ctx.fillText("Score: " + score, 8, 20);
}

const draw = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  Ball(x, y, ballRadius);
  Paddle(paddleX, paddleWidth, paddleHeight);
  drawBricks();
  collisionDetection();
  drawScore();

  if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
    dx = -dx;
  }

  if (y + dy < ballRadius) {
    dy = -dy;
  } else if (y + dy > canvas.height - ballRadius) {
    if (x > paddleX && x < paddleX + paddleWidth) {
      dy = -dy;
    }
    else {
      alert("GAME OVER");
      document.location.reload();
      clearInterval(interval);
    }
  }

  if (rightPressed && paddleX < canvas.width - paddleWidth) {
    paddleX += 7;
  }
  else if (leftPressed && paddleX > 0) {
    paddleX -= 7;
  }

  x += dx;
  y += dy;
}

const interval = setInterval(draw, 10);
