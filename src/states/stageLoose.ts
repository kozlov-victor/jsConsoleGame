
import {Game} from "../core/game";
import {Stage} from "./stage";
import {LOOSE_LOGO, LOOSE_TEXT} from "../consts";
import {StageIntro} from "./stageIntro";

export class StageLoose extends Stage{


    constructor(game:Game) {
        super(game);
        setTimeout(()=>{
            this.active = true;
        },3000);
    }

    render(){
        this.screen.clear();
        this.cnt++;
        if (this.cnt%20<=10) this.screen.printMultiline(0,0,LOOSE_TEXT);
        this.screen.printMultiline(10,10,LOOSE_LOGO);
        if (this.active && this.game.lastKey) this.game.stage = new StageIntro(this.game);
    }
}