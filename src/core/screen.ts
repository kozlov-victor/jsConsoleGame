
export class Screen {

    WIDTH:number = 64;
    HEIGHT:number = 32;
    private oldScreen:string[][];
    private newScreen:string[][];
    private domCells;

    constructor(){
        this.clear();
        let el = document.getElementById('screen');
        this.oldScreen = null;
        this.newScreen = this.generateNewScreen();
        this.domCells = new Array(this.HEIGHT);
        this.domCells.fill([]);
        this.domCells.forEach((r,y)=>{
            this.domCells[y] = new Array(this.WIDTH);
            this.domCells[y].fill({});
            let domRow = document.createElement('div');
            domRow.className = 'row';
            el.appendChild(domRow);
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