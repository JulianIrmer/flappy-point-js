class Bird{
    constructor(xBird, yBird, dBird, gravity){
        this.x = xBird;
        this.y = yBird;
        this.d = dBird;
        this.gravity = gravity;
    }

    show(){
        fill("red");
        noStroke();
        ellipse(this.x, this.y, this.d);
    }

    update(){
        gravity += 0.2;
        this.y += gravity;    

        if(this.y > height){
        this.y = yBird;
        gravity = 1;
        }
    }

    up(){
        this.y -= 5;
    }
}