import React, { useState } from 'react';
import './App.css';
import HomePage from './pages/HomePage';
import PlacingPage from './pages/PlacingPage';
import PlayingPage from './pages/PlayingPage';
import playerFactory from './game/player';

function App() {
    const [viewPage, setViewPage] = useState('');
    const [vsCpu, setVsCpu] = useState('');
    const [players, setPlayers] = useState([]);

    const placingStart = () => {
        const playerOne = playerFactory('Human');
        const playerTwo = playerFactory('CPU');
        const playersObj = { playerOne: playerOne, playerTwo: playerTwo };
        setPlayers(playersObj);
        setViewPage('placing');
    };

    return (
        <div className="App">
            {viewPage === 'placing' ? (
                <PlacingPage
                    player={players['playerOne']}
                    setViewPage={setViewPage}
                ></PlacingPage>
            ) : viewPage === 'placingTwo' ? (
                <PlacingPage
                    player={players['playerTwo']}
                    setViewPage={setViewPage}
                    vsCpu={vsCpu}
                ></PlacingPage>
            ) : viewPage === 'playing' ? (
                <PlayingPage></PlayingPage>
            ) : (
                <HomePage
                    placingStart={placingStart}
                    setVsCpu={setVsCpu}
                ></HomePage>
            )}
        </div>
    );
}

export default App;
