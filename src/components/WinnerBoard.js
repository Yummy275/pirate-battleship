import React from 'react';
import StdButton from '../components/StdButton';

const classes = {
    container: `w-full h-full flex justify-center items-center`,
};

const WinnerBoard = ({ winnerName }) => {
    return (
        <div className={classes.container}>
            <div>{winnerName}</div>
            <div>Would you like to play more?</div>
            <StdButton
                string="New game"
                textSize="text-base"
                handleClick=""
            ></StdButton>
        </div>
    );
};

export default WinnerBoard;
