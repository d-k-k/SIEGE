function logicGame() 
{
  player1Update();
	player2Update();
	invadersUpdate();
	onscreenVisuals();
	collisionEffects();
} //end logicGame

function player1Update()
{
    /* Move checks */
    if(player1.leftKeyDown)
    {
        player1.moveUpdate(left);
    }
    if(player1.rightKeyDown)
    {
        player1.moveUpdate(right);
    }

    /* Shot checks */
    if(player1.isShooting)
    {
        if(player1.bulletCount < 3)
        {
            player1.shoot();
        }
        player1.isShooting == false;
    }
        
    /* Hit checks */
    if(player1.isHit)
    {
        if(player1.hasShield)
        {
            player1.hasShield = false;
        }
        else 
        {
            player1.death();
            gameState = gsResult;
        }
    }
}

function player2Update()
{
    /* Move checks */
    if(player2.leftKeyDown)
    {
        player2.moveUpdate(left);
    }
    if(player2.rightKeyDown)
    {
        player2.moveUpdate(right);
    }
    
    /* Shot checks */
    if(player2.isShooting)
    {
        if(player2.bulletCount < 3)
        {
            player2.shoot();
        }
        player2.isShooting == false;
    }
        
    /* Hit checks */
    if(player2.isHit)
    {
        if(player2.hasShield)
        {
            player2.hasShield = false;
        }
        else 
        {
            player2.death();
            gameState = gsResult;
        }
    }
}

function invadersUpdate()
{
//  TODO: move - complex, bulletmove, shoot
}
	
function onscreenVisuals()
{
//  TODO: main draw call
    updateTime();
    updatescore();
}

function collisionEffects(object1, object2)
{
    /* Checks if player is hit by any bullet or invader */
    if(object1.type == "player" && (object2.type == "invaderBullet" || object2.type == "invader" || object2.type == "playerBullet"))
    {
        object1.isHit = true;
        //explosions and stuff
    }
    else if((object1.type == "invaderBullet" || object1.type == "invader" || object1.type == "playerBullet") && object2.type == "player")
    {
        object2.isHit = true;
        //explosions and stuff
    }
    
    /* Checks player bullets with invaders */
    else if(object1.type == "invader" && object2.type == "playerBullet") 
    {
        object1.isHit = true;
        //explosions and stuff
    }
    else if(object1.type == "playerBullet" && object2.type == "invader")
    {
        object2.isHit = true;
        //explosions and stuff
    }
    
    /* Checks player bullets with other players */
    else if(object1.type == "player" && object2.type == "playerBullet")
    {
        object1.isHit = true;
        //explosions and stuff
    }
    else if(object1.type == "playerBullet" && object2.type == "player")
    {
        object2.isHit = true;
        //explosions and stuff
    }
