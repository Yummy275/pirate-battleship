import React from 'react';
import BoardGrid from '../components/BoardGrid';
import skull from '../images/skull.png';

const PlacingPage = () => {
    return (
        <div
            className="h-screen bg-center"
            style={{
                minHeight: '100vh',
                backgroundImage: `url(${skull})`,
                backgroundSize: '20%',
            }}
        >
            <h3>HELLO</h3>
            <div
                style={{ backgroundSize: '12.5% 12.5%', opacity: '.8' }}
                className="h-3/4 w-5/6 mx-auto bg-water-tile my-grid-border"
            >
                <BoardGrid></BoardGrid>
            </div>
        </div>
    );
};

export default PlacingPage;
