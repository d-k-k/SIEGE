function createBullet(shootingDirection, Owner) {
    var ent = createEntity();

    ent.x = -100;//the default x ordinance of entity
    ent.y = -100;//the defualt y ordinance of entity
    ent.width = -1;//How wide the entity is
    ent.height = -1;//How tall the entity is 
    ent.speed = -1;//movement speed
    ent.moveDirection = shootingDirection;
    ent.hp = 1;//For now everything will have 1 hp
    ent.type = "bullet";//
    ent.Owner = Owner; //either player or invader
    ent.damageValue = 1;
    isAlive = false;//Are you still alive bro?

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
    
    ent.Death = function () {
        ent.isAlive = false;//set isAlive to false
        ent.speed = 0;//set speed to 0
        ent.direction = "none";//set direction to none
        //remove sprite code here
    };

    ent.Deal = function (entityHit) {
        entityHit.Damage(damageValue);//calls damage function if whatever it hits
    }
    
    ent.spawnAt = function (centerXvalue, centerYvalue) {
        ent.x = centerYvalue;
        ent.y = centerYvalue;
    };//takes parameters of where you want to spawn entity x

}