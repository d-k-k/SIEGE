
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
var debugMu = false;
var debugLogicGame = false;
var debugPlayerCreate = true;


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
var cP1StartingY = cCanvasHeight/2 - cPlayerHeight/2;
var cP2StartingX = cCanvasWidth - 100 - cPlayerWidth;
var cP2StartingY = cCanvasHeight/2 - cPlayerHeight/2;
//invader globals to control spawn
var cInvSpawnHeightGap = cInvaderHeight/2; //basically shots get a half miss zone.
var cInvSpawnWidthGap = cInvaderWidth/2; 
var cInvRowSize = 5; //these numbers can and will be changed.
var cInvColSize = 5;
var cInvRightSpawnStartX = cCanvasWidth/2 + cInvaderWidth; //the right invader starts off 1 width away from the middle
var cInvRightSpawnStartY = cInvaderHeight;
var cInvLeftSpawnStartX = cInvRightSpawnStartX - (cInvaderHeight * 2) - ( cInvRowSize * (cInvaderHeight + cInvSpawnHeightGap));
var cInvLeftSpawnStartY = cInvRightSpawnStartY; //start them in the same formation, but would be better if they crossed.




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
var allEntities = [];
var leaderBoard = [ 
	            { 
	              name: 'aaa', 
                      score: 3  
		    }, 
                    { 
                      name: 'aaa', 
                      score: 2
                    }, 
                    { 
                      name: 'aaa', 
                      score: 1
                    } 
                  ];




//---------------------------------------------------------------------------------------------------------
//misc
var keyboardKeys	= {};





