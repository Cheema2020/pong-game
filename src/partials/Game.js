import {
  SVG_NS,
  paddle_width,
  paddle_height,
  paddle_gap,
  ball_radius,
  paddle_speed
} from "../settings";
import Board from "./Board";
import Paddles from "./Paddles";
import Ball from "./Ball";
import Score from "./Score";

export default class Game {
  constructor(element, width, height) {
    this.element = element;
    this.width = width;
    this.height = height;
    this.paused = false;
    this.gameElement = document.getElementById(this.element);
    this.board = new Board(this.width, this.height);
    const paddle_mid = (this.height - paddle_height) / 2;
    const right_gap = this.width - paddle_gap - paddle_width;
    this.paddle1 = new Paddles(
      this.height,
      paddle_width,
      paddle_height,
      paddle_gap,
      paddle_mid,
      "w",
      "s"
    );
    this.paddle2 = new Paddles(
      this.height,
      paddle_width,
      paddle_height,
      right_gap,
      paddle_mid,
      "ArrowUp",
      "ArrowDown"
    );

    this.ball = new Ball(ball_radius, this.width, this.height);
    this.score1 = new Score(this.width / 2 - 150, 80, 30);
    this.score2 = new Score(this.width / 2 + 90, 80, 30);

    document.addEventListener("keydown", event => {
      if (event.key === " ") {
        this.paused = !this.paused;
        if (this.paused === true) {
          this.paddle1.setSpeed(0);
          this.paddle2.setSpeed(0);
        } else {
          this.paddle1.setSpeed(paddle_speed);
          this.paddle2.setSpeed(paddle_speed);
          if (
            this.paddle1.getScore() == max_score ||
            this.paddle2.getScore() == max_score
          ) {
            this.paddle1.resetScore();
            this.paddle2.resetScore();
          }
        }
      }
    });
  }

  render() {
    // More code goes here....
    if (this.paused === false) {
      this.gameElement.innerHTML = "";
      let svg = document.createElementNS(SVG_NS, "svg");
      svg.setAttributeNS(null, "width", this.width);
      svg.setAttributeNS(null, "height", this.height);
      svg.setAttributeNS(null, "viewBox", `0 0 ${this.width} ${this.height}`);
      this.gameElement.appendChild(svg);

      this.board.render(svg);
      this.paddle1.render(svg);
      this.paddle2.render(svg);
      this.ball.render(svg, this, this.paddle1, this.paddle2);
      this.score1.render(svg, this.paddle1.getScore());
      this.score2.render(svg, this.paddle2.getScore());
    }
  }
}
