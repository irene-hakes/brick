import { canvas, ctx } from './canvas.js';

const Brick = (brickX, brickY, width, height) => {
  ctx.beginPath();
  ctx.rect(brickX, brickY, width, height);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
}

const Ball = (x, y, radius) => {
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
}

const Paddle = (paddleX, width, height) => {
  ctx.beginPath();
  ctx.rect(paddleX, canvas.height - height, width, height);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
}

export { Brick, Ball, Paddle }
