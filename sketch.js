var player,enemy;
var bow,bow2;
var arrow,arrow2;
var playerImage,enemyImage;
var arrowImage,arrow2Image;
var bowImage,arrow2Image;
var background,backGroundImage;
var ground;
var shiled,shiledImage;
var enemyshiled,enemyshiledImage;
var playerscore = 0;
var enemyScore = 0;
var playerLifeCount = 5;
var enemyLifeCount = 5;


function preload(){
        playerImage=loadImage("IMAGES/PLAYER.png");
        enemyImage=loadImage("IMAGES/ENEMY.png");
        arrowImage=loadImage("IMAGES/ARROW.png");
        arrow2Image=loadImage("IMAGES/arrow2.png");
        bowImage=loadImage("IMAGES/BOW.png");
        bow2Image=loadImage("IMAGES/BOW2.png");
        backGroundImage=loadImage("IMAGES/background.JPG")
        shiledImage=loadImage("IMAGES/shiled.jpg")
        enemyshiledImage=loadImage("IMAGES/enemy shiled.jpg")
       playerLifeImage1=loadImage("IMAGES/life.png");
           enemyLifeImage=loadImage("IMAGES/life.png");
}
function setup(){

    createCanvas(1200,400);
//ground
    ground = createSprite(600, height-10, 1200, 20);
    ground.visible = false;
//player
    player = createSprite(200, 330 , 10 ,10);
    player.addImage("player", playerImage);
    player.scale = 0.4;
    player.setCollider("rectangle",-20 , 0, 5, 400)
   // player.debug = true;
//bow
    bow = createSprite(200, 390 , 10 ,10);
    bow.addImage("bow", bowImage);
   // bow.setCollider("rectangle",-20 , 0, 2, 10)
   // bow.debug = true;
    bow.scale = 0.4;


//enemy
    enemy = createSprite(1000, 330 , 10 ,10);
    enemy.addImage("enemy", enemyImage);
    enemy.scale = 0.4;
    enemy.setCollider("rectangle",20 , 0, 5, 400)
    //enemy.debug = true;

//enemybow
    bow2 = createSprite(1000, 350 , 10 ,10);
    bow2.addImage("bow2", bow2Image);
    bow2.scale = 0.4;

// groups
shieldGroup = createGroup();
eshieldGroup = createGroup();
arrowGroup = createGroup();
earrowGroup = createGroup();

}
function draw(){
    background(backGroundImage);

    player.y = ground.y;
    enemy.y = ground.y;
//set the bow and arrow position of player
    bow.x = player.x+20;
    bow.y = player.y-100;
  

    if (keyDown("space")){
        PlayercreateArrow();
    }
    
    if (keyDown("s")){
        PlayercreateShield();
    }
//set the bow and arrow position of player
    bow2.x = enemy.x-35;
    bow2.y = enemy.y-100;
   
    if (keyDown("shift")){
        enemyCreateArrow();
    }
    if (keyDown("up_arrow")){
        EnemycreateShield();
    }

    player.collide(ground);
    enemy.collide(ground);


if (arrowGroup.isTouching(eshieldGroup)){
    enemyScore++;
    arrowGroup.destroyEach();
    eshieldGroup.destroyEach();
}

if (earrowGroup.isTouching(shieldGroup)){
    playerscore++;
    earrowGroup.destroyEach();
    shieldGroup.destroyEach();
}

if(earrowGroup.isTouching(player)){
    earrowGroup.destroyEach();
    playerLifeCount -= 1;

    console.log(playerLifeCount);
    

 }
x = 100;
for(var i=0; i < playerLifeCount ; i++){
    image(playerLifeImage1 ,  x , 50, 30,30);
    x= x+50;
}


if(arrowGroup.isTouching(enemy)){
    arrowGroup.destroyEach();
    enemyLifeCount -= 1;

    console.log(enemyLifeCount);
    

 }
x1 = width- 300;
for(var i=0; i < enemyLifeCount ; i++){
    image(enemyLifeImage ,  x1 , 50, 30,30);
    x1= x1+50;
}



    drawSprites();
    textSize(20);
    fill("black");
    text("Player1 : "+playerscore , 100, 50);
    text("Player2 : "+enemyScore , width-200, 50);
}

function PlayercreateArrow(){
   arrow= createSprite(230, 350 , 10 ,10);
    arrow.addImage("arrow", arrowImage);
    arrow.scale = 0.2;
    arrow.y = bow.y;
    arrow.velocityX = 4;
    arrowGroup.add(arrow);

}

function PlayercreateShield(){
    shield = createSprite(300, 350 , 10 ,10);
    shield.addImage("pshield", shiledImage);
    shield.lifetime = 50;
    shieldGroup.add(shield);
 
 }

 function EnemycreateShield(){
    Eshield = createSprite(900, 350 , 10 ,10);
    Eshield.addImage("eshield", enemyshiledImage);
    Eshield.lifetime = 50;
    eshieldGroup.add(Eshield);
 }

function enemyCreateArrow(){
    arrow2= createSprite(970, 350 , 10 ,10);
    arrow2.addImage("arrow2", arrow2Image);
    arrow2.scale = 0.2;
    arrow2.y = bow2.y;
     arrow2.velocityX = -4;
     earrowGroup.add(arrow2);

    
 
 }