

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
	var gp2 = gamepads[1];
	
	
	for (var i = 0 ; i < gp.buttons.length ; i++) {
		if (buttonPressed(gp.buttons[i])) {
			for (var j = 0 ; j < gp2.buttons.length ; j++) {
				if (buttonPressed(gp2.buttons[j])) {
					prepAndSwitchToGame();
				}
			}
		}
	}
	
	/*if (buttonPressed(gp.buttons[0]) && buttonPressed(gp2.buttons[0])) {//down
		prepAndSwitchToGame();
	}
	/*
	if( keyboardKeys[13] === 'down' ) {
		prepAndSwitchToGame();
	}*/
	
}



