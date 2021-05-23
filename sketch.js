var gameState=0;
var menu,player1,player2,player2Img,player1Ammo=10,player2Ammo=10,ammoImg,ammoGroup;
var birddAnimation,game,birdsGroup,bgImg,player2Score=0;
var reset;
var player1Name,player2Name;
var shootingSound;
function preload()
{
  birdAnimation=loadAnimation("Images/b1.png","Images/b2.png","Images/b3.png","Images/b4.png","Images/b5.png","Images/b6.png","Images/b7.png","Images/b8.png");
  bgImg =loadImage("Images/Forest.jpg");
  player2Img = loadImage("Images/crosshair2.png");
  ammoImg=loadImage("Images/bullet-clipart-cartoon-7.png");
  shootingSound = loadSound("ss.mp3");
}

function setup()
 {
	createCanvas(1400, 700);
  menu=new Menu();
	player1=new Player(mouseX,mouseY);
	player2= createSprite(400,350);
  player2.addImage(player2Img);
  player2.scale = 0.3;
  // player2.debug = true;
  game=new Game();
  birdsGroup=new Group();
  ammoGroup=new Group();
	reset=createButton("RESET");
  reset.position(700,350);
  reset.hide();


  
}


function draw() {
 
  background("yellow");
  if(gameState===0)
  {
	  menu.display();
    console.log("hello");
  }
  
  if(gameState==2)
  {
    background(bgImg);
    game.spawnBirds();
    player1.display();
   
   
    game.scoreCheck();
    game.scoreDisplay();
    game.playerControls();
    game.ammo();
    if(keyWentDown("SPACE") && player2Ammo >0){
      player2Ammo--;
      shootingSound.play();
    }
    game.spawnAmmo()
    game.getAmmo();
    drawSprites();
    if(player1Ammo ===0 && player2Ammo===0)
    {
      gameState = 3;
      if(player1.score > player2Score)
        {
            alert(player1.name + " has won !!");

        }
        else
        {
            alert(player2.name + " has won !!");

        }
    }
  }
  if(gameState ===3)
  {
    game.end();
    reset.show();
    reset.mousePressed(
      ()=>
      {
        gameState=0;
        menu.reset();
      }
    )
  }
  console.log(gameState);
}

function mouseClicked(){
  console.log("mousePressed")
  if(gameState===2&&player1Ammo>0){
    player1Ammo--;
    console.log("mousePressed");
    shootingSound.play();
  }
}

