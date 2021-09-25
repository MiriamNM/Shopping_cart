import React from 'react';
import { Link } from "react-router-dom";
import delete_item from '../../assets/delete_item.png';
import './modalWithStock.css';

const ModalWithStock = (props) => {
    return (
        <div className="container-DataMap">
            <div className="container-item">
                <p><strong>{props.item.name}</strong></p>
                <Link to="/item"><button onClick={(props.handleSaveData(props.item))}>Description</button></Link>
                <img src={delete_item} alt="Shopping cart icon"/>
            </div>
            <p>{props.item.length} products in cart</p>
        </div>
    )
}

export default ModalWithStock;