
import {Stage} from "./stage";
import {WIN_LOGO, WIN_TEXT} from "../consts";
import {StageIntro} from "./stageIntro";

export class StageWin extends Stage {


    constructor(game) {
        super(game);
        setTimeout(()=>{
            this.active = true;
        },3000);
    }

    render(){
        this.screen.clear();
        this.cnt++;
        if (this.cnt%20<=10) this.screen.printMultiline(0,0,WIN_TEXT);
        this.screen.printMultiline(10,10,WIN_LOGO);
        if (this.active && this.game.lastKey) this.game.stage = new StageIntro(this.game);
    }
}