function logicGame() {
    player1Update();
    player2Update();
    invadersUpdate();
    onscreenVisuals();
} //end logicGame

function player1Update() {
    /* Move checks */
    if(player1.leftKeyDown) {
        player1.moveUpdate(left);
    }
    if(player1.rightKeyDown) {
        player1.moveUpdate(right);
    }

    /* Shot checks */
    if(player1.isShooting) {
        if(player1.bulletCount < 3) {
            player1.shoot();
        }
        player1.isShooting == false;
    }
        
    /* Collision Detection */
    if(player1.getHitBox() /* .overlaps?? */ ) {
        collisionEffects(player1, someObject);
    }
}

function player2Update() {
    /* Move checks */
    if(player2.leftKeyDown) {
        player2.moveUpdate(left);
    }
    if(player2.rightKeyDown) {
        player2.moveUpdate(right);
    }
    
    /* Shot checks */
    if(player2.isShooting) {
        if(player2.bulletCount < 3) {
            player2.shoot();
        }
        player2.isShooting == false;
    }
        
    /* Collision Detection */
    if(player1.getHitBox() /* .overlaps?? */ ) {
        collisionEffects(player1, someObject);
    }
}

function invadersUpdate() {
//  TODO: move - complex, bulletmove, shoot
}
	
function onscreenVisuals() {
//  TODO: main draw call
    updateTime();
    updatescore();
}

function collisionEffects(object1, object2) {
    /* Checks if player is hit by any bullet or invader */
    if(object1.type == "player" && (object2.type == "invaderBullet" || object2.type == "invader" || object2.type == "playerBullet")) {
        if(player1.hasShield) {
            player1.hasShield = false;
        }
        else {
            player1.death();
            gameState = gsResult;
        }
        //TODO: Death animation
    }
    else if((object1.type == "invaderBullet" || object1.type == "invader" || object1.type == "playerBullet") && object2.type == "player") {
        if(object1.hasShield) {
            object1.hasShield = false;
        }
        else {
            object1.death();
            gameState = gsResult;
        }
        //TODO: Death animation
    }
    
    /* Checks player bullets with invaders */
    else if(object1.type == "invader" && object2.type == "playerBullet") {
        object1.death();
        //TODO: Death animation
    }
    else if(object1.type == "playerBullet" && object2.type == "invader") {
        object2.death();
        //TODO: Death animation
    }
    
    /* Checks for boss */
    else if(object1.type == boss && object2.type == playerBullet) {
        object1.damage();
        if(object1.health == 0) {
            object1.death(); //this could be in context of boss parts too
            //TODO: Death animation
        }
    }
    else if(object1.type == playerBullet && object2.type == boss) {
        object2.damage();
        if(object2.health == 0) {
            object2.death(); //see above
            //TODO: Death animation
        }
    }
}
