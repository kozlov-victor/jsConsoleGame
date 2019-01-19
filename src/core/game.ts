
import {Stage} from "../states/stage";
import {Screen} from "./screen";
export class Game {

    public stage:Stage;
    public lastKey:number;
    public screen:Screen;

    constructor(){
        this.stage = null;
        this.screen = new Screen();
        this.lastKey = null;

        window.addEventListener('keydown',(e)=>{
            this.lastKey = e.keyCode;
        });
        window.addEventListener('keyup',(e)=>{
            this.lastKey = null;
        });
    }

    render(){
        setInterval(()=>{
            this.stage.render();
            this.screen.render();
        },100)
    }

}