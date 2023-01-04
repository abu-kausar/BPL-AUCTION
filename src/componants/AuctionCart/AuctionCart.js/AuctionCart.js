import React from 'react';

const AuctionCart = (props) => {
    const [first_name, base_price] = props.cart;
    const selectedPlayer = props.cart;
    let squadMember = '';
    let totalSpent = 0;
    for(let i = 0; i < props.cart.length; i++) {
        squadMember = squadMember + ' ' + selectedPlayer[i].first_name;
        totalSpent = totalSpent + Number(selectedPlayer[i].base_price);
    }
    return (
        <div className='auction-cart'>
            <h3>KKR Squad</h3>
            <h4>Total Purchased: {props.cart.length}</h4>
            <h5>{squadMember}</h5>
            <h5>Total spent: {totalSpent}</h5>
        </div>
    );
};

export default AuctionCart;