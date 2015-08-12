/*
createBullet.js

createBullet() 
-default width and height need to be updated
-default x and y need to be updated
-default speed is tentative
-Death() sprite removal needs to be added
-moveUpdate() visuals need to be added


*/

/*
creates a bullet.

shooting direction - this determines which way the bullet moves
Owner - determines what type of bullet, i.e. player or invader
*/
function createBullet(shootingDirection, Owner) {
    var ent = createEntity();

    ent.x = -100;//the default x ordinance of entity
    ent.y = -100;//the defualt y ordinance of entity
    ent.width = cBulletWidth;//How wide the entity is
    ent.height = cBulletHeight;//How tall the entity is 
    ent.speed = 20;//movement speed
    ent.moveDirection = shootingDirection;//this determines which way the bullet moves
    ent.hp = 1;//For now everything will have 1 hp
    ent.type = "bullet";//this names what sort of entity, such as player or bullet
    ent.Owner = Owner; //either player or invader
    ent.damageValue = 1;
    isAlive = false;//bullets are default not alive

    createBulletVisual( ent );

    /**
    controls movement for the player
    */
    ent.moveUpdate = function () {
        if (this.isAlive)  {
            switch (this.moveDirection) {
                case 'left':
                    this.x -= this.speed;
                break;
                case 'right':
                    this.x += this.speed;
                break;
                case 'none':
                break;
                default:
                    console.log('Error unknown direction');
                break;
            } //end switch moveDirection

			if(this.x < -20 || this.x > (cCanvasWidth + 20)){
				this.spawnAt(-100,-100);
				this.isAlive = false;
			}
            //need to update visuals.
        };

        this.moveVisualsToCoordinates();

        //console.log('spam move bullet');

    } //end moveUpdate
    
    /**
    this updates isAlive variable to false. Stops movement and sets speed to 0. 
    Sprite removal needs to be added.
    */
    ent.death = function () {
        this.isAlive = false;//set isAlive to false
        //this.speed = 0;//set speed to 0
        this.direction = "none";//set direction to none
        //remove sprite code here
        this.x = -100;
        this.y = -100;
        this.moveVisualsToCoordinates();
    };

    /**
    calls damage function of whatever entity is hit
    */
    ent.deal = function (entityHit) {
        entityHit.Damage(damageValue);//calls damage function if whatever it hits
    }
    
    /**
    Move the bullet's x and y values to the given parameters. 
    Sets hp to 1, and isAlive to true.

    centerXvalue - the x value of the center of the bullet
    centerXvalue - the Y value of the center of the bullet
    */
    ent.spawnAt = function (centerXvalue, centerYvalue) {
        this.hp = 1;
        this.isAlive = true;
        this.x = centerXvalue;
        this.y = centerYvalue;
    };//takes parameters of where you want to spawn entity x

    return ent; //DONT FORGET THIS.

} // createBullet


/*
This will create bullet visuals.

Only called within this file.
*/
function createBulletVisual(ref) {
    ref.vGroup = new Konva.Group();

    ref.vSprite = new Konva.Sprite({
        x: -ref.width/2,
        y: -ref.height/2,
        image: allSpriteObjects['bullet'],
        width: cBulletWidth,
        height: cBulletHeight,
        animation: 'idle',
        animations: {
            idle: [
                0,0,ref.width,ref.height
            ]
        },
        frameRate: 1,
        frameIndex: 0
    });
    ref.vGroup.add(ref.vSprite);
    ref.vSprite.start();

} //end createBulletVisual


