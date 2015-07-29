

/*
This should be the first function to activate.

*/
function main() {
	keyboardBinder(); //backup for testing without gc. see bottom of file for description on usage.

	setupKonvaCanvas(); //create the canvas
	setupSpriteImageObjects(); //start loading all necessary image files.
	setupMenuVisuals();
	setupGameVisuals();
	setupResultVisuals();

	placeScreenVisuals( allMenuVisuals ); //display menu visuals

	gameState = gsMenu;
	setInterval(mainUpdater, cMainUpdaterInterval); //start the main update

} //end main


/*
This is the update loop.
*/
function mainUpdater() {

	if(debugMu) { console.log('spam'); } //for sanity checking that the update loop works

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
/*
This puts an event listener onto the document for any keydown/up.
Global var keyboardKeys is an object.
The array like access allows creation of variable location if it doens't exist.
So basically, if null, then the key hasn't been touched.
Otherwise it will contain down or up.
Key value is checked through the keycode.

https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/keyCode

*/
function keyboardBinder() {
	document.addEventListener('keydown', handleKeyDown);
	document.addEventListener('keyup', handleKeyUp);
}
function handleKeyDown(event) { keyboardKeys[event.keyCode] = 'down'; }
function handleKeyUp(event) { keyboardKeys[event.keyCode] = 'up'; }

