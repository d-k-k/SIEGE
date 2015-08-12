

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
	
	//D
	if(keyboardKeys[68] === 'down') { 
		if(p1DKeyUp) {
			lockInCounter1++;
			nextChar1 = true;
			console.log("P1: Locking in");
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
		}
		p2JKeyUp = false;
	}
	else {
		p2JKeyUp = true;
	}
	
} //end inputResult