import React from 'react';

const BoardGrid = ({ gridSpotClick }) => {
    const grid = [];

    for (var i = 1; i <= 8; i++) {
        const row = [];
        for (var j = 1; j <= 8; j++) {
            const cord = [i, j];
            const col = (
                <div
                    key={cord}
                    style={{
                        cursor: 'pointer',
                        height: '100%',
                        width: '12.5%',
                    }}
                    onClick={() => {
                        gridSpotClick(cord);
                    }}
                    className="my-grid-border transition-colors hover:bg-grid-hover-bgc"
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
