import { SVG_NS } from "../settings";

export default class Paddle {
  constructor(boardHeight, width, height, x, y, up, down, shade) {
    this.boardHeight = boardHeight;
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.speed = 10;
    this.score = 0;
    this.shade = "red";
    document.addEventListener("keydown", event => {
      switch (event.key) {
        case up:
          this.up();
          break;
        case down:
          this.down();
          break;
      }
    });
  }

  up() {
    this.y = Math.max(0, this.y - this.speed);
  }

  down() {
    this.y = Math.min(this.boardHeight - this.height, this.y + this.speed);
  }

  coordinates(x, y, width, height) {
    let leftX = x;
    let rightX = x + width;
    let topY = y;
    let bottomY = y + height;
    return [leftX, rightX, topY, bottomY];
  }

  //when ball hits the paddles
paddleHit() {
  function generateRandomColor() {
    var randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    return randomColor;
  }

  if (this.height - this.paddleHeight / 2) {

  } else {

    this.shade = generateRandomColor();
  }
}

  render(svg) {
    let rect = document.createElementNS(SVG_NS, "rect");
    //your code here
    rect.setAttributeNS(null, "width", this.width);
    rect.setAttributeNS(null, "height", this.height);
    rect.setAttributeNS(null, "x", this.x);
    rect.setAttributeNS(null, "y", this.y);
    rect.setAttributeNS(null, "fill", this.shade);
    svg.appendChild(rect);
    this.paddleHit();
  }
}
