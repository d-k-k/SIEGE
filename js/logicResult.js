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

} //end logicResult

/* Preps the game */
function prepandSwitchToResult() {
    
   placeScreenVisuals( allResultVisuals );
   gameState = gsResult;

    //should be done once
    for(var i = 0; i < allPlayers.length; i++) {
        for(var j = 0; j < leaderBoard.length; j++) {
            if(allPlayers[i].score >= leaderBoard[j].score) {
                /* Shift all leaderBoard scores and insert new score */
                for(var k = j + 1; k < leaderBoard.length; k++) {
                    leaderBoard[k] = leaderBoard[k - 1];
                }
                leaderBoard[j].score = allPlayers[i].score;
                //leaderBoard[j].name = userinput?
                break;
            }
        }
    }
    
    resultScreenVars.lastTime = Date.now();
} //end prepandSwitchToResult
