import React from 'react';
import add_cart from '../../assets/add_cart.png';
import './art.css';

const Art = (props) => {
    return(
        <div className="product">
            <h3>{props.item.name}</h3>
            <div className="container-access">
                <img src={add_cart} alt="Add cart icon"/>
                <button>Description</button>
            </div>
        </div>
    )
}

export default Art;