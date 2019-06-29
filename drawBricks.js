import { Brick } from './objects.js';

const brickRowCount = 3;
const brickColumnCount = 5;
const brickWidth = 75;
const brickHeight = 20;
const brickPadding = 10;
const brickOffsetTop = 30;
const brickOffsetLeft = 30;


const bricks = [];
for (let col = 0; col < brickColumnCount; col++) {
  bricks[col] = [];
  for (let row = 0; row < brickRowCount; row++) {
    bricks[col][row] = { x: 0, y: 0, status: 1 };
  }
}
const drawBricks = () => {
  for (let col = 0; col < brickColumnCount; col++) {
    for (let row = 0; row < brickRowCount; row++) {
      if (bricks[col][row].status === 1) {
        let brickX = (col * (brickWidth + brickPadding)) + brickOffsetLeft;
        let brickY = (row * (brickHeight + brickPadding)) + brickOffsetTop;
        bricks[col][row].x = brickX;
        bricks[col][row].y = brickY;
        Brick(brickX, brickY, brickWidth, brickHeight)
      }
    }
  }
}

export { drawBricks, brickColumnCount, brickRowCount, bricks, brickWidth, brickHeight }
