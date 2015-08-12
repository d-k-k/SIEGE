

function inputGame() {

	inputGameKeyboardBackup();
	inputGameGamePad();


} //end inputGame

function inputGameGamePad() {

	var gamepads = navigator.getGamepads ? navigator.getGamepads() : (navigator.webkitGetGamepads ? navigator.webkitGetGamepads : []);
	//var gamepads = navigator.getGamepads();
	if (!gamepads) {
		return;
	}
	var gp = gamepads[0];
	var gp2 = gamepads[1];
	if(!gp || !gp2) {
		return;
	}

	/*if (gp.axes[1] > 0.9) {//down
	allPlayers[0].moveDirection = 'down';
	} else if(gp.axes[1] < -0.9) {//up
		allPlayers[0].moveDirection = 'up';
	}
	else { allPlayers[0].moveDirection = 'none';}*/
	if (gp.axes[1] > .9 || gp.axes[0] > .9) {//down
		allPlayers[0].moveDirection = 'down';
	} else if(gp.axes[1] < -.9 || gp.axes[0] < -.9) {//up
		allPlayers[0].moveDirection = 'up';
	}
	else { allPlayers[0].moveDirection = 'none';}
	
	if(gp2.axes[1] > 0.9 || gp2.axes[0] < -.9) {//right
		allPlayers[1].moveDirection = 'down';
	} else if(gp2.axes[1] < -0.9 || gp2.axes[0] > .9) {//up
		allPlayers[1].moveDirection = 'up';
	}
	else { allPlayers[1].moveDirection = 'none';}
	
	
	//shooting
	if(buttonPressed(gp.buttons[0])) {
		allPlayers[0].shoot();
	}
	if(buttonPressed(gp2.buttons[0])) {
		allPlayers[1].shoot();
	}
	
}

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

	//D
	if(keyboardKeys[68] === 'down') { allPlayers[0].shoot(); console.log('shoot from left player'); }
	//J
	if(keyboardKeys[74] === 'down') { allPlayers[1].shoot(); console.log('shoot from right player'); }
	
	
	

} //end inputGameKeyboardBackup

function buttonPressed(b) {
  if (typeof(b) == "object") {
    return b.pressed;
  }
  return b == 1.0;
}