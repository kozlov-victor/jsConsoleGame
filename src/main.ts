
import {Game} from "./core/game";
import {StageIntro} from "./states/stageIntro";
let game = new Game();
game.stage  = new StageIntro(game);
game.render();