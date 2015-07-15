


/*
This should be the first function to activate.

*/
function main() {


	gameState = gsMenu;
	setInterval(mainUpdater, cMainUpdaterInterval);

} //end main


/*
This is the update loop.
*/
function mainUpdater() {

	if(debugMu) { console.log('spam'); }

	switch(gameState) {
		case gsMenu:
			inputMenu();
			logicMenu();
			break;
		case gsGame:
			inputGame();
			logicGame();
			break;
		case gsResult:
			inputResult();
			logicResult();
			break;
		default:
			console.log('Error: unknown game state:' + gameState);
			break;
	}
} //end mainUpdater