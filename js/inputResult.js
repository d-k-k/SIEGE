

function inputResult() {

	//w
	if(keyboardKeys[87] === 'down') { 
		if(p1WKeyUp) {
			if(charPos1 == 90) {
				charPos1 = 65;
			}
			else {
				charPos1++;
			}
			console.log("P1: Cycle up");
		}
		p1WKeyUp = false;
	}
	else {
		p1WKeyUp = true;
	}
	
	//s
	if(keyboardKeys[83] === 'down') { 
		if(p1SKeyUp) {
			if(charPos1 == 65) {
				charPos1 = 90;
			}
			else {
				charPos1--;
			}
			console.log("P1: Cycle down");
		}
		p1SKeyUp = false;
	}
	else {
		p1SKeyUp = true;
	}

	if(lockInCounter1 === 0){ allResultVisuals.midLayer.p1c1.text( String.fromCharCode(charPos1) );}
	if(lockInCounter1 === 1){ allResultVisuals.midLayer.p1c2.text( String.fromCharCode(charPos1) );}
	if(lockInCounter1 === 2){ allResultVisuals.midLayer.p1c3.text( String.fromCharCode(charPos1) );}


	//i
	if(keyboardKeys[73] === 'down') { 
		if(p2IKeyUp) {
			if(charPos2 == 90) {
				charPos2 = 65;
			}
			else {
				charPos2++;
			}
			console.log("P2: Cycle up");
		}
		p2IKeyUp = false;
	}
	else {
		p2IKeyUp = true;
	}
	
	//k
	if(keyboardKeys[75] === 'down') { 
		if(p2KKeyUp) {
			if(charPos2 == 65) {
				charPos2 = 90;
			}
			else {
				charPos2--;
			}
			console.log("P2: Cycle down");
		}
		p2KKeyUp = false;
	}
	else {
		p2KKeyUp = true;
	}


	if(lockInCounter2 == 0){ allResultVisuals.midLayer.p2c1.text( String.fromCharCode(charPos2) );}
	if(lockInCounter2 == 1){ allResultVisuals.midLayer.p2c2.text( String.fromCharCode(charPos2) );}
	if(lockInCounter2 == 2){ allResultVisuals.midLayer.p2c3.text( String.fromCharCode(charPos2) );}
	
	//D
	if(keyboardKeys[68] === 'down') { 
		if(p1DKeyUp) {
			lockInCounter1++;
			nextChar1 = true;
			//console.log("P1: Locking in with value:" + lockInCounter1);
			if(lockInCounter1 === 0){ allResultVisuals.frontLayer.p1block.x( allResultVisuals.midLayer.p1c1.x() );}
			if(lockInCounter1 === 1){ allResultVisuals.frontLayer.p1block.x( allResultVisuals.midLayer.p1c2.x() );}
			if(lockInCounter1 === 2){ allResultVisuals.frontLayer.p1block.x( allResultVisuals.midLayer.p1c3.x() );}
			if(lockInCounter1 >= 3){ allResultVisuals.frontLayer.p1block.x( -100 );}
			charPos1 = 65;
		}
		p1DKeyUp = false;
	}
	else {
		p1DKeyUp = true;
	}
	
	//J
	if(keyboardKeys[74] === 'down') { 
		if(p2JKeyUp) {
			lockInCounter2++;
			nextChar2 = true;
			//console.log("P2: Locking in with value:" + lockInCounter2); 
			if(lockInCounter2 === 0){ allResultVisuals.frontLayer.p2block.x( allResultVisuals.midLayer.p2c1.x() );}
			if(lockInCounter2 === 1){ allResultVisuals.frontLayer.p2block.x( allResultVisuals.midLayer.p2c2.x() );}
			if(lockInCounter2 === 2){ allResultVisuals.frontLayer.p2block.x( allResultVisuals.midLayer.p2c3.x() );}
			if(lockInCounter2 >= 3){ allResultVisuals.frontLayer.p2block.x( -100 );}
			charPos2 = 65;
		}
		p2JKeyUp = false;
	}
	else {
		p2JKeyUp = true;
	}
	
	//GAMEPADINPUT@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
	
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
	
	if(buttonPressed(gp.buttons[12])) { 
		if(p1PadTopUp) {
			if(charPos1 == 90) {
				charPos1 = 65;
			}
			else {
				charPos1++;
			}
			console.log("P1: Cycle up");
		}
		p1PadTopUp = false;
	}
	else {
		p1PadTopUp = true;
	}
	
	
	//s
	if(buttonPressed(gp.buttons[13])) { 
		if(p1PadBottomUp) {
			if(charPos1 == 65) {
				charPos1 = 90;
			}
			else {
				charPos1--;
			}
		}
		p1PadBottomUp = false;
	}
	else {
		p1PadBottomUp = true;
	}
	

	if(lockInCounter1 === 0){ allResultVisuals.midLayer.p1c1.text( String.fromCharCode(charPos1) );}
	if(lockInCounter1 === 1){ allResultVisuals.midLayer.p1c2.text( String.fromCharCode(charPos1) );}
	if(lockInCounter1 === 2){ allResultVisuals.midLayer.p1c3.text( String.fromCharCode(charPos1) );}


	//i
	if(buttonPressed(gp2.buttons[12])) { 
		if(p2PadTopUp) {
			if(charPos2 == 90) {
				charPos2 = 65;
			}
			else {
				charPos2++;
			}
			console.log("P1: Cycle up");
		}
		p2PadTopUp = false;
	}
	else {
		p2PadTopUp = true;
	}
	
	
	//s
	if(buttonPressed(gp2.buttons[13])) { 
		if(p2PadBottomUp) {
			if(charPos2 == 65) {
				charPos2 = 90;
			}
			else {
				charPos2--;
			}
		}
		p2PadBottomUp = false;
	}
	else {
		p2PadBottomUp = true;
	}


	if(lockInCounter2 == 0){ allResultVisuals.midLayer.p2c1.text( String.fromCharCode(charPos2) );}
	if(lockInCounter2 == 1){ allResultVisuals.midLayer.p2c2.text( String.fromCharCode(charPos2) );}
	if(lockInCounter2 == 2){ allResultVisuals.midLayer.p2c3.text( String.fromCharCode(charPos2) );}
	
	//D
	if(buttonPressed(gp.buttons[1])) { 
		if(p1AButtonUp) {
			lockInCounter1++;
			nextChar1 = true;
			//console.log("P1: Locking in with value:" + lockInCounter1);
			if(lockInCounter1 === 0){ allResultVisuals.frontLayer.p1block.x( allResultVisuals.midLayer.p1c1.x() );}
			if(lockInCounter1 === 1){ allResultVisuals.frontLayer.p1block.x( allResultVisuals.midLayer.p1c2.x() );}
			if(lockInCounter1 === 2){ allResultVisuals.frontLayer.p1block.x( allResultVisuals.midLayer.p1c3.x() );}
			if(lockInCounter1 >= 3){ allResultVisuals.frontLayer.p1block.x( -100 );}
			charPos1 = 65;
		}
		p1AButtonUp = false;
	}
	else {
		p1AButtonUp = true;
	}
	
	//J
	if(buttonPressed(gp2.buttons[1])) { 
		if(p2AButtonUp) {
			lockInCounter2++;
			nextChar2 = true;
			//console.log("P2: Locking in with value:" + lockInCounter2); 
			if(lockInCounter2 === 0){ allResultVisuals.frontLayer.p2block.x( allResultVisuals.midLayer.p2c1.x() );}
			if(lockInCounter2 === 1){ allResultVisuals.frontLayer.p2block.x( allResultVisuals.midLayer.p2c2.x() );}
			if(lockInCounter2 === 2){ allResultVisuals.frontLayer.p2block.x( allResultVisuals.midLayer.p2c3.x() );}
			if(lockInCounter2 >= 3){ allResultVisuals.frontLayer.p2block.x( -100 );}
			charPos2 = 65;
		}
		p2AButtonUp = false;
	}
	else {
		p2AButtonUp = true;
	}
	
} //end inputResult