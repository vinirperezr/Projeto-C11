var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;


function preload(){
    pathImg = loadAnimation("path.png");
    boyImg = loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
 createCanvas(400,400);

 // Movendo o fundo 
    path = createSprite (200,200);
    path.addAnimation("caminho",pathImg);
    path.scale = 1.2

    boy = createSprite (180,340,30,30);
    boy.addAnimation("jake",boyImg);
    boy.scale = 0.08

    leftBoundary = createSprite(0,0,100,800);
    leftBoundary.visible = false

    rightBoundary = createSprite(410,0,100,800);
    rightBoundary.visible = false
}


function draw() {
    background(0);
    path.velocityY = 4;
    boy.x = World.mouseX;

    edges = createEdgeSprites();
    boy.collide(edges[3]);
    boy.collide(leftBoundary);
    boy.collide(rightBoundary);

    //Reiniciar o fundo
    if(path.y > 400){
        path.y = height/2;
    }



    drawSprites();

}




