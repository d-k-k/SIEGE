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
    ent.width = 16;//How wide the entity is
    ent.height = 16;//How tall the entity is 
    ent.speed = 5;//movement speed
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
        if (ent.isAlive) {
            switch (this.moveDirection) {
                case 'left':
                    this.x += speed;
                break;
                case 'right':
                    this.x -= speed;
                break;
                case 'none':
                break;
                default:
                    console.log('Error unknown direction');
                break;
            } //end switch moveDirection

            //need to update visuals.
        };


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
    calls damage function of whatever entity is hit
    */
    ent.Deal = function (entityHit) {
        entityHit.Damage(damageValue);//calls damage function if whatever it hits
    }
    
    /**
    Move the bullet's x and y values to the given parameters

    centerXvalue - the x value of the center of the bullet
    centerXvalue - the Y value of the center of the bullet
    */
    ent.spawnAt = function (centerXvalue, centerYvalue) {
        ent.x = centerYvalue;
        ent.y = centerYvalue;
    };//takes parameters of where you want to spawn entity x

    return ent; //DONT FORGET THIS.

} // createBullet


/*
This will create bullet visuals.
*/
function createBulletVisual(ref) {
    ref.vGroup = new Konva.Group();

    ref.vSprite = new Konva.Sprite({
        x: -ref.width/2,
        y: -ref.height/2,
        image: allSpriteObjects['bullet']
    });
    ref.vGroup.add(ref.vSprite);

} //end createBulletVisual


