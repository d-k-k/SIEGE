

function inputMenu() {

	inputMenuKeyboardBackup();
	inputMenuGamePad();



} //end inputMenu


function inputMenuKeyboardBackup() {

	if( keyboardKeys[13] === 'down' ) {
		prepAndSwitchToGame();
	}
}


function inputMenuGamePad() {

	//if enter key
	/*
	var gamepads = navigator.getGamepads();//gets all the gamepads
	
	for (var i = 0; i < gamepads.length; ++i)//loop through each gamepad
    {
		if(gamepads.length > 2) {//if there are more than 2 gamepads, break
			break;
		}
		
        var currentGamepad = gamepads[i];
		
        if (currentGamepad.buttons[0] === 1) {
			prepAndSwitchToGame();
		}
    } */
	
	var gamepads = navigator.getGamepads ? navigator.getGamepads() : (navigator.webkitGetGamepads ? navigator.webkitGetGamepads : []);
	//var gamepads = navigator.getGamepads();
	if (gamepads[0] == null) {
		return;
	}
	/*if (!gamepads || gamepads.length() > 2) {
		return;
	}*/
	var gp = gamepads[0];
	if (buttonPressed(gp.buttons[0])) {//down
		prepAndSwitchToGame();
	}
	/*if( keyboardKeys[13] === 'down' ) {
		prepAndSwitchToGame();
	}*/
	
}



