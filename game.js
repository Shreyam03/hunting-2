class Game
{
    constructor()
    {

    }

    spawnBirds()
    {
     if(frameCount%100===0)
     {
            var bird=createSprite(0,random(150,400));
            bird.addAnimation("birdRunning",birdAnimation);
            bird.velocityX=5;
            birdsGroup.add(bird);
            // bird.debug = true;
            bird.setCollider("rectangle",-300,-70,150,60);
            bird.lifetime=1700/bird.velocityX;
     }
    }
    
     scoreCheck()
     {
        for(var i=0;i<birdsGroup.length;i++)
        {
            if(mousePressedOver(birdsGroup[i])&&player1Ammo>0)
            {
                birdsGroup[i].destroy();
                player1.score++;
                
            }
        
        }   
        if(birdsGroup.isTouching(player2))
        {
            for(var i = 0 ;i <birdsGroup.length;i++)
            {
                if(player2.isTouching(birdsGroup[i]) && keyWentDown("space") && player2Ammo>0)
                {
                    birdsGroup[i].destroy();
                    player2Score++;
                }
            }
        }

         

     }
     scoreDisplay()
     {
         fill("#3C387D");
         rect(30,height-120,300,100);
         rect(width-350,height-120,300,100);
         textSize(30);
         fill("yellow");
         textFont("tahoma");
         text(player1.name +": " +player1.score,80,height-70);
         text(player2.name +": " +player2Score,width-300,height-70);
     }
     playerControls()
     {
        player1.x=mouseX;
        player1.y=mouseY;
        if(keyDown('UP'))
        {
            player2.y = player2.y - 10;
        }
        else if(keyDown('DOWN'))
        {
            player2.y = player2.y + 10;
        }
        else if(keyDown('LEFT'))
        {
            player2.x = player2.x - 10;
        }
        else if(keyDown('RIGHT'))
        {
            player2.x = player2.x + 10;
        }
     }
     ammo(){
         for(var i=0;i<player1Ammo;i++){
             image(ammoImg,160+i*10,height-40,20,40)
         }
         for(var i=0;i<player2Ammo;i++){
            image(ammoImg,width-250+i*10,height-40,20,40)
        }
     }
     spawnAmmo(){
         if(frameCount%300===0){
             var ammo=createSprite(random(10,690),random(200,600))
             ammo.addImage(ammoImg);
             ammo.scale=0.1;
             ammo.velocityX=7;
             ammo.rotation=90;
             ammoGroup.add(ammo);
            //  ammo.debug= true;
             ammo.setCollider("rectangle",0,0,100,600);
             ammo.lifetime=1400/ammo.velocityX;
         }
     }
     getAmmo()
     {

         for(var i=0;i<=ammoGroup.length;i++)

         {
            if(mousePressedOver(ammoGroup[i]) &&player1Ammo>0)
            {
                    player1Ammo=player1Ammo+2;
                    ammoGroup[i].destroy();
            }
            
            
     
        }

        for(var i = 0 ; i <ammoGroup.length;i++)
        {
            if(player2.isTouching(ammoGroup[i]) && keyDown("space") && player2Ammo>0)
            {
                ammoGroup[i].destroy();
   
                player2Ammo = player2Ammo+2;
                    console.log("check , player2 ammo is " +player2Ammo);
            }
           
        }
    }



    end()
    {
        
        player1.score =0;
        player2Score = 0;
        background(bgImg);
        drawSprites();
        birdsGroup.setVelocityEach(0,0);
        ammoGroup.setVelocityEach(0,0);
        birdsGroup.setLifetimeEach(-1);
        ammoGroup.setLifetimeEach(-1);
    }
}
