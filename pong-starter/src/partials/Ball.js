import { SVG_NS } from "../settings";
import pingSound from "../../public/sounds/pong-03.wav";
export default class Ball {
  constructor(r, boardWidth, boardHeight, color) {
    this.r = r;
    this.boardWidth = boardWidth;
    this.boardHeight = boardHeight;
    this.direction = 1;
    this.color = "white";
    this.ping = new Audio(pingSound);
    this.reset();
  }

  reset() {
    //code to center ball and for movement
    this.x = this.boardWidth / 2;
    this.y = this.boardHeight / 2;
    // generates random number between -5 and 5
    this.vy = 0;
    while (this.vy === 0) {
      this.vy = Math.floor(Math.random() * 10 - 5);
    }
    this.vx = this.direction * (6 - Math.abs(this.vy));
  }

  paddleCollision(player1, player2) {
    //if vx is greater than 0, detect paddle2

    if (this.vx > 0) {
      let paddle = player2.coordinates(
        player2.x,
        player2.y,
        player2.width,
        player2.height
      );
      let [leftX, rightX, topY, bottomY] = paddle;
      if (
        this.x + this.r >= leftX &&
        this.x + this.r <= rightX &&
        this.y >= topY &&
        this.y <= bottomY
      ) {
        this.ping.play();
        this.vx = -this.vx;
      }
    } else {
      let paddle = player1.coordinates(
        player1.x,
        player1.y,
        player1.width,
        player1.height
      );
      let [leftX, rightX, topY, bottomY] = paddle;

      if (
        this.x - this.r >= leftX &&
        this.x - this.r <= rightX &&
        this.y >= topY &&
        this.y <= bottomY
      ) {
        this.ping.play();
        this.vx = -this.vx;
      }
    }
  }

  wallCollision() {
    function generateRandomColor() {
      var randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
      return randomColor;
    }
    const hitLeft = this.x - this.r <= 0;
    const hitRight = this.x + this.r >= this.boardWidth;
    const hitTop = this.y - this.r <= 0;
    const hitBottom = this.y + this.r >= this.boardHeight;

    if (hitLeft || hitRight) {
      this.vx = -this.vx;

      this.color = generateRandomColor();
    } else if (hitTop || hitBottom) {
      this.vy = -this.vy;

      this.color = generateRandomColor();
    }
  }

  goal(playerWhoScored, otherPlayer) {
    playerWhoScored.score++;

    if (playerWhoScored.score >= 6) {
      if ((this.height - this.paddleHeight) / 2) {
        //this is x position of the paddle
        alert("Player 1 wins!");
      } else {
        alert("Player 2 wins!");
      }
      alert("Game Over");
      playerWhoScored.score = 0;
      otherPlayer.score = 0;
    }
    this.reset();
  }

  render(svg, player1, player2) {
    this.x += this.vx;
    this.y += this.vy;

    this.wallCollision();

    this.paddleCollision(player1, player2);

    let ball = document.createElementNS(SVG_NS, "circle");
    ball.setAttributeNS(null, "r", this.r);
    ball.setAttributeNS(null, "cx", this.x);
    ball.setAttributeNS(null, "cy", this.y);
    ball.setAttributeNS(null, "fill", this.color);
    svg.appendChild(ball);

    const rightGoal = this.x + this.r >= this.boardWidth;
    const leftGoal = this.x - this.r <= 0;

    if (rightGoal) {
      console.log("player 1 scored");

      this.goal(player1, player2);
      this.direction = 1;
    } else if (leftGoal) {
      console.log("player 2 scored");
      this.goal(player2, player1);
      this.direction = -1;
    }
  }
}
