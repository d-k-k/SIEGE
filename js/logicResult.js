/*---------------------------------------------------------
    logicResult()
    
    prepandSwitchToMenu()
*/

/* Updates leaderboard */
function logicResult() {

    resultScreenVars.blinkCounter += Date.now() - resultScreenVars.lastTime;
    resultScreenVars.lastTime = Date.now();
    if(resultScreenVars.blinkCounter > resultScreenVars.blinkTime) {
        resultScreenVars.blinkCounter = 0;
        allResultVisuals.frontLayer.p1block.visible( ! allResultVisuals.frontLayer.p1block.visible() );
        allResultVisuals.frontLayer.p2block.visible( ! allResultVisuals.frontLayer.p2block.visible() );
    }

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
            nextChar1 = false;
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
            nextChar2 = false;
        }
    }

    //Waiting for p1 name input
    if(lockInCounter1 >= 3 && lockInCounter2 >= 3) {
        leaderBoard[newScoreIndex1].name = p1name;
        console.log("p1name: " + leaderBoard[newScoreIndex1].name + " p1score: " + leaderBoard[newScoreIndex1].score);
        leaderBoard[newScoreIndex2].name = p2name;
        console.log("p2name: " + leaderBoard[newScoreIndex2].name + " p2score: " + leaderBoard[newScoreIndex2].score);


        var str;
        for(var i = 0; i < leaderBoard.length; i++) {
            console.log( 'board:' + leaderBoard[i].name + ',' + leaderBoard[i].score );
            str = 'name'+(i+1)+'='+ leaderBoard[i].name;
            document.cookie = str;
            str = 'score'+(i+1)+'='+ leaderBoard[i].score;
            document.cookie = str;
        }

        //alert(document.cookie);

        document.location.reload(true);

    }

} //end logicResult

/* Preps the game */
function prepandSwitchToResult(winner) {

  placeScreenVisuals( allResultVisuals );
  gameState = gsResult;
  
  for(var i = 0; i < allPlayers.length; i++) {
        for(var j = 0; j < leaderBoard.length; j++) {
            //new high-score found, add to leaderboard!
            if(allPlayers[i].score >= leaderBoard[j].score) {
                //Shift all leaderBoard scores and insert new high-score
                for(var k = leaderBoard.length -1; k > j; k--) {
                    leaderBoard[k].score = leaderBoard[k - 1].score;
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
                break;
            } //score is entered
        } //end looping through leaderboard
    } //end looping through players

    lockInCounter1 = 0;
    lockInCounter2 = 0;
    p1name = "";
    p2name = "";
    allResultVisuals.frontLayer.p1block.x( allResultVisuals.midLayer.p1c1.x() );
    allResultVisuals.frontLayer.p2block.x( allResultVisuals.midLayer.p2c1.x() );
    
    allResultVisuals.midLayer.winner.text( winner );
    
    allResultVisuals.midLayer.winner.x( cCanvasWidth/2 - allResultVisuals.midLayer.winner.getTextWidth()/2 );
    
    
    resultScreenVars.lastTime = Date.now();
} //end prepandSwitchToResult
