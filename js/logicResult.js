/*---------------------------------------------------------
    logicResult()
*/

/* Checks for conditions to switch back to the menu */
function logicResult() {
    /* Check if name is entered, if so switch to menu */
    if(nameEntered) { 
        prepandSwitchToMenu();
    }
} //end logicResult

/* Changes the game state and sets up the visuals for the menu */
function prepandSwitchToMenu() {
        gameState = gsMenu;
        setupMenuVisuals();
}
