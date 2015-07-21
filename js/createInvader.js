





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

