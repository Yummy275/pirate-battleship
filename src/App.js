import './App.css';
import HomePage from './pages/HomePage';
import PlacingPage from './pages/PlacingPage';

import playerFactory from './game/player.js';

function App() {
    const player = playerFactory('Human');

    return (
        <div className="App">
            <PlacingPage player={player}></PlacingPage>
        </div>
    );
}

export default App;
