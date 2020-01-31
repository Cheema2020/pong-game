import {
  SVG_NS,
  paddle_width,
  paddle_height,
  paddle_gap,
  ball_radius
} from "../settings";
import Board from "./Board";
import Paddles from "./Paddles";
import Ball from "./Ball";
export default class Game {
  constructor(element, width, height) {
    this.element = element;
    this.width = width;
    this.height = height;
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
      "ArrowUp",
      "ArrowDown"
    );
    this.paddle2 = new Paddles(
      this.height,
      paddle_width,
      paddle_height,
      right_gap,
      paddle_mid,
      "w",
      "s"
    );
    this.ball = new Ball(8, this.width, this.height);
    // let rect = document.createElementNS(SVG_NS, "circle");
    // rect.setAttributeNS(null, "cx", 256);
    // rect.setAttributeNS(null, "cy", 128);
    // rect.setAttributeNS(null, "r", 20);
    // rect.setAttributeNS(null, "fill", "black");
    // svg.appendChild(rect);

    // Other code goes here...
  }

  render() {
    // More code goes here....
    this.gameElement.innerHTML = "";
    let svg = document.createElementNS(SVG_NS, "svg");
    svg.setAttributeNS(null, "width", this.width);
    svg.setAttributeNS(null, "height", this.height);
    svg.setAttributeNS(null, "viewBox", `0 0 ${this.width} ${this.height}`);
    this.gameElement.appendChild(svg);

    this.board.render(svg);
    this.paddle1.render(svg);
    this.paddle2.render(svg);
    this.ball.render(svg);
  }
}
