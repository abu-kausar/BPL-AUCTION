import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './Player.css'

const Player = (props) => {
   const {first_name, last_name, gender , image, base_price} = props.player;
   const handleAddPlayer = props.handleAddPlayer;
    return (
        <div className='player'>
            <div class="card">
                <img class="card-img-top" src={image} alt={first_name}/>
                <div class="card-body">
                    <h5 class="card-title">{first_name} {last_name}</h5>
                    <p class="card-text">{gender}</p>
                    <p class="card-text">${base_price}</p>
                </div>
                <div class="card-footer">
                <a onClick={()=>handleAddPlayer(props.player)} class="btn btn-primary btn-lg active" role="button" aria-pressed="true">add to squad</a>
                </div>
            </div>
        </div>
    );
};

export default Player;