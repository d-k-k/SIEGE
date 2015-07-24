/*
createPlayer.js

createPlayer() 
-default width and height need to be updated
-default x and y need to be updated
-default speed is tentative
-Death() sprite removal needs to be added
-moveUpdate() visuals need to be added
*/

/*
creates a player.

shooting direction - this determines which way the play shoots
*/
function createPlayer(shootingDirection) {
	var ent = createEntity();

	ent.x = -100;//the default x ordinance of entity
	ent.y = -100;//the defualt y ordinance of entity
	ent.width = -1;//How wide the entity is
	ent.height = -1;//How tall the entity is 
	ent.speed = 5;//movement speed
	ent.hp = 1;//For now everything will have 1 hp
	ent.type = "player";//this names what sort of entity, such as player or bullet
	ent.shootingDirection = shootingDirection;
	ent.moveDirection = 'none';//up & down?
	isAlive = true;//Are you still alive bro?
<<<<<<< HEAD
	ent.intervalShoot = 500; //milliseconds between shots
	ent.counterShoot = 0;//amount of shots active
	ent.speed = 3;//speed of movement
	ent.maxShootBullets = 1;//max number of bullets a player may fire at once
	//array containing this players bullets
=======
	ent.intervalShoot = 500; //milliseconds
	ent.counterShoot = 0;
	ent.speed = 3;
	ent.maxShootBullets = 1;

	createPlayerVisual( ent );

>>>>>>> origin/master
	ent.allBullets = [createBullet(shootingDirection, ent.type), createBullet(shootingDirection, ent.type), createBullet(shootingDirection, ent.type)];

	/**
	used to shoot bullets.
	*/
	ent.shoot = function () {
		//if the player is allowed to shoot more shots
		if (ent.counterShoot < ent.maxShootBullets) {
			//find an avaiable bullet, one where isAlive is false
			for (var i = 0; i < ent.allBullets.length; i++) {
				if(ent.allBullets[i].isAlive) {
				//will do nothing if the found bullet isAlive
				} else if (ent.shootingDirection == "right") {//spawns bullet fir left player
					ent.allBullets[i].isAlive = true;
					ent.allBullets[i].spawnAt(ent.x + width/2 + 1, ent.y);
					counterShoot++;
				} else if (ent.shootingDirection == "left") {//spawns bullet for right player
					ent.allBullets[i].isAlive = true;
					ent.allBullets[i].spawnAt(ent.x - width/2 - 1, ent.y);
					counterShoot++;
				};
			};
		};
	}
	/**
	controls movement for the player
	*/
	ent.moveUpdate = function () {
		switch (this.moveDirection) {

			case 'up':
				this.y -= speed;
			break;
			case 'down':
				this.y += speed;
			break;
			case 'none':
			break;
			default:
				console.log('Error unknown direction');
			break;
		} //end switch moveDirection


		//need to update visuals.


	} //end moveUpdate

	/**
	this updates isAlive variable to false. Stops movement and sets speed to 0. 
	Sprite removal needs to be added.
	*/
	ent.Death = function () {
		ent.isAlive = false;//set isAlive to false
		ent.speed = 0;//set speed to 0
		ent.direction = "none";//set direction to none
		//remove sprite code here
	};

    /**
    Move the player's x and y values to the given parameters

    centerXvalue - the x value of the center of the player
    centerXvalue - the Y value of the center of the player
    */
	ent.spawnAt = function (centerXvalue, centerYvalue) {
		ent.x = centerYvalue;
		ent.y = centerYvalue;
	};//takes parameters of where you want to spawn entity	

	return ent; //DONT FORGET THIS

} //end createPlayer


// Create player sprite and add it to group
function createPlayerVisual(ref) {
	ref.vGroup = new Konva.Group();

	ref.vSprite = new Konva.Sprite({
		x: -ref.width/2,
		y: -ref.height/2
	});

	ref.vGroup.add(ref.vSprite);

	if(ref.shootingDirection === 'left') {
		ref.vSprite.image = allSpriteObjects['player2'];
		ref.vGroup.rotate(90);
	}else{
		ref.vSprite.image = allSpriteObjects['player1'];
		ref.vGroup.rotate(-90);
	}
} //end createPlayerVisual









