import React from 'react';

const BoardGrid = ({ boardState, gridSpotClick, hideOccupied = false }) => {
    const grid = [];

    for (var i = 1; i <= 8; i++) {
        const row = [];
        for (var j = 1; j <= 8; j++) {
            const cord = [i, j];
            const col = (
                <div
                    key={cord}
                    id={`${cord}`}
                    style={{
                        cursor: 'pointer',
                        height: '100%',
                        width: '12.5%',
                    }}
                    onClick={() => {
                        gridSpotClick(cord);
                    }}
                    className={`${
                        gridSpotClick === 'none'
                            ? `pointer-events-none`
                            : 'pointer-events-auto'
                    } my-grid-border grid-spot transition-colors ${
                        boardState[i - 1][j - 1] === 'O' &&
                        hideOccupied === false
                            ? ''
                            : 'hover:bg-grid-hover-bgc'
                    } ${
                        boardState[i - 1][j - 1] === 'O' &&
                        hideOccupied === false
                            ? 'bg-grid-occ'
                            : boardState[i - 1][j - 1] === 'H'
                            ? 'bg-grid-hit'
                            : boardState[i - 1][j - 1] === 'M'
                            ? 'bg-grid-miss'
                            : ''
                    }`}
                ></div>
            );
            row.push(col);
        }
        grid.push(
            <div key={i} style={{ height: '12.5%' }} className="flex w-full">
                {row}
            </div>
        );
    }

    return grid;
};

export default BoardGrid;
