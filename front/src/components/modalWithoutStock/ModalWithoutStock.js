import cartWthoutStock from '../../assets/cartWthoutStock.png';
import './modalWithoutStock.css';

const ModalWithoutStock = (props) => {
    return (
        <div className="container-cartWthoutStock">
            <img src={cartWthoutStock} alt="Shopping cart icon"/>
            <p>Please select a product</p>
        </div>
    )
}

export default ModalWithoutStock;