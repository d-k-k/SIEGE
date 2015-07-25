/*
createEntity.js

nothing to be added

*/

/*---------------------------------------------------------------------------------------------------------
Don't call this directly. Creates an entity.
*/
function createEntity() {
	var ent = {};//this is the entity being created

	ent.x = -100;//the default x ordinance of entity (center of entity)
	ent.y = -100;//the defualt y ordinance of entity (center of entity)
	ent.width = -1;//How wide the entity is
	ent.height = -1;//How tall the entity is 
	ent.speed = -1;//movement speed
	ent.moveDirection = 'none';//direction the object will move in
	ent.hp = 1;//health points, For now everything will have 1 hp
	ent.type = "entity";//this names what sort of entity, such as player or bullet
	isAlive = true;//Are you still alive bro?

	/**
	moveUpdate is not implemented for entity.
	*/
	ent.moveUpdate = function () { console.log("Error entity move accessed."); };

	/**
	this gets the hitbox for the entity.

	returns a rect() the same size and position of the entity. 
	*/
	ent.getHitBox = function () {//based off the center point of the sprite image. Hit box should be around the sprite, not the sprite itself
		var rect = {};//create hit box object

		rect.x = this.x;//copy over dimensions and position
		rect.y = this.y;
		rect.width = this.width;
		rect.height = this.height;

		return rect;//return the hitbox object
	}; //end getHitBox

	/**
	this updates the hp with damage taken. Will set is alive to false and call death if hp drops to 0 or lower.

	amountOfDamageBeingTaken - the damage received
	*/
	ent.Damage = function (amountOfDamageBeingTaken) {
		var currentHp = ent.hp;//gets current hp
		currentHP = currentHp - amountOfDamageBeingTaken;//calculates damage
		if (currentHp == 0 || currentHp < 0) {//hp check
			ent.isAlive = false;//sets isAlive to false
			ent.Death();//call to the Death function 
		}
	};
	
	/**
	this updates isAlive variable to false. Stops movement and sets speed to 0. 
	Sprite removal will be unique to each type of entity.
	*/
	ent.Death = function () {
		ent.isAlive = false;//set isAlive to false
		ent.speed = 0;//set speed to 0
		ent.direction = "none";//set direction to none
		//remove sprite code here
	};
	
	/**
	spawnAt is not implemented for entity.
	*/
	ent.spawnAt = function () {console.log("Error entity spawnAt accessed."); };//takes parameters of where you want to spawn entity	


	/**
	Moves the visual group to the entity values.
	Should be called at the end of move update.
	*/
	ent.moveVisualsToCoordinates = function () {
		this.vGroup.x( this.x );
		this.vGroup.y( this.y );

	};


	return ent; //DONT FORGET THIS

} //end createEntity