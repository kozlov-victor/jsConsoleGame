
import {Game} from "../core/game";
import {DISK, LOGO} from "../consts";
import {StageGame} from "./stageGame";
import {Stage} from "./stage";

export class StageIntro extends Stage{

    private x:number;

    constructor(game){
        super(game);
        this.x = 0;
        setTimeout(()=>{
            this.active = true;
        },1000);
    }

    render(){
        this.screen.clear();
        this.screen.printMultiline(this.x,2,LOGO);
        this.screen.print(23,20,'press any key');
        this.cnt++;
        if (this.cnt%10<=5) this.screen.printMultiline(15,22,DISK);
        this.x-=1;
        if (this.x<-50) this.x = this.screen.WIDTH;
        if (this.game.lastKey && this.active) this.game.stage = new StageGame(this.game);
    }
}