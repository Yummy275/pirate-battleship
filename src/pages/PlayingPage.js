import React from 'react';
import BoardGrid from '../components/BoardGrid';
import skull from '../images/skull.png';

const PlayingPage = ({ players, vsCpu }) => {
    const playerOne = players.playerOne;
    const playerTwo = players.playerTwo;

    const playerOneAttacking = (cord) => {
        playerOne.attackBoard(playerTwo.board, cord);
        console.log(playerTwo.board.boardState);
    };

    const playerTwoAttacking = (cord) => {
        playerTwo.attackBoard(playerOne.board, cord);
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
                {players.playerOne.name} Choose Attack Spot
            </div>
            <div
                style={{ backgroundSize: '12.5% 12.5%', opacity: '.8' }}
                className="h-4/6 w-5/6 mt-3 mx-auto bg-water-tile my-grid-border"
            >
                <BoardGrid
                    boardState={playerTwo.board.boardState}
                    gridSpotClick={playerOneAttacking}
                ></BoardGrid>
            </div>
        </div>
    );
};

export default PlayingPage;
