import React, { useState, useEffect } from 'react';
import PlayingTable from '../components/PlayingTable';
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

    const playerOne = players.playerOne;
    const playerTwo = players.playerTwo;

    console.log('p1');
    console.log(playerOne.board.boardState);
    console.log('p2');
    console.log(playerTwo.board.boardState);

    useEffect(() => {
        if (whosTurn === 2 && vsCpu === true) {
            setTimeout(() => {
                rand.attackBoardRandomly(playerTwo, playerOne);
                setWhosTurn(1);
            }, 4000);
        }
    });

    const playerOneAttacking = (cord) => {
        playerOne.attackBoard(playerTwo.board, cord);
        setViewBoard(1);
        setWhosTurn(2);
    };

    const playerTwoAttacking = (cord) => {
        playerTwo.attackBoard(playerOne.board, cord);
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
                    : whosTurn === 2 && viewingBoard === 1
                    ? `Player Two Pick Attack Cord`
                    : whosTurn === 1 && viewingBoard === 2
                    ? 'Player One Pick Attack Cord'
                    : ''}
            </div>
            <div></div>
            <div
                style={{ backgroundSize: '12.5% 12.5%', opacity: '.8' }}
                className={classes.gridContainer}
            >
                <PlayingTable
                    boardOne={playerOne.board.boardState}
                    playerOneAttacking={playerOneAttacking}
                    boardTwo={playerTwo.board.boardState}
                    playerTwoAttacking={playerTwoAttacking}
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
