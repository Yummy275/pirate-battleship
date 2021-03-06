import React from 'react';

const BoardGrid = () => {
    const grid = [];

    for (var i = 1; i <= 8; i++) {
        const row = [];
        for (var j = 1; j <= 8; j++) {
            const col = (
                <div
                    key={`[${(i, j)}]`}
                    style={{ height: '100%', width: '12.5%' }}
                    className="bg-opacity-0	my-grid-border"
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
