import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Data from './Data/Data.json';
import { useEffect, useState } from 'react';
import Player from './componants/Player/Player';
import AuctionCart from './componants/AuctionCart/AuctionCart.js/AuctionCart';

function App() {
  const [players, setPlayers] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setPlayers(Data);
  }, []);

  const handleAddPlayer = (player) => {
    const newAddedPlayer = [...cart, player];
    setCart(newAddedPlayer);
  };

  return (
    <div className="App">
      <nav class="navbar navbar-dark bg-dark">
        <a class="navbar-brand" href="#">
          <h3>Bangladesh Premier League Auction</h3>
        </a>
      </nav>
      <div className='auction-list'>
        <div className='player'>
          {
            players.map(player => <Player handleAddPlayer={handleAddPlayer} player={player} key={player.id}></Player>)
          }
        </div>
        <div>
           <AuctionCart cart={cart}></AuctionCart>
        </div>
      </div>
    </div>
  );
}

export default App;
