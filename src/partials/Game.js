import { SVG_NS } from "../settings";
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
    this.paddle1 = new Paddles(this.height, 8, 56, 10, 100);
    this.paddle2 = new Paddles(this.height, 8, 56, 494, 100);
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
