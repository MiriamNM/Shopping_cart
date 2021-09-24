import React from 'react';
import add_cart_icon_hoover from '../../assets/add_cart_icon_hoover.png';
import './art.css';

const Art = (props) => {
    // const {name} = props.item;
    return(<div className="product">
            <h3>{props.item.name}</h3>
            <img src={add_cart_icon_hoover} alt="Add cart icon"/>
            <button>Description</button>
        </div>)
}

export default Art;