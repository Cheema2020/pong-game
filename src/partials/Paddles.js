import { SVG_NS } from "../settings";

export default class Paddles {
  constructor(boardHeight, width, height, x, y, keyUp, keyDown) {
    this.boardHeight = boardHeight;
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.speed = 20;
    this.score = 0;

    document.addEventListener("keydown", event => {
      switch (event.key) {
        case keyUp:
          this.moveUp();
          break;

        case keyDown:
          this.moveDown();
          break;
      }
    });
  }

  getScore() {
    return this.score;
  }

  increaseScore() {
    this.score = this.score + 1;
  }

  getPaddlePosition() {
    const position = {
      top: this.y,
      left: this.x,
      bottom: this.y + this.height,
      right: this.x + this.width
    };
    return position;
  }

  moveUp() {
    this.y = Math.max(0, this.y - this.speed);
  }

  moveDown() {
    this.y = Math.min(this.boardHeight - this.height, this.y + this.speed);
  }

  //...

  render(svg) {
    let paddleRect = document.createElementNS(SVG_NS, "rect");
    paddleRect.setAttributeNS(null, "x", this.x);
    paddleRect.setAttributeNS(null, "y", this.y);
    paddleRect.setAttributeNS(null, "width", this.width);
    paddleRect.setAttributeNS(null, "height", this.height);
    paddleRect.setAttributeNS(null, "fill", "white");
    svg.appendChild(paddleRect);
  }
}
