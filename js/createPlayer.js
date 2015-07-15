
/*---------------------------------------------------------------------------------------------------------
Creates a player game object
*/
function createPlayer() {
	var ent = createEntity();

	ent.intervalShoot = 500; //milliseconds
	ent.counterShoot = 0;
	ent.speed = 3;

	ent.moveUpdate = function() {
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
} //end createPlayer

