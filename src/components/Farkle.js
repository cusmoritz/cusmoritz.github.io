import React from "react";
import { useState, useEffect } from "react";

export const Farkle = () => {
    const [players, setPlayers] = useState([]);

    const [gameRulesBool, setGameRulesBool] = useState(true);
    const [activePlayer, setActivePlayer] = useState(0); // index of the active player from players arr
    const [currentScoringRun, setCurrentScoringRun] = useState(0); // int
    const [currentScoringRunString, setCurrentScoringRunString] = useState(""); // same thing but no math
    const [activePlayerScore, setActivePlayerScore] = useState(0); // used for addition in the calculator

    const [previousPlayerScoreInt, setPreviousPlayerScoreInt] = useState(0); // used for stealing
    const [previousPlayerScoreString, setPreviousPlayerScoreString] = useState(""); // used for display of points available to steal

    const [bufferScore, setBufferScore] = useState("0");


    useEffect(() => {
        setPlayers([
            { name: "Marcus", score: 0 },
            { name: "Hanna", score: 0 },
            { name: "Allison", score: 0 },
            { name: "Sean", score: 0 }
        ]);
    }, []);

    const setBufferScoreField = (buttonInput) => {

        // let inputInt = Number.pasrseInt(buttonInput);
        // if (inputInt === NaN) { // only on failure
        //     setCurrentScoringRun(0);
        //     return setBufferScore("0");
        // } else {
            if (buttonInput !== "0" && buttonInput !== "00") { // we are adding a non-zero number, add it
                // but first remove the zero that bufferScore defaults
                if (bufferScore === "0") {
                    return setBufferScore(buttonInput);
                } else {
                    return setBufferScore(bufferScore + buttonInput);
                }
            } else if (buttonInput === "0" || buttonInput === "00") { // buttonInput WAS zero, make sure the bufferScore isn't zero or double zero
                if (bufferScore === "0" || bufferScore === "00") {
                    // this is just zeros on top of zeros
                    setCurrentScoringRun(0);
                    return setBufferScore("0");
                } else {
                    setCurrentScoringRun(bufferScore += buttonInput);
                    return setBufferScore(bufferScore + buttonInput);
                }
            }
        // }
    }

    const addTurnScoreToPlayerTotal = (turnTotalPoints) => {
        // 6742
        console.log(turnTotalPoints)
        if (turnTotalPoints % 50 !== 0) {
            return alert("That is not a valid farkle score! Please check the score box.");
        } 

        let currentPlayer = players[activePlayer]; //players[0], [1]
        console.log('current player', currentPlayer)
        currentPlayer.score += turnTotalPoints;
        console.log('currentPlayer.score: ', players[activePlayer].score);
    }

    const submitScoreForCurrentPlayer = () => {
        // will take a string input: '850'
        // add the numeral value to the currentScoringRun
        // add the currentScoringRun (different function) to the players[actiuvePlayer].score
        // set the previousPlayerTurn (different function) tot he current scoring run string and the current scoring run
    }

    return (
        <div className="farkle-wrapper">
        <h1>Farkle scorer</h1>
        <hr></hr>

        {!gameRulesBool ? null :
            <div><p>These are the game rules.</p>
            <ul>
                <li>Turns are made of throws. You get as many throws as you have un-scored die.</li>
                <li>A player's turn may end whenever they wish.</li>
                <li>You must always keep <i>at least</i> one scoring die aside to add to your score to roll again.</li>
                <li>To get on the board: First scoring turn must be 500 or more points.</li>
                <li>Players may continue anther players turn and start at their score, but they only get to throw the die that are un-scored.</li>
                <li>Points can only be stolen by a player who is already on the board.</li>
                <li>If you score all 6 die, you get to reroll all die and continue building on your score.</li>
                <li></li>
                <li>No die may score with another throw.  Scoring:
                    <p>Fives ( &#9860; ) : 50 points each. Two ( 2 ) fives is 100 points.</p>
                    <p>Ones ( &#9856; ) : 100 points each. Three ( 3 ) ones is 300 points.</p>
                    <p>Pair ( &#9857; &#9857; ) : Zero ( 0 ) points by itself.</p>
                    <p>Three of a kind ( &#9859; &#9859; &#9859; ) : Face value of the dice times 100. Three twos ( 2 ) is worth 200 points.</p>
                    <p>Four of a kind ( &#9858; &#9858; &#9858; &#9858; ) : 1000 points.</p>
                    <p>Five of a kind ( &#9856; &#9856; &#9856; &#9856; &#9856; ) : 2000 points.</p>
                    <p>Six of a kind ( &#9857; &#9857; &#9857; &#9857; &#9857; &#9857; ) : 3000 points.</p>
                    <p>Straight ( &#9856; &#9857; &#9858; &#9859; &#9860; &#9861; ) : 1500 points. There is no Yahtzee small straight.</p>
                    <p>Three pairs ( &#9858; &#9858; &#9856; &#9856; &#9861; &#9861; ) : 1500 points.</p>
                    <p>Two triplets ( &#9856; &#9856; &#9856; &#9860; &#9860; &#9860; ) : 2500 points.</p>
                </li>
            </ul>
            &#9856;
            &#9857;
            &#9858;
            &#9859;
            &#9860;
            &#9861;
            </div>
        }

        {!players ? null : 
        
            players.map((player, index) => {
                return(
                    <div key={index} className="player-wrapper">
                        <p>{player.name}</p>
                        <p>{player.score}</p>
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
            <button className="clear-button" onClick={(e) => {setBufferScore("0")}}>C</button> &nbsp; <p className="score-addition-counter" type="text">{bufferScore}</p> &nbsp; <button onClick={() => {addTurnScoreToPlayerTotal}}>Submit score</button>
            
            <br></br>
            <div className="number-buttons-wrapper">
                <button className="number-button" value="9" onClick={((e) => {setBufferScoreField(e.target.value)})}>9</button> &nbsp; 
                <button className="number-button" value="8" onClick={((e) => {setBufferScoreField(e.target.value)})}>8</button> &nbsp; 
                <button className="number-button" value="7" onClick={((e) => {setBufferScoreField(e.target.value)})}>7</button>
                <br></br>
                <button className="number-button" value="6" onClick={((e) => {setBufferScoreField(e.target.value)})}>6</button> &nbsp; 
                <button className="number-button" value="5" onClick={((e) => {setBufferScoreField(e.target.value)})}>5</button> &nbsp; 
                <button className="number-button" value="4" onClick={((e) => {setBufferScoreField(e.target.value)})}>4</button>
                <br></br>
                <button className="number-button" value="3" onClick={((e) => {setBufferScoreField(e.target.value)})}>3</button> &nbsp; 
                <button className="number-button" value="2" onClick={((e) => {setBufferScoreField(e.target.value)})}>2</button> &nbsp; 
                <button className="number-button" value="1" onClick={((e) => {setBufferScoreField(e.target.value)})}>1</button>
                <br></br>
                <button className="number-button" value="00" onClick={((e) => {setBufferScoreField(e.target.value)})}>00</button> &nbsp; 
                <button className="number-button" value="0" onClick={((e) => {setBufferScoreField(e.target.value)})}>0</button> &nbsp; 
                <button className="number-button">FARKLE</button>

            </div>
            
        </div>
        </div>
    )
}