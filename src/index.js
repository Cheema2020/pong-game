import "./styles/game.css";
import Game from "./partials/Game";
import { game_width, game_height } from "./settings";

// create a game instance
const game = new Game("game", game_width, game_height);

(function gameLoop() {
  game.render();
  requestAnimationFrame(gameLoop);
})();
