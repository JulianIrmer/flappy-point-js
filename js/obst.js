class Obst{
    constructor(xObst,yObst,wObst,hObst){
        this.x = xObst;
        this.y = yObst;
        this.w = wObst;
        this.h = hObst;
    }

    show(){
        fill(255);
        rect(this.x, this.y, this.w, this.h);
    }

    update(){
        this.x -= 1.5;
    }
}