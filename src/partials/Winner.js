import { SVG_NS } from "../settings";

export default class Winner {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = 60;
  }
  render(svg) {
    const textSvg = document.createElementNS(SVG_NS, "text");
    textSvg.setAttributeNS(null, "x", this.x);
    textSvg.setAttributeNS(null, "y", this.y);
    textSvg.setAttributeNS(null, "font-family", "'Silkscreen Web', monotype");
    textSvg.setAttributeNS(null, "font-size", this.size);
    textSvg.setAttributeNS(null, "fill", "white");
    textSvg.textContent = "You Are The Winner";
    svg.appendChild(textSvg);
  }
}

function resetBoard() {
  currentPlayer = 1;
  p1Score = 0;
  p2Score = 0;
}
