import { SVG_NS } from "../settings";

export default class Board {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  render(svg) {
    //...
    let boardSvg = document.createElementNS(SVG_NS, "rect");
    boardSvg.setAttributeNS(null, "x", 0);
    boardSvg.setAttributeNS(null, "y", 0);
    boardSvg.setAttributeNS(null, "width", this.width);
    boardSvg.setAttributeNS(null, "height", this.height);
    boardSvg.setAttributeNS(null, "fill", "#00b300");
    svg.appendChild(boardSvg);

    let lineSvg = document.createElementNS(SVG_NS, "line");
    lineSvg.setAttributeNS(null, "x1", this.width / 2);
    lineSvg.setAttributeNS(null, "y1", 0);
    lineSvg.setAttributeNS(null, "x2", this.width / 2);
    lineSvg.setAttributeNS(null, "y2", this.height);
    lineSvg.setAttributeNS(null, "stroke", "white");
    lineSvg.setAttributeNS(null, "stroke-width", "5");
    lineSvg.setAttributeNS(null, "stroke-dasharray", "28 15");
    svg.appendChild(lineSvg);
  }
}
