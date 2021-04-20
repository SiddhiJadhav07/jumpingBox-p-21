var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music;

function preload(){
    music = loadSound("music.mp3");
    // load sound here
}


function setup(){
    canvas = createCanvas(800,600);

    block1 = createSprite(0,580,360,30);
    block1.shapeColor = "gold";

    block2 = createSprite(295,580,200,30);
    block2.shapeColor = "purple";

    
    block3 = createSprite(510,580,200,30);
    block3.shapeColor = "turquoise";
     
    block4 = createSprite(725,580,200,30);
    block4.shapeColor = "indigo";
    //create two more blocks i.e. block3 and block4 here

    ball = createSprite(random(150,750),100, 40,40);
    ball.shapeColor = rgb(255,255,255);
    ball.velocityX = -3;
    ball.velocityY = 3;

}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    ball.bounceOff(edges);

    
    //write code to bounce off ball from the block1 
    if(block1.isTouching(ball) && ball.bounceOff(block1)){
        ball.shapeColor = "gold";
        music.play();
    }



    if(block2.isTouching(ball) && ball.bounceOff(block2)){
        ball.shapeColor = "purple";
        music.play();
        

        }
        if(block4.isTouching(ball) && ball.bounceOff(block4)){
            ball.shapeColor = "indigo";
            music.play();
        }

        if(block3.isTouching(ball) ){
            ball.shapeColor = "turquoise";
            ball.velocityX = 0;
            ball.velocityY = 0;
            music.stop();
        }

    //write code to bounce off ball from the block3


    //write code to bounce off ball from the block4

    drawSprites();
}
