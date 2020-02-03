// settings.js
export const SVG_NS = "http://www.w3.org/2000/svg";
export const game_width = 812;
export const game_height = 456;

export const paddle_width = 11;
export const paddle_height = 110;
export const paddle_gap = 15;
export const ball_radius = 15;
export const paddle_speed = 30;
export const max_score = 10;

export const KEYS = {
  a: "ArrowUp", // player 1 up key
  z: "ArrowDown", // player 1 down key
  up: "w", // player 2 up key
  down: "s", // player 2 down key
  spaceBar: " " // we'll use this later...
};

//if (this.score === 5) {
//increase((this.speed = +10));
//} else {
//this.speed(0);
//}
