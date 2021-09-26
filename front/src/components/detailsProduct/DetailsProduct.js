import { Link } from "react-router-dom";
import add_cart_icon_hoover from '../../assets/add_cart_icon_hoover.png';

import './detailsProduct.css';

const DetailsProduct = (props) => {
    const addProduct = (id) => {
        const product = props.data.filter((art) => art.id === id);
        props.setSaveStock([...props.saveStock, ...product]);
        console.log(props.saveStock.length);
    };
    
    return(
        <>
            <div className='container-Details'>
                <h2>{props.item.name}</h2>
                <div className="container-info">
                    <div className="container-picture">
                        <img src={props.item.image} alt={props.item.name}/>
                    </div>
                    <div className="container-text">
                        <p><strong>Details:</strong> {props.item.description}</p>
                        <p><strong>Brand:</strong> {props.item.brand}</p>
                        <p><strong>Price:</strong> {props.item.price}</p>
                    </div>
                </div>
                <div className="container-access">
                    <div onClick={()=>(addProduct(props.id))}><img src={add_cart_icon_hoover} alt="Add cart icon"/></div>
                    <Link to="/"><button>Return</button></Link>
                </div>
            </div>
        </>
    )    
};

export default DetailsProduct;