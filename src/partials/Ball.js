import { SVG_NS } from "../settings";

export default class Ball {
  constructor(radius, boardWidth, boardHeight) {
    this.radius = radius;
    this.boardWidth = boardWidth;
    this.boardHeight = boardHeight;
    this.x = this.boardWidth / 2;
    this.y = this.boardHeight / 2;
    this.direction = 1;
  }
  render(svg) {
    const circleBall = document.createElementNS(SVG_NS, "circle");
    circleBall.setAttributeNS(null, "cx", this.x);
    circleBall.setAttributeNS(null, "cy", this.y);
    circleBall.setAttributeNS(null, "r", this.radius);
    circleBall.setAttributeNS(null, "fill", "white");
    svg.appendChild(circleBall);
  }
}
