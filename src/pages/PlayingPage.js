import React, { useState, useEffect } from 'react';
import PlayingTable from '../components/PlayingTable';
import WinnerBoard from '../components/WinnerBoard';
import StdButton from '../components/StdButton';
import rand from '../util/random';
import skull from '../images/skull.png';

const classes = {
    container: `h-screen bg-center`,
    header: `text-center text-red-700 text-3xl pb-1 bg-gray-300 bg-opacity-90`,
    gridContainer: `h-4/6 w-5/6 mt-3 mx-auto bg-water-tile my-grid-border`,
    btnsContainer: 'flex justify-center',
};

const PlayingPage = ({ players, vsCpu }) => {
    const [whosTurn, setWhosTurn] = useState(1);
    const [viewingBoard, setViewBoard] = useState(2);
    const [winner, setWinner] = useState('');

    const playerOne = players.playerOne;
    const playerTwo = players.playerTwo;

    console.log(playerOne);
    console.log(playerTwo);

    const highlightRandom = (time) => {
        const gridSpots = Array.from(document.querySelectorAll('.grid-spot'));

        for (const spot of gridSpots) {
            spot.style.pointerEvents = 'none';
        }

        let lastRand = 0;
        let randNum = 0;
        const adding = setInterval(() => {
            lastRand = randNum;
            randNum = rand.randomNumberGen(0, 63);
            gridSpots[randNum].classList.add('grid-random-highlight');
        }, 150);
        const removing = setInterval(() => {
            gridSpots[lastRand].classList.remove('grid-random-highlight');
        }, 150);
        setTimeout(() => {
            for (const spot of gridSpots) {
                spot.style.pointerEvents = 'auto';
            }
            gridSpots[randNum].classList.remove('grid-random-highlight');
            clearInterval(removing);
            clearInterval(adding);
        }, time);
    };

    useEffect(() => {
        if (whosTurn === 2 && vsCpu === true) {
            const time = 2300;
            highlightRandom(time);
            setTimeout(() => {
                rand.attackBoardRandomly(playerTwo, playerOne);
                setWhosTurn(1);
                setViewBoard(2);
            }, time);
        }
    });

    const playerOneAttacking = (cord) => {
        playerOne.attack(playerTwo, cord);
        if (playerTwo.shipsDeadCheck() === true) {
            console.log('hello');
        }
        setViewBoard(1);
        setWhosTurn(2);
    };

    const playerTwoAttacking = (cord) => {
        playerTwo.attack(playerOne, cord);
        if (playerOne.shipsDeadCheck() === true) {
            console.log('hello');
        }
        setViewBoard(2);
        setWhosTurn(1);
    };

    const toggleView = () => {
        viewingBoard === 1 ? setViewBoard(2) : setViewBoard(1);
    };

    return (
        <div
            className={classes.container}
            style={{
                minHeight: '100vh',
                backgroundImage: `url(${skull})`,
                backgroundSize: '20%',
            }}
        >
            <div className={classes.header}>
                {viewingBoard === whosTurn
                    ? `Your board`
                    : whosTurn === 2 && vsCpu === true
                    ? `CPU attacking`
                    : whosTurn === 2 && viewingBoard === 1
                    ? `Player Two Pick Attack Cord`
                    : whosTurn === 1 && viewingBoard === 2
                    ? 'Player One Pick Attack Cord'
                    : ''}
            </div>
            <div
                style={{ backgroundSize: '12.5% 12.5%', opacity: '.8' }}
                className={classes.gridContainer}
            >
                <PlayingTable
                    boardOne={playerOne.board.boardState}
                    playerOneAttacking={playerOneAttacking}
                    boardTwo={playerTwo.board.boardState}
                    playerTwoAttacking={playerTwoAttacking}
                    whosTurn={whosTurn}
                    viewingBoard={viewingBoard}
                ></PlayingTable>
            </div>
            <div className={classes.btnsContainer}>
                <StdButton
                    string="Toggle View"
                    textSize="text-base"
                    handleClick={toggleView}
                ></StdButton>
            </div>
        </div>
    );
};

export default PlayingPage;
