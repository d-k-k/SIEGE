

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

} //end inputGameKeyboardBackup