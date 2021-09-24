import { Link } from "react-router-dom";
import add_cart_icon_hoover from '../../assets/add_cart_icon_hoover.png';

import './detailsProduct.css';

const DetailsProduct = (props) => {
    return(
        <>
            <div className='container-Details'>
                <h2>{props.item.name}</h2>
                <div className="container-info">
                    <div className="container-picture">
                        {/* Picture */}
                    </div>
                    <div className="container-text">
                        <p><strong>Details:</strong> {props.item.description}</p>
                        <p><strong>Brand:</strong> {props.item.brand}</p>
                        <p><strong>Price:</strong> {props.item.price}</p>
                    </div>
                </div>
                <div className="container-access">
                    <img src={add_cart_icon_hoover} alt="Add cart icon"/>
                    <Link to="/"><button>Return</button></Link>
                </div>
            </div>
        </>
    )    
};

export default DetailsProduct;