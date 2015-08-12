/*---------------------------------------------------------
    logicResult()
    
    prepandSwitchToMenu()
*/

/* Updates leaderboard */
function logicResult() {
	
	//Player 1 name input
	if(waitingForInput1 && nextChar1) { 
		if(lockInCounter1 == 1) {
			p1name += String.fromCharCode(charPos1);
			nextChar1 = false;
			console.log("p1name 1st char: " + p1name);
		}
		if(lockInCounter1 == 2) {
			p1name += String.fromCharCode(charPos1);
			nextChar1 = false;
			console.log("p1name 2nd char: " + p1name);
		}
		if(lockInCounter1 == 3) {
			p1name += String.fromCharCode(charPos1);
			leaderBoard[newScoreIndex1].name = p1name;
			nextChar1 = false;
			console.log("p1name: " + leaderBoard[newScoreIndex1].name + " p1score: " + leaderBoard[newScoreIndex1].score);
		}
	}
				
	//Player 2 name input
	if(waitingForInput2 && nextChar2) {
		if(lockInCounter2 == 1) {
			p2name += String.fromCharCode(charPos2);
			nextChar2 = false;
			console.log("p2name 1st char: " + p2name);
		}
		if(lockInCounter2 == 2) {
			p2name += String.fromCharCode(charPos2);
			nextChar2 = false;
			console.log("p2name 2nd char: " + p2name);
		}
		if(lockInCounter2 == 3) {
			p2name += String.fromCharCode(charPos2);
			leaderBoard[newScoreIndex2].name = p2name;
			nextChar2 = false;
			console.log("p2name: " + leaderBoard[newScoreIndex2].name + " p2score: " + leaderBoard[newScoreIndex2].score);
		}
	}

	//Waiting for p1 name input
	if(waitingForInput1 && !waitingForInput2) {
		if(lockInCounter1 == 3) {
			prepandSwitchToMenu();
		}
	}
	//waiting for p2 name input
	else if(waitingForInput2 && !waitingForInput1) {
		if(lockInCounter2 == 3) {
			prepandSwitchToMenu();
		}
	}
	//waiting for both p1 and p2 name input
	else if(waitingForInput1 && waitingForInput2) {
		if(lockInCounter1 == 3 && lockInCounter2 == 3) {
			prepandSwitchToMenu();
		}
	}
	//no new high scores, so just switch after enter is hit
	else if(!waitingForInput1 && !waitingForInput2) {
		prepandSwitchToMenu();
	}
} //end logicResult

/* Preps the game */
function prepandSwitchToResult() {
    
  placeScreenVisuals( allResultVisuals );
	
  gameState = gsResult;
  
  for(var i = 0; i < allPlayers.length; i++) {
        for(var j = 0; j < leaderBoard.length; j++) {
			//new high-score found, add to leaderboard!
            if(allPlayers[i].score >= leaderBoard[j].score) {
                //Shift all leaderBoard scores and insert new high-score
                for(var k = j + 1; k < leaderBoard.length; k++) {
                    leaderBoard[k] = leaderBoard[k - 1];
                }
				if(i == 0) {
					newScoreIndex1 = j;
					waitingForInput1 = true;
				}
				if(i == 1) {
					newScoreIndex2 = j;
					waitingForInput2 = true;
				}
                leaderBoard[j].score = allPlayers[i].score; 
            } //score is entered
        } //end looping through leaderboard
    } //end looping through players 
    
} //end prepandSwitchToResult
