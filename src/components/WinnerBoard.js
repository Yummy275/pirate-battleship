import React from 'react';
import StdButton from '../components/StdButton';

const classes = {
    container: `flex justify-center items-center`,
};

const WinnerBoard = (winnerName) => {
    return (
        <div className={classes.container}>
            <div>{winnerName}</div>
            <div>Would you like to play more?</div>
            <StdButton></StdButton>
        </div>
    );
};

export default WinnerBoard;
