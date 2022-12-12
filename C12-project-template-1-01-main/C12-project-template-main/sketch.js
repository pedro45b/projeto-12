var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;

function preload(){
  boyImg = loadAnimation("jake1.png","jake2.png","jake3.png","jake4.png","jake5.png")
 pathImg = loadImage("path.png");

  //loadAnimation (carregarAnimação) de corrida para o menino
 
}

function setup(){
  createCanvas(400,400);
 path = createSprite (200,200)
path.addImage("path.png",pathImg)
path.scale=1.2;




boy = createSprite(200,300)

boy.addAnimation("jake1.png,jake2.png,jake3.png,jake4.png,jake5.png",boyImg)
boy.scale=0.75;
  
//crie um limite à esquerda
leftBoundary=createSprite(0,0,100,800);
leftBoundary.visible = false

//crie um limite à direita
rightBoundary=createSprite(410,0,100,800);
rightBoundary.visible = false
}

function draw() {
  background(0);
  path.velocityY = 4;
  
  // mover o menino com o mouse usando mouseX
  boy.x = World.mouseX;
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  // colidir o menino com os limites invisíveis da esquerda e da direita
  boy.collide(rightBoundary)
  boy.collide(leftBoundary)
  if(path.y > 400 ){
    path.y = height/2;
  }
  
  drawSprites();
}
