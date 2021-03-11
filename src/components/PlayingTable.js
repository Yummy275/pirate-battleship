import React from 'react';
import BoardGrid from './BoardGrid';

const PlayingTable = ({
    boardOne,
    playerOneAttacking,
    boardTwo,
    playerTwoAttacking,
    whosTurn,
    viewingBoard,
}) => {
    return (
        <>
            {viewingBoard === 1 ? (
                <BoardGrid
                    boardState={boardTwo}
                    gridSpotClick={playerOneAttacking}
                    hideOccupied={whosTurn === 1 ? false : true}
                ></BoardGrid>
            ) : (
                <BoardGrid
                    boardState={boardOne}
                    gridSpotClick={playerTwoAttacking}
                    hideOccupied={whosTurn === 2 ? false : true}
                ></BoardGrid>
            )}
        </>
    );
};

export default PlayingTable;
