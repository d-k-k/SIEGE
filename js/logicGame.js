/*---------------------------------------------------------
    logicGame()
*/

/* Updates everything needed in-game: entity movements, entity collision checks,
   On-Screen Visuals (score, time, etc.). */
function logicGame() {
    /* Updates movement for all entities */
    for(var i = 0; i < allEntities.length; i++) {
        allEntities[i].moveUpdate();
        
        /* Checks for overlap and triggers effects if true */
        for(var j = 0; j < allEntities.length; j++) {
            if(allEntities[i] == allEntities[j]) {
                continue; //continue loop if same entity
            }
            if(overlap(allEntities[i], allEntities[j])) {
                collisionEffects(allEntities[i], allEntities[j]);
            }
        } //end inner for
    } //end outer for
    
    onscreenVisuals();
} //end logicGame

/* Checks for individual object overlap */
function overlap(object1, object2)
{
    var hb1 = object1.getHitBox();
    var hb2 = object2.getHitBox();
    
    /* Checks the rectangle sides for overlap */
    if(hb1.x - hb1.width/2 - hb1.height/2 < hb2.x + hb2.width/2 + hb2.height/2 &&  
       hb1.x + hb1.width/2 + hb1.height/2 > hb2.x - hb2.width/2 - hb2.height/2 &&
       hb1.y - hb1.width/2 - hb1.height/2 < ((hb2.y - hb2.width/2) + hb2.height/2) && 
       ((hb1.y - hb1.width/2) + hb1.height/2) > hb2.y - hb2.width/2 - hb2.height/2) {
           return true;
       }
       else {
           return false;
       }
}
/* Updates all On-Screen Visuals, mainly the score counter and time countdown */	
function onscreenVisuals() {
/* TODO: updateTime(); 
         updatescore(); */;
} //end onscreenVisuals

function collisionEffects(object1, object2) {
    /* Checks if player is hit by any bullet or invader */
    if(object1.type == "player" && (object2.type == "invaderBullet" || object2.type == "invader" || object2.type == "playerBullet")) {
        object1.damage(1);
    }
    else if((object1.type == "invaderBullet" || object1.type == "invader" || object1.type == "playerBullet") && object2.type == "player") {
        object2.damage(1);
    }
    
    /* Checks player bullets with invaders */
    else if(object1.type == "invader" && object2.type == "playerBullet") {
        object1.damage(1);
    }
    else if(object1.type == "playerBullet" && object2.type == "invader") {
        object2.damage(1);
    }
    
    /* Checks for boss */
    else if(object1.type == boss && object2.type == playerBullet) {
        object1.damage(1);
    }
    else if(object1.type == playerBullet && object2.type == boss) {
        object2.damage(1);
    }
} //end collisionEffects
