
/*---------------------------------------------------------------------------------------------------------
Creates a player game object
*/
function createPlayer(shootingDirection) {
	var ent = createEntity();

	ent.x = -100;//the default x ordinance of entity
	ent.y = -100;//the defualt y ordinance of entity
	ent.width = -1;//How wide the entity is
	ent.height = -1;//How tall the entity is 
	ent.speed = -1;//movement speed
	ent.hp = 1;//For now everything will have 1 hp
	ent.type = "player";
	ent.shootingDirection = shootingDirection;
	ent.moveDirection = 'none';
	isAlive = true;//Are you still alive bro?
	ent.intervalShoot = 500; //milliseconds
	ent.counterShoot = 0;
	ent.speed = 3;
	ent.maxShootBullets = 1;

	ent.allBullets = [createBullet(shootingDirection, ent.type), createBullet(shootingDirection, ent.type), createBullet(shootingDirection, ent.type)];

	ent.shoot = function () {
		if (ent.counterShoot < ent.maxShootBullets) {
			for (var i = 0; i < ent.allBullets.length; i++) {
				if(ent.allBullets[i].isAlive) {
					break;
				} else if (ent.shootingDirection == "right") {
					ent.allBullets[i].isAlive = true;
					ent.allBullets[i].spawnAt(ent.x + (1/2)width + 1, ent.y);
					counterShoot++;
				} else if (ent.shootingDirection == "left") {
					ent.allBullets[i].isAlive = true;
					ent.allBullets[i].spawnAt(ent.x - (1/2)width - 1, ent.y);
					counterShoot++;
				};
			};
		};
	}

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

	ent.Death = function () {
		ent.isAlive = false;//set isAlive to false
		ent.speed = 0;//set speed to 0
		ent.direction = "none";//set direction to none
		//remove sprite code here
	};

	ent.getHitBox = function () {//based off the center point of the sprite image. Hit box should be around the sprite, not the sprite itself
		var rect = {};//create hit box object

		rect.x = this.x;//copy over dimensions and position
		rect.y = this.y;
		rect.width = this.width;
		rect.height = this.height;

		return rect;//return the hitbox object
	}; //end getHitBox

	ent.Damage = function (amountOfDamageBeingTaken) {
		var currentHp = ent.hp;//gets current hp
		currentHP = currentHp - amountOfDamageBeingTaken;//calculates damage
		if (currentHp == 0 || currentHp < 0) {//hp check
			ent.isAlive = false;//sets isAlive to false
			ent.Death();//call to the Death function 
		}
	};
	
	ent.spawnAt = function (centerXvalue, centerYvalue) {
		ent.x = centerYvalue;
		ent.y = centerYvalue;
	};//takes parameters of where you want to spawn entity	

	return ent; //DONT FORGET THIS

} //end createPlayer



