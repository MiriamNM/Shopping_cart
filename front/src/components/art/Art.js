import React from 'react';
import { Link } from "react-router-dom";
import add_cart from '../../assets/add_cart.png';
import './art.css';

const Art = (props) => {
    const addProduct = (id) => {
        const product = props.data.filter((art) => art.id === id);
        props.setSaveStock([...props.saveStock, ...product]);
        console.log(props.saveStock.length);
    };

    // const delProduct = (id) => {
    //     const products = props.data.filter((art) => art.id !== id);
    //     props.setSaveStock(products);
    // };

    return(
        <div className="product">
            <div className="image-product">
                <img src={props.item.image} alt={props.item.name}/>
            </div>
            <h3>{props.item.name}</h3>
            <div className="container-access">
                <div onClick={()=>(addProduct(props.id))}><img src={add_cart} alt="Add cart icon"/></div>
                <Link to="/item"><button onClick={()=>(props.handleSaveData(props.item))}>Description</button></Link>
            </div>
        </div>
    )
}

export default Art;