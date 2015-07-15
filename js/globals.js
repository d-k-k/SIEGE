

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


//---------------------------------------------------------------------------------------------------------
// Game state related values

var gameState = -1; //error default
var gsMenu = 'gsMenu';
var gsGame = 'gsGame';
var gsResult = 'gsResult';  //does js have enums? or maybe make a class with variable names... but no way to access the names.


//---------------------------------------------------------------------------------------------------------

//---------------------------------------------------------------------------------------------------------
