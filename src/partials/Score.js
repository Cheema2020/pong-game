import { SVG_NS } from "../settings";

export default class Score {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
  }
  render(svg, score) {
    const textSvg = document.createElementNS(SVG_NS, "text");
    textSvg.setAttributeNS(null, "x", this.x);
    textSvg.setAttributeNS(null, "y", this.y);
    textSvg.setAttributeNS(null, "font-family", "'Silkscreen Web', monotype");
    textSvg.setAttributeNS(null, "font-size", this.size);
    textSvg.setAttributeNS(null, "fill", "white");
    textSvg.textContent = score;
    svg.appendChild(textSvg);
  }
}
