import React from "react";
import { useState, useEffect } from "react";

export const Farkle = () => {
    const [players, setPlayers] = useState([]);

    const [gameRulesBool, setGameRulesBool] = useState(false);
    const [scoringBool, setScoringBool] = useState(false);

    const [activePlayer, setActivePlayer] = useState(0); // index of the active player from players arr

    const [previousPlayerScore, setPreviousPlayerScore] = useState(0); // used for display of points available to steal

    const [bufferScore, setBufferScoreString] = useState("0"); // strictly to change the field

    const [currentScoringRun, setCurrentScoringRun] = useState(0); // int

    const [currentLeader, setCurrentLeader] = useState(-1) // players index of current leader
    const [currentLeaderScore, setCurrentLeaderScore] = useState(0);

    useEffect(() => {
        setPlayers([
            { name: "Marcus", score: 0, scoreString: "0", farkleCount: 0 },
            { name: "Hanna", score: 0, scoreString: "0", farkleCount: 0 },
            { name: "Allison", score: 0, scoreString: "0", farkleCount: 0 },
            { name: "Sean", score: 0, scoreString: "0", farkleCount: 0 }
        ]);
    }, []);

    const setBufferScoreField = (buttonInput) => {
        let buttonInputInt = Number(buttonInput);

        // let inputInt = Number.pasrseInt(buttonInput);
        // if (inputInt === NaN) { // only on failure
        //     setCurrentScoringRun(0);
        //     return setBufferScore("0");
        // } else {
            if (buttonInput !== "0" && buttonInput !== "00") { // we are adding a non-zero number, add it
                // but first remove the zero that bufferScore defaults
                if (bufferScore === "0") {
                    return setBufferScoreString(buttonInput);
                } else {
                    return setBufferScoreString(bufferScore + buttonInput);
                }
            } else if (buttonInput === "0" || buttonInput === "00") { // buttonInput WAS zero, make sure the bufferScore isn't zero or double zero
                if (bufferScore === "0" || bufferScore === "00") {
                    // this is just zeros on top of zeros
                    setCurrentScoringRun(0);
                    return setBufferScoreString("0");
                } else {
                    // setCurrentScoringRun(buttonInput);
                    return setBufferScoreString(bufferScore + buttonInput);
                }
            }
        // }
    }

    // const addTurnScoreToPlayerTotal = (turnTotalPoints) => {
    //     // 6742
    //     console.log(turnTotalPoints)
    //     if (turnTotalPoints % 50 !== 0) {
    //         return alert("That is not a valid farkle score! Please check the score box.");
    //     } 

    //     let currentPlayer = players[activePlayer]; //players[0], [1]
    //     console.log('current player', currentPlayer)
    //     currentPlayer.score += turnTotalPoints;
    //     console.log('currentPlayer.score: ', players[activePlayer].score);
    // }

    const checkCurrentLeaderScore = () => {
        let currentLeaderIndex = -1;
        for (let i = 0; i < players.length; i++) {
            if (players[i].score > currentLeaderScore && players[i].score != 0) {
                currentLeaderIndex = i;
            }
        }
        if (currentLeaderIndex > -1) {
            setCurrentLeaderScore(players[currentLeaderIndex].score);
            setCurrentLeader(currentLeaderIndex);
        }
        return;
    }

    const advancePlayer = () => {
        let nextPlayer = activePlayer + 1;
        if (nextPlayer == players.length) {
            // wrap back around to 0
            nextPlayer = 0;
        }
        checkCurrentLeaderScore();
        setBufferScoreString("0");
        return setActivePlayer(nextPlayer);
    }

    const submitScoreForCurrentPlayer = () => {
        let newScoreInt = Number(bufferScore);

        if (newScoreInt % 50 !== 0) {
            return alert("That is not a valid farkle score! Please check the score box.");
        } 

        // get the player from active player
        let currentPlayer = players[activePlayer];

        // get the current players score
        let oldScore = currentPlayer.score;

        // add the oldScore to the newScore
        let newScore = oldScore += newScoreInt;

        // remove old score string
        currentPlayer.scoreString = "";

        // update the currentPlayers score and score string
        currentPlayer.score = newScore;
        currentPlayer.scoreString = newScore;

        // advance the next player
        return advancePlayer();
    }

    const submitFarkleScore = () => {
        // pretty much just set it all to zero and move on
        setCurrentScoringRun(0);
        setBufferScoreString("0");
        players[activePlayer].farkleCount += 1;
        console.log('farkle count: ', players[activePlayer].farkleCount);
        return advancePlayer();
    }

    return (
        <div className="farkle-wrapper">
        <h1>Farkle scorer</h1>
        <hr></hr>
        <button onClick={() => {setGameRulesBool(!gameRulesBool)}}>{gameRulesBool === true ? "Hide" : "Show"} rules</button> &nbsp;
        <button onClick={() => {setScoringBool(!scoringBool)}}>{scoringBool === true ? "Hide" : "Show"} scoring</button>

        {!gameRulesBool ? null :
            <div><p>These are the game rules.</p>
            <ul>
                <li>Turns are made of throws. You get as many throws as you have un-scored die.</li>
                <li>No die may score with another throw</li>
                <li>A player's turn may end whenever they wish.</li>
                <li>You must always keep <i>at least</i> one scoring die aside to add to your score to roll again.</li>
                <li>To get on the board: First scoring turn must be 500 or more points.</li>
                <li>Players may continue anther players turn and start at their score, but they only get to throw the die that are un-scored.</li>
                <li>Points can only be stolen by a player who is already on the board.</li>
                <li>If you score all 6 die, you get to reroll all die and continue building on your score.</li>
                <li></li>

            </ul>
            &#9856;
            &#9857;
            &#9858;
            &#9859;
            &#9860;
            &#9861;
            </div>
        }

        {!scoringBool ? null : 
            <div>
                <ul>
                <li>Fives ( &#9860; ) : 50 points each. Two ( 2 ) fives is 100 points.</li>
                <li>Ones ( &#9856; ) : 100 points each. Three ( 3 ) ones is 300 points.</li>
                <li>Pair ( &#9857; &#9857; ) : Zero ( 0 ) points by itself.</li>
                <li>Three of a kind ( &#9859; &#9859; &#9859; ) : Face value of the dice times 100. Three twos ( 2 ) is worth 200 points.</li>
                <li>Four of a kind ( &#9858; &#9858; &#9858; &#9858; ) : 1000 points.</li>
                <li>Straight ( &#9856; &#9857; &#9858; &#9859; &#9860; &#9861; ) : 1500 points. There is no Yahtzee small straight.</li>
                <li>Three pairs ( &#9858; &#9858; &#9856; &#9856; &#9861; &#9861; ) : 1500 points.</li>
                <li>Five of a kind ( &#9856; &#9856; &#9856; &#9856; &#9856; ) : 2000 points.</li>
                <li>Two triplets ( &#9856; &#9856; &#9856; &#9860; &#9860; &#9860; ) : 2500 points.</li>
                <li>Six of a kind ( &#9857; &#9857; &#9857; &#9857; &#9857; &#9857; ) : 3000 points.</li>
                </ul>
            </div>
        }

        {!players ? null : 
        
            players.map((player, index) => {
                let distance = 10000 - player.score;
                let percent = (player.score / 10000) * 100;
                return(
                    <div 
                    key={index} 
                    className={`one-player-wrapper ${index === activePlayer ? "active" : ""}`}
                    style={{background: "orange"}}
                    >
                        <p className={`player-name ${index === currentLeader ? "current-leader" : ""}`}>{player.name}</p>
                        <p style={{paddingLeft: percent + "%"}}>{player.score}</p>
                        {player.score == 0 ? null : <p>({distance} points from victory.)</p>}
                    </div>
                )
            })
        }

        {!players ? null : 
        <div>
            {/* <label htmlFor="current-run-score">Current run score for {players[0].name}:</label><p className="current-run-score" value={bufferScore}></p> */}
            {/* <p>Current player: {players[activePlayer].name}</p> */}
        </div>
        }

        <div className="score-input-wrapper">
            <button className="clear-button" onClick={(e) => {setBufferScoreString("0")}}>C</button>
            <br></br>
            <p className="score-addition-counter" type="text">{bufferScore}</p> &nbsp; <button onClick={submitScoreForCurrentPlayer}>Submit score</button>
            
            <br></br>
            <div className="number-buttons-wrapper">
                <div className="button-three-pack">
                    <button className="number-button" value="7" onClick={((e) => {setBufferScoreField(e.target.value)})}>7</button> &nbsp;
                    <button className="number-button" value="8" onClick={((e) => {setBufferScoreField(e.target.value)})}>8</button> &nbsp; 
                    <button className="number-button" value="9" onClick={((e) => {setBufferScoreField(e.target.value)})}>9</button>  

                </div>
                <br></br>
                <div className="button-three-pack">
                    <button className="number-button" value="4" onClick={((e) => {setBufferScoreField(e.target.value)})}>4</button> &nbsp;
                    <button className="number-button" value="5" onClick={((e) => {setBufferScoreField(e.target.value)})}>5</button> &nbsp; 
                    <button className="number-button" value="6" onClick={((e) => {setBufferScoreField(e.target.value)})}>6</button>  
                </div>

                <br></br>
                <div className="button-three-pack">
                    <button className="number-button" value="1" onClick={((e) => {setBufferScoreField(e.target.value)})}>1</button> &nbsp;
                    <button className="number-button" value="2" onClick={((e) => {setBufferScoreField(e.target.value)})}>2</button> &nbsp; 
                    <button className="number-button" value="3" onClick={((e) => {setBufferScoreField(e.target.value)})}>3</button>  
                </div>

                <br></br>
                <div className="button-three-pack">
                    <button className="number-button" value="00" onClick={((e) => {setBufferScoreField(e.target.value)})}>00</button> &nbsp; 
                    <button className="number-button" value="0" onClick={((e) => {setBufferScoreField(e.target.value)})}>0</button> &nbsp; 
                    <button className="number-button farkle-button" onClick={submitFarkleScore}>FARKLE</button>
                </div>
            </div>
            
        </div>
        </div>
    )
};