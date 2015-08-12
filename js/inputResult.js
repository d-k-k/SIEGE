

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
			console.log("P1: Locking in");
			if(lockInCounter1 === 0){ allResultVisuals.frontLayer.p1block.x( allResultVisuals.midLayer.p1c1.x() );}
			if(lockInCounter1 === 1){ allResultVisuals.frontLayer.p1block.x( allResultVisuals.midLayer.p1c2.x() );}
			if(lockInCounter1 === 2){ allResultVisuals.frontLayer.p1block.x( allResultVisuals.midLayer.p1c3.x() );}
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
			console.log("P2: Locking in"); 
			if(lockInCounter2 === 0){ allResultVisuals.frontLayer.p2block.x( allResultVisuals.midLayer.p2c1.x() );}
			if(lockInCounter2 === 1){ allResultVisuals.frontLayer.p2block.x( allResultVisuals.midLayer.p2c2.x() );}
			if(lockInCounter2 === 2){ allResultVisuals.frontLayer.p2block.x( allResultVisuals.midLayer.p2c3.x() );}
		}
		p2JKeyUp = false;
	}
	else {
		p2JKeyUp = true;
	}
	
} //end inputResult