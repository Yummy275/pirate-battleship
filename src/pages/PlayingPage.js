import React, { useState, useEffect } from 'react';
import BoardGrid from '../components/BoardGrid';
import rand from '../util/random';
import skull from '../images/skull.png';

const PlayingPage = ({ players, vsCpu }) => {
    const [whosTurn, setWhosTurn] = useState(1);

    const playerOne = players.playerOne;
    const playerTwo = players.playerTwo;

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
        setWhosTurn(2);
    };

    const playerTwoAttacking = (cord) => {
        playerTwo.attackBoard(playerOne.board, cord);
        setWhosTurn(1);
    };

    return (
        <div
            className="h-screen bg-center"
            style={{
                minHeight: '100vh',
                backgroundImage: `url(${skull})`,
                backgroundSize: '20%',
            }}
        >
            <div className="text-center text-red-700 text-3xl pb-1 bg-gray-300 bg-opacity-90">
                {whosTurn === 1 ? playerOne.name : playerTwo.name} Choose Attack
                Spot
            </div>
            <div
                style={{ backgroundSize: '12.5% 12.5%', opacity: '.8' }}
                className="h-4/6 w-5/6 mt-3 mx-auto bg-water-tile my-grid-border"
            >
                {whosTurn === 1 ? (
                    <BoardGrid
                        boardState={playerTwo.board.boardState}
                        gridSpotClick={playerOneAttacking}
                        hideOccupied={true}
                    ></BoardGrid>
                ) : (
                    <BoardGrid
                        boardState={playerOne.board.boardState}
                        gridSpotClick={playerTwoAttacking}
                        hideOccupied={true}
                    ></BoardGrid>
                )}
            </div>
        </div>
    );
};

export default PlayingPage;
