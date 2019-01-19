
import {Game} from "../core/game";
import {Stage} from "./stage";
import {KEY, MISSING} from "../consts";
import {StageWin} from "./stageWin";
import {StageLoose} from "./stageLoose";
export class StageGame extends Stage {

    count: {me:number,cpu:number};

    private ball: {
        coord: {
            x:number,
            y:number,
        },
        vel: {
            x:number,
            y:number,
        }
    };
    private myPlatform: {
        x:number,
        y:number,
        width:number
    };
    private cpuPlatform: {
        x:number,
        y:number,
        width:number
    };

    constructor(game) {
        super(game);
        this.count = {
            me:0,
            cpu:0
        };
        this.ball = {
            coord: {x: 10, y: 10},
            vel:   {x:1, y:1}
        };
        this.myPlatform = {
            width: 5,
            x:10,y:this.screen.HEIGHT - 2
        };
        this.cpuPlatform = {
            width: 5,
            x:10,y: 2
        }
    }

    hitBallVsWall(){
        if (this.ball.coord.y>=this.screen.HEIGHT-1) {
            this.ball.vel.y = -1;
            return MISSING.ME;
        }
        if (this.ball.coord.y<=0) {
            this.ball.vel.y = 1;
            return MISSING.CPU;
        }

        if (this.ball.coord.x>=this.screen.WIDTH-1)
            this.ball.vel.x = -1;
        if (this.ball.coord.x<=0)
            this.ball.vel.x = 1;
        return MISSING.HAVE_NOTHING;
    }

    hitBallVsPlatform(platform){
        if (platform.y===this.ball.coord.y) {
            if (this.ball.coord.x>=platform.x && this.ball.coord.x<=platform.x+platform.width) {
                this.ball.vel.y*=-1;
            }
        }
    }

    renderBall(){
        this.screen.print(this.ball.coord.x,this.ball.coord.y,'0');
        let missing = this.hitBallVsWall();
        if (missing===MISSING.CPU) {
            this.count.cpu++;
        } else if (missing===MISSING.ME) {
            this.count.me++;
        }
        if (this.count.cpu>=3) {
            this.game.stage = new StageWin(this.game);
            return;
        }
        if (this.count.me>=3) {
            this.game.stage = new StageLoose(this.game);
            return;
        }
        this.hitBallVsPlatform(this.myPlatform);
        this.hitBallVsPlatform(this.cpuPlatform);

        this.ball.coord.x+=this.ball.vel.x;
        this.ball.coord.y+=this.ball.vel.y;
    }


    renderCount(){
        this.screen.print(40,1,this.count.me+':'+this.count.cpu);
    }

    static getString(symbol,size){
        let res = symbol;
        for (let i = 1; i < size; i++) {
            res+=symbol;
        }
        return res;
    }

    renderPlatform(platform){

        if (platform.x<0) platform.x = 0;
        if (platform.x>this.screen.WIDTH - platform.width)
            platform.x = this.screen.WIDTH - platform.width;

        this.screen.print(
            platform.x,
            platform.y,
            '0'+StageGame.getString('~',platform.width-2)+'0');

    }

    renderMyPlatform(){
        this.renderPlatform(this.myPlatform);
        if (this.game.lastKey===KEY.LEFT) {
            this.myPlatform.x-=1;
        }
        if (this.game.lastKey===KEY.RIGHT) {
            this.myPlatform.x+=1;
        }
    }

    renderCpuPlatform(){
        this.renderPlatform(this.cpuPlatform);
        let dist = this.ball.coord.y - this.cpuPlatform.y;
        if (dist>this.game.screen.HEIGHT/2) return;
        let delta = this.cpuPlatform.x - this.ball.coord.x;
        if (delta>0) this.cpuPlatform.x-=1;
        if (delta<0) this.cpuPlatform.x+=1;
    }

    render(){
        this.screen.clear();
        this.renderBall();
        this.renderMyPlatform();
        this.renderCpuPlatform();
        this.renderCount();
    }
}