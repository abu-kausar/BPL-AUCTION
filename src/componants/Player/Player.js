import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import './Player.css'

const Player = (props) => {
   const {first_name, last_name, gender , email, image, base_price} = props.player;
   const handleAddPlayer = props.handleAddPlayer;

   const [email_, setEmail] = useState('');

   const showEmail = () => setEmail(email);
    return (
        <div className='player'>
            <div class="card">
                <img class="card-img-top" src={image} alt={first_name}/>
                <div class="card-body">
                    <h5 class="card-title">{first_name} {last_name}</h5>
                    <p class="card-text">{gender}</p>
                    <p class="card-text">${base_price}</p>
                    <p class="card-text">{email_}</p>
                </div>
                <div class="card-footer">
                    <button onClick={showEmail} type="button" class="btn btn-warning">Show email</button>
                    <button onClick={()=>handleAddPlayer(props.player)} type="button" class="btn btn-success">Add to Squad</button>
                </div>
            </div>
        </div>
    );
};

export default Player;