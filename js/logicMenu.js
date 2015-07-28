/*---------------------------------------------------------
    logicMenu()
        
    prepandSwitchToGame()
*/

/* Everything done in input. */
function logicMenu() {

} //end logicMenu

/* Sets up the game */
function prepandSwitchToGame() {
    /* Spawns all invaders and players.
    for(int i = 0; i < allInvaders.length; i++) {
        //allInvaders[i].spawn();
    }
    for(int j = 0; j < allPlayers.length; j++) {
        allPlayers[j].spawn();
    } */
    
    /* Kills all bullets */
    for(int k = 0; k < allEntities.length; k++) {
        if(allEntities[k].type == "bullet") {
            allEntities[k].isAlive = false;
        }
    }
    placeScreenVisuals(allGameVisuals);
}
