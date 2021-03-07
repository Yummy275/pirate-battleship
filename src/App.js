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
        const playerOne = playerFactory('Player One');
        const playerTwo = playerFactory('Player Two');
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
                    vsCpu={vsCpu}
                ></PlacingPage>
            ) : viewPage === 'placingTwo' ? (
                <PlacingPage
                    player={players['playerTwo']}
                    setViewPage={setViewPage}
                    vsCpu={vsCpu}
                ></PlacingPage>
            ) : viewPage === 'playing' ? (
                <PlayingPage players={players} vsCpu={vsCpu}></PlayingPage>
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
