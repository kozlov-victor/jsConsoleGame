
import {Game} from "../core/game";
import {Screen} from "../core/screen";

export abstract class Stage {
    protected game:Game;
    protected screen:Screen;
    protected cnt:number;
    protected active:boolean  = false;

    constructor(game:Game){
        this.game = game;
        this.screen = game.screen;
        this.cnt = 0;
    }


    render(){}

}