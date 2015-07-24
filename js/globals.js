
/*
This file should contain any variables needed that doesn't get created within a funciton.

Types of globals by section:
debug - should be used to control any console output that isn't an error message.
		error messages should ALWAYS print.

contants - prefixed with lower case c, their value should not change throughout runtime.

gameState - controls program flow though the switchi in mainUpdater()

Canvas related - any variables that deals with canvas / Konva

data structures - all varibles to hold game objects like entities.

misc - everything else


*/





//---------------------------------------------------------------------------------------------------------
//Debug
//If this goes false, the only console output should be error.
//Do include more specific forms of debug checks to help segregate output.

//Example: if(debug) {console.log( 'spam' );}
var debug = true;
var debugMu = true;


//---------------------------------------------------------------------------------------------------------
//Constants - they shouldn't be changed during runtime.
//Note: constants prefixed with lowercase 'c'. Why? Cuz autocomplete.

var cMainUpdaterInterval = 10; //should be in ms
var cCanvasWidth = 800;  //only for testing on low res laptops.
var cCanvasHeight = 600;

var cPlayerWidth = 64;
var cPlayerHeight = 64;
var cBulletWidth = 16;
var cBulletHeight = 16;
var cInvaderWidth = 64;
var cInvaderHeight = 64;


//vars to dictate creation and placement.
var cP1StartingX = 100;
var cP1StartingY = cCanvasHeight/2;
var cP2StartingX = 100;
var cP2StartingY = cCanvasHeight/2;




//---------------------------------------------------------------------------------------------------------
// Game state related values

var gameState = -1; //error default
var gsMenu = 'gsMenu';
var gsGame = 'gsGame';
var gsResult = 'gsResult';  //does js have enums? or maybe make a class with variable names... but no way to access the names.


//---------------------------------------------------------------------------------------------------------
// Canvas related
var stage		= null;
var backLayer	= null;
var midLayer	= null;
var frontLayer 	= null;

var allMenuVisuals = null;
var allGameVisuals = null;
var allResultVisuals = null;

var allSpriteObjects = null;



//---------------------------------------------------------------------------------------------------------
//data structures
var allPlayers 	= [];
var allInvaders = [];




//---------------------------------------------------------------------------------------------------------
//misc
var keyboardKeys	= {};





