let width = 400;
let height = 400;
let bird;
let obst;
let obst2;
let xBird = 75;
let yBird = 100;
let dBird = 20;
let xObst = width / 2;
let yObst = 0;
let wObst = 20;
let hObst = 150;
let gravity = 2;
let arr = [];
let arr2 = [];
let gap;
let k = 0;
let height2;
let hit = false;
let counter = 0;
let highscore = 0;

function setup(){
    createCanvas(width, height);
    bird = new Bird(xBird, yBird, dBird);
    obst = new Obst(xObst, yObst, wObst, hObst);
    fillArr();
    obst2 = new Obst(xObst, hObst+100, wObst, height2);
    keyPressed();
}

function draw(){
    background(0);
    bird.show();
    spawnObst();
    obst.show();
    obst2.show();
    obst.update();
    obst2.update();
    bird.update();
    collide();
    ifHit();
    showCounter();
    increaseDiff();
}

function keyPressed(){
    if(keyCode == 32){
        gravity -= 9;
    }
}

function spawnObst(){

    if(obst.x < 35){
        obst = arr[k];
        obst2 = arr2[k];
        k++;
    }
}

function fillArr(){
    for(let i = 0; i < 400; i++){
        let xObst = floor(random(400, 400));
        let hObst = floor(random(50, 350));
        gap = floor(random(120, 160));
        height2 = height - hObst;

        arr[i] = new Obst(xObst, 0, 20, hObst);        
        arr2[i] = new Obst(xObst, hObst+gap, wObst, height2);
    }
}

function collide(){
    if(obst.x <= 85 && (obst.h >= bird.y || bird.y >= (obst.h+gap))){
        return hit = true;
    }
}

function ifHit(){
    if(hit){
        bird.y = yBird;
        gravity = 1;
        if(highscore < counter){
            highscore = counter;
        }
        counter = 0;
        return hit = false;
    }
    else{
        counter++;
    }
}

function showCounter(){
    document.querySelector("#counter").innerHTML = "Current Score: "+counter;
    document.querySelector("#highscore").innerHTML = "Your Highscore: "+highscore;
}

function increaseDiff(){
    if(counter > 400){
        obst.x -= 0.2;
        obst2.x -= 0.2;
    }
    if(counter > 1200){
        obst.x -= 0.4;
        obst2.x -= 0.4;
    }
    if(counter > 2200){
        obst.x -= 0.6;
        obst2.x -= 0.6;
    }
    if(counter > 3000){
        obst.x -= 0.8;
        obst2.x -= 0.8;
    }
    if(counter > 3800){
        obst.x -= 1;
        obst2.x -= 1;
    }
}
