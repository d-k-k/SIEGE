/*
createInvader.js

createInvader() 
-default width and height need to be updated
-default x and y need to be updated
-default speed is tentative
-Death() sprite removal needs to be added
-Death() suicider spawning needs to be added
*/

/*
creates an invader.

invadeType - this determines what sort of invader is created, i.e. suicide
*/
function createInvader(invadeType) {
	var ent = createEntity();//this is the invader being created

	ent.x = -100;//the default x ordinance of entity
	ent.y = -100;//the default y ordinance of entity
	ent.width = cInvaderWidth;//Based on invader image given, to be changed later	
	ent.height = cInvaderHeight;//based on invader image given, to be changed later
	ent.speed = 5;//TBD: testing required?
	ent.moveDirection = 'none';//up down left right
	ent.hp = 1;//For now everything will have 1 hp
	ent.type = "invader";//this names what sort of entity, such as player or bullet
	isAlive = true;//invader is alive
	
	ent.invaderType = invadeType;//1 being normal, or 2 being suicide
	ent.collisionDamage = 1;//amount of damage dealt of collision
	ent.intervalShoot = 500;//minimum time between shots in ms
	ent.counterShoot = 0;//amount of shots active
    //array containing this invader's bullets
	ent.allBullets = [createBullet(shootingDirection, ent.type), createBullet(shootingDirection, ent.type), createBullet(shootingDirection, ent.type)]; //?
	ent.maxShootsBullets = 3;//max number of bullets an invader may fire at once

	for(var i =0; i < ent.allBullets.length; i++) {
		ent.allBullets[i].type = 'invaderBullet';
	}

	
	ent.moveUpdate = function () {//calls the invaderMoveAI or suicideInvaderAI to handle movement
		if(this.invaderType == 1) {
			invaderMoveAI.call(ent);
		}
		else if (this.invaderType == 2) {
			suicideInvaderAI.call(ent);
		}
	};
	
	ent.shoot = function () {//calls the shootingAI function to handle shots 
		shootingAI.call(ent);
	};
	
    /**
    this updates isAlive variable to false. Stops movement and sets speed to 0. 
    Sprite removal needs to be added.
    */
	ent.death = function () {
		this.isAlive = false;//set isAlive to false
		this.speed = 0;//set speed to 0
		this.direction = "none";//set direction to none
		if(this.invaderType == 1) {//if the invader that was killed was a normal invader
			if(Math.random() < .15) {//and if it hits the 15% chance of spawning a suicide invader
				//spawn a suicide invader at its location
			}
		}
		//remove sprite code here
	};
	
    /**
    Move the bullet's x and y values to the given parameters. 
    Sets hp to 1, and isAlive to true.

    centerXvalue - the x value of the center of the bullet
    centerXvalue - the Y value of the center of the bullet
    */
    ent.spawnAt = function (centerXvalue, centerYvalue) {
        this.hp = 1;
        this.isAlive = true;
        this.x = centerYvalue;
        this.y = centerYvalue;
    };//takes parameters of where you want to spawn entity x
	
    /**
    calls damage function of whatever entity is hit
    */
	ent.dealCollisionDamage = function (entityHit) {
        entityHit.Damage(collisionDamage);//calls damage function if whatever it hits
    }

	
	return ent; //DONT FORGET THIS

}

// Create invader sprite and add it to group
function createInvaderVisual(ref){
	ref.vGroup = new Konva.Group();

	ref.vSprite = new Konva.Sprite({
		x: -ref.width/2,
		y: -ref.height/2,
		frameRate: 7,
		frameIndex: 0
	});

	ref.vGroup.add(ref.vSprite);

	/*
	It needs to rotate acording to which player it will attack

	ref.vGroup.rotate(90 or -90);
	
	*/


	if(ref.invaderType === 1){
		var animations = {
			idle: [
				0, 0, 64, 64,
				64, 0, 64, 64
			]
		};

		ref.vSprite.image(allSpriteObjects['enemy1']);
		ref.vSprite.animation = 'idle';
		ref.vSprite.animations = animations;
	}

	ref.vSprite.start();
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
    if (maxY > (game.height - 10 - alienHeight/2) || minY < (10 + alienHeight/2) ) {
        for (var i = 0; i < aliens.length; i++) {
            if (alien.isAlive === false) {
                continue;
            }
            aliens[i].moveDirection = aliens[i].moveDirection * -1;
            aliens[i].y += aliens[i].height * (aliens[i].moveDirection);
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

