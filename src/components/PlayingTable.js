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
    console.log(viewingBoard);
    return (
        <>
            {viewingBoard === 1 ? (
                <BoardGrid
                    boardState={boardOne}
                    gridSpotClick={whosTurn === 1 ? 'none' : playerTwoAttacking}
                    hideOccupied={whosTurn === 1 ? false : true}
                ></BoardGrid>
            ) : (
                <BoardGrid
                    boardState={boardTwo}
                    gridSpotClick={whosTurn === 2 ? 'none' : playerOneAttacking}
                    hideOccupied={whosTurn === 2 ? false : true}
                ></BoardGrid>
            )}
        </>
    );
};

export default PlayingTable;
