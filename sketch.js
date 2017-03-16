var x = 0;
var speed = 3;

function setup(){
    createCanvas(600,400);
}

function draw(){
    background(30,20,100);
    if(mouseIsPressed){
        background(200,0,100);
    }
    stroke(255);
    strokeWeight(6);
    
    if(mouseY<150){
        fill(0,255,0);
    }
    else{
        nofill();
    }
    
    fill(300,200,200);
    ellipse(x,200,100,100);
    

   
    if(x>width || x< 0){
        console.log("CIRCLE IS OF THE SCREEN!!!!")
        speed = speed *-1;
        
    }
    x = x + speed;
    console.log(x);
    
    
}