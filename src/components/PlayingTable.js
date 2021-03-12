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
                    className={
                        whosTurn === viewingBoard
                            ? 'pointer-events-none'
                            : 'pointer-events-auto'
                    }
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
