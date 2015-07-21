
function createInvader(invadeType) {
	var ent = {};

	ent.x = -100;//the default x ordinance of entity
	ent.y = -100;//the default y ordinance of entity
	ent.width = -1;//Based on invader image given, to be changed later	
	ent.height = -1;//based on invader image given, to be changed later
	ent.speed = 5;//TBD: testing required?
	ent.moveDirection = 'none';//up down left right
	ent.hp = 1;//For now everything will have 1 hp
	ent.type = "invader";//
	isAlive = true;//invader is alive
	
	ent.invaderType = invadeType;//1 being normal, or 2 being suicide
	ent.collisionDamage = 1;//amount of damage dealt of collision
	ent.intervalShoot = 500;//minimum time between shots in ms
	ent.counterShoot = 0;//?
	ent.allBullets = [{}, {}, {}]; //?
	ent.maxShootsBullets = 3;//max number of bullets an invader has

	
	ent.moveUpdate = function () {//calls the invaderMoveAI or suicideInvaderAI to handle movement
		if(ent.invaderType == 1) {
			call invaderMoveAI.call(ent);
		}
		else if (ent.invaderType == 2) {
			call suicideInvaderAI.call(ent);
		}
	};
	
	ent.shoot = function () {//calls the shootingAI function to handle shots 
		call shootingAI.call(ent);
	};

	ent.getHitBox = function () {//based off the center point of the sprite image. Hit box should be around the sprite, not the sprite itself
		var rect = {};//create hit box object

		rect.x = this.x;//copy over dimensions and position
		rect.y = this.y;
		rect.width = this.width;
		rect.height = this.height;

		return rect;//return the hitbox object
	}; //end getHitBox

	ent.damage = function (amountOfDamageBeingTaken) {
		var currentHp = ent.hp;//gets current hp
		currentHp = currentHp - amountOfDamageBeingTaken;//calculates damage
		if (currentHp == 0 || currentHp < 0) {//hp check
			ent.isAlive = false;//sets isAlive to false
			ent.death();//call to the Death function 
		}
	};
	
	ent.death = function () {
		ent.isAlive = false;//set isAlive to false
		ent.speed = 0;//set speed to 0
		ent.direction = "none";//set direction to none
		if(ent.invaderType == 1) {//if the invader that was killed was a normal invader
			if(Math.random() < .15) {//and if it hits the 15% chance of spawning a suicide invader
				//spawn a suicide invader at its location
			}
		}
		//remove sprite code here
	};
	
	ent.spawnAt = function (centerXvalue, centerYvalue) {//spawns invaders at location
		ent.x = centerXvalue;
		ent.y = centerYvalue;
	};
	
	ent.dealCollisionDamage = function () {//currently the same as damage. (for future explosions)
		var currentHp = ent.hp;//gets current hp
		currentHp = currentHp - collisionDamage;//calculates damage
		if (currentHp == 0 || currentHp < 0) {//hp check
			ent.isAlive = false;//sets isAlive to false
			ent.death();//call to the Death function 
		}
	};

	
	return ent; //DONT FORGET THIS

}


/**
 *  AI for moving invaders.
 */
function invaderMoveAI() {
    var maxY = 0;
    var minY = 0;
    var alienHeight = alien[0].height;
    for (var i = 0; i < aliens.length; i++) {
        var alien = aliens[i];
        if (alien.isAlive === false) {
            continue;
        }
        alien.y += alien.height * alien.moveDirection;
        maxY = Math.max(maxY, alien.y);
        minY = Math.min(minY, alien.y);
    }
    if (maxY > (game.height - 10 - alienHeight/2) || minY < (10 + alienHeight/2) {
        for (var i = 0; i < aliens.length; i++) {
            if (alien.isAlive === false) {
                continue;
            }
            aliens[i].y += aliens[i].height * (aliens[i].direction * -1);
            if (aliens[i].x > game.width/2) {
                aliens[i].x += aliens[i].width;
            }
            if (aliens[i].x < game.width/2) {
                aliens[i].x -= aliens[i].width;
            }
        }
    }
}


/**
 *  AI for suicide invaders.
 */
function suicideInvaderAI() {

}


/**
 *  AI for controlling how the invaders will shoot.
 */
function shootingAI() {
    if (Math.random() < 0.5) {
        var shootingAlien = aliens[Math.round(Math.random() * (aliens.length - 1))];
        // shootingAlien has bullets
        if (shootingAlien) {
            // Spawn bullet
        }
    }
}

