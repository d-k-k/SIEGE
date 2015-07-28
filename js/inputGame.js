

function inputGame() {

	inputGameKeyboardBackup();


} //end inputGame

function inputGameKeyboardBackup() {

	
	//w
	if(keyboardKeys[87] === 'down') { allPlayers[0].moveDirection = 'up'; }
	//s
	else if(keyboardKeys[83] === 'down') { allPlayers[0].moveDirection = 'down'; }
	else { allPlayers[0].moveDirection = 'none';}

	//i
	if(keyboardKeys[73] === 'down') { allPlayers[1].moveDirection = 'up'; }
	//k
	else if(keyboardKeys[75] === 'down') { allPlayers[1].moveDirection = 'down'; }
	else { allPlayers[1].moveDirection = 'none';}
	
	
	var gamepads = navigator.getGamepads ? navigator.getGamepads() : (navigator.webkitGetGamepads ? navigator.webkitGetGamepads : []);
	//var gamepads = navigator.getGamepads();
	if (!gamepads) {
		return;
	}
	var gp = gamepads[0];
	if(!gp) {
		return;
	}

	/*if (gp.axes[1] > 0.9) {//down
	allPlayers[0].moveDirection = 'down';
	} else if(gp.axes[1] < -0.9) {//up
		allPlayers[0].moveDirection = 'up';
	}
	else { allPlayers[0].moveDirection = 'none';}*/
	if (gp.axes[1] > .8) {//down
		allPlayers[0].moveDirection = 'down';
	} else if(gp.axes[1] < -.8) {//up
		allPlayers[0].moveDirection = 'up';
	}
	else { allPlayers[0].moveDirection = 'none';}
	
	if(gp.axes[3] > 0.8) {//right
		allPlayers[1].moveDirection = 'down';
	} else if(gp.axes[3] < -0.8) {//up
		allPlayers[1].moveDirection = 'up';
	}
	else { allPlayers[1].moveDirection = 'none';}
	
	
	//shooting
	if(buttonPressed(gp.buttons[0])) {
		allPlayers[0].shoot();
	}
	if(buttonPressed(gp.buttons[3])) {
		allPlayers[1].shoot();
	}
	
	

} //end inputGameKeyboardBackup

function buttonPressed(b) {
  if (typeof(b) == "object") {
    return b.pressed;
  }
  return b == 1.0;
}