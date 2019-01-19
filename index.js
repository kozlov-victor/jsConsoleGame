
const KEY  = {
    LEFT: 37,
    RIGHT: 39
};

const MISSING = {
    HAVE_NOTHING: 0,
    ME: 1,
    CPU: 2
};

const LOGO = `
#    # # #####      # #    # #    # #   ##      #        ##   #####  
#    # #   #        # #    # ##   # #  #  #     #       #  #  #    # 
#    # #   #        # #    # # #  # # #    #    #      #    # #####  
#    # #   #        # #    # #  # # # ######    #      ###### #    # 
 #  #  #   #   #    # #    # #   ## # #    #    #      #    # #    # 
  ##   #   #    ####   ####  #    # # #    #    ###### #    # #####
`;

const DISK = `
 _____
|==   |
|  o. |
|__O__|  Created by Victor Kozlov
`;

const LOOSE_LOGO = [32,32,32,32,32,32,46,32,32,32,32,32,32,32,46,10,32,32,32,32,32,32,92,96,45,34,39,34,45,39,47,10,32,32,32,32,32,32,32,125,32,54,32,54,32,123,10,32,32,32,32,32,32,61,46,32,32,89,32,32,44,61,10,32,32,32,32,40,34,34,45,39,42,42,42,96,45,34,34,41,10,32,32,32,32,32,96,45,47,32,32,32,32,32,92,45,39].
    map(it=>String.fromCharCode(it)).join('');

const WIN_LOGO = `
  /\\_/\\  (
 ( ^.^ ) _)
   \\\"/  (
 ( | | )
(__d b__)
`;

const WIN_TEXT = [32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,95,32,32,32,32,32,32,32,95,95,10,32,32,32,95,95,32,32,95,95,95,95,95,95,32,32,95,95,32,32,95,95,32,32,32,95,32,32,32,32,32,32,95,95,40,95,41,95,95,95,32,32,47,32,47,10,32,32,47,32,47,32,47,32,47,32,95,95,32,92,47,32,47,32,47,32,47,32,32,124,32,124,32,47,124,32,47,32,47,32,47,32,95,95,32,92,47,32,47,32,10,32,47,32,47,95,47,32,47,32,47,95,47,32,47,32,47,95,47,32,47,32,32,32,124,32,124,47,32,124,47,32,47,32,47,32,47,32,47,32,47,95,47,32,32,10,32,92,95,95,44,32,47,92,95,95,95,95,47,92,95,95,44,95,47,32,32,32,32,124,95,95,47,124,95,95,47,95,47,95,47,32,47,95,40,95,41,32,32,32,10,47,95,95,95,95,47,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32].
    map(it=>String.fromCharCode(it)).join('');

const LOOSE_TEXT = [32,32,95,95,32,32,32,32,32,32,32,95,32,95,32,10,32,47,32,95,124,32,95,95,32,95,40,95,41,32,124,10,124,32,124,95,32,47,32,95,96,32,124,32,124,32,124,10,124,32,32,95,124,32,40,95,124,32,124,32,124,32,124,10,124,95,124,32,32,92,95,95,44,95,124,95,124,95,124,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32].
    map(it=>String.fromCharCode(it)).join('');

class Screen {

    constructor(){
        this.WIDTH = 64;
        this.HEIGHT = 32;
        this.clear();
        this.el = document.getElementById('screen');
        this.oldScreen = null;
        this.newScreen = this.generateNewScreen();
        this.domCells = new Array(this.HEIGHT);
        this.domCells.fill([]);
        this.domCells.forEach((r,y)=>{
            this.domCells[y] = new Array(this.WIDTH);
            this.domCells[y].fill({});
            let domRow = document.createElement('div');
            domRow.className = 'row';
            this.el.appendChild(domRow);
            this.domCells[y].forEach((c,x)=>{
               let domCell = this.domCells[y][x] = document.createElement('div');
               domCell.className = 'cell';
               domRow.appendChild(domCell);
            });
        });
        this.clear();

    }


    generateNewScreen(){
        let rows = new Array(this.HEIGHT);
        rows.fill([]);
        rows.forEach((r,i)=>{
            rows[i] = new Array(this.WIDTH);
            rows[i].fill(' ');
        });
        return rows;
    }


    clear(){
        this.oldScreen = this.newScreen;
        this.newScreen = this.generateNewScreen();
    }

    print(x,y,s){
        for (let i=0;i<s.length;i++) {
            if (y>=this.newScreen.length) break;
            const pos = x+i;
            if (pos>=this.newScreen[y].length) continue;
            this.newScreen[y][x+i] = s[i];
        }
    }

    printMultiline(x,y,s){
        s.split('\n').forEach((str,i)=>{
            this.print(x,y+i,str);
        })
    }

    render(){
        let res = '';
        this.newScreen.forEach((r,y)=>{
            r.forEach((char,x)=>{
                if (this.newScreen[y][x]!==this.oldScreen[y][x]) {
                    this.domCells[y][x].textContent = char;
                }
            });
        });
    }

}


class Game {

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


class StageIntro {

    constructor(game){
        this.game = game;
        this.screen = game.screen;
        this.x = 0;
        this.cnt = 0;
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


class StageGame {

    constructor(game) {
        this.game = game;
        this.count = {
           me:0,
           cpu:0
        };
        this.screen = game.screen;
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


class StageWin {

    constructor(game) {
        this.game = game;
        this.screen = game.screen;
        this.cnt=0;
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

class StageLoose {

    constructor(game) {
        this.game = game;
        this.screen = game.screen;
        this.cnt=0;
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

let game = new Game();
game.stage  = new StageIntro(game);
game.render();
