
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
//final res 1535 x 860
var cCanvasWidth = 1535;  //only for testing on low res laptops.
var cCanvasHeight = 860;

var cPlayerWidth = 32;
var cPlayerHeight = 32;
var cBulletWidth = 16;
var cBulletHeight = 16;
var cInvaderWidth = 32;
var cInvaderHeight = 32;


//vars to dictate creation and placement.
var cP1StartingX = 100;
var cP1StartingY = cCanvasHeight/2 - cPlayerHeight/2;
var cP2StartingX = cCanvasWidth - 100;
var cP2StartingY = cCanvasHeight/2 - cPlayerHeight/2;
//invader globals to control spawn
var cInvSpawnHeightGap = cInvaderHeight/2; //basically shots get a half miss zone.
var cInvSpawnWidthGap = cInvaderWidth/2; 
var cInvRowSize = 9; //these numbers can and will be changed.
var cInvColSize = 5;
var cInvRightSpawnStartX = cCanvasWidth/2 + cInvaderWidth; //the right invader starts off 1 width away from the middle
var cInvRightSpawnStartY = 94;
var cInvLeftSpawnStartX = cCanvasWidth/2 - cInvaderWidth;
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
var allPlayers  = [];
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
//Result screen variables
var charPos1 = 65; //character position (cycling up/down through alphabet)
var charPos2 = 65; //A-Z, 65-90
var lockInCounter1 = 0; //checks for number of lock-ins for each player
var lockInCounter2 = 0; //when 3 for both, switch to menu
var p1name = "";
var p2name = "";
var waitingForInput1 = false; //is true if p1 has new high score and needs to enter name
var waitingForInput2 = false; //same for p2
var newScoreIndex1 = 0; //index of new score in leaderboard array
var newScoreIndex2 = 0;
var nextChar1 = false;
var nextChar2 = false;

//Keyboard variables 
var p1WKeyUp = false;
var p1SKeyUp = false;
var p1DKeyUp = false;
var p2IKeyUp = false;
var p2KKeyUp = false;
var p2JKeyUp = false;

var p1PadTopUp = false;
var p1PadBottomUp = false;

var cInvaderMoveDelayTime = 1000;
var invaderLastMoveTime = null;
var invaderLastShotTime = null;

var resultScreenVars = {};
resultScreenVars.lastTime = 0;
resultScreenVars.blinkCounter = 0;
resultScreenVars.blinkTime = 400;

var is2ndWaveAvailable = true;

//---------------------------------------------------------------------------------------------------------
//misc
var keyboardKeys  = {};



