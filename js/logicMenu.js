/*---------------------------------------------------------

    logicMenu()

    prepandSwitchToMenu()

*/

function logicMenu() {
	
} //end logicMenu

/* Draws visuals for the menu and changes gamestate */
function prepandSwitchToMenu() {
    
    placeScreenVisuals( allMenuVisuals );
    gameState = gsMenu;
    updateTheHighScoresToBeDisplayed();
    
} //end prepandSwitchToMenu



/**
Updates the scores before a switch
*/

function updateTheHighScoresToBeDisplayed() {
	allMenuVisuals.midLayer.topScore1.text( leaderBoard[0].name + ' - ' + leaderBoard[0].score );
	allMenuVisuals.midLayer.topScore2.text( leaderBoard[1].name + ' - ' + leaderBoard[1].score );
	allMenuVisuals.midLayer.topScore3.text( leaderBoard[2].name + ' - ' + leaderBoard[2].score );


} //updateTheHighScoresToBeDisplayed