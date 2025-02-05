import React from "react";
import { useState, useEffect } from "react";

export const Farkle = () => {
    const [players, setPlayers] = useState([]);

    const [gameRulesBool, setGameRulesBool] = useState(true);

    const initGame = () => {

        setPlayers([
            { name: "Marcus" },
            { name: "Hanna" },
            { name: "Allison" },
            { name: "Sean" }
        ]);

    };


    useEffect(() => {
        initGame();
    }, []);

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
                    <p key={index}>{player.name}</p>
                )
            })
        }
        </div>
    )
}