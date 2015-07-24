


/*
This should be the first function to activate.

*/
function main() {
	keyboardBinder();

	setupKonvaCanvas();

	setupSpriteImageObjects();

	setupMenuVisuals();
	setupGameVisuals();

	placeScreenVisuals( allMenuVisuals );

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
	stage.draw();
} //end mainUpdater





//------------------------------------------------------------------------------------------------------
function keyboardBinder() {
	document.addEventListener('keydown', handleKeyDown);
	document.addEventListener('keyup', handleKeyUp);
}
function handleKeyDown(event) { keyboardKeys[event.keyCode] = 'down'; }
function handleKeyUp(event) { keyboardKeys[event.keyCode] = 'up'; }

