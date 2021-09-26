import React from 'react';
import { Link } from "react-router-dom";
import add_cart from '../../assets/add_cart.png';
import './art.css';

const Art = (props) => {
    return(
        <div className="product">
            <div className="image-product">
                <img src={props.item.image} alt={props.item.name}/>
            </div>
            <h3>{props.item.name}</h3>
            <div className="container-access">
                <div onClick={()=>(props.handleSaveStock(props.item))}><img src={add_cart} alt="Add cart icon"/></div>
                <Link to="/item"><button onClick={()=>(props.handleSaveData(props.item))}>Description</button></Link>
            </div>
        </div>
    )
}

export default Art;