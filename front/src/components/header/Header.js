import ModalCart from "../modalCart/ModalCart"
import Shopping_cart_icon from '../../assets/Shopping_cart_icon.png';
import './header.css';

const Header = (props) => {
  return (
    <header>
        <h1>Shopping cart</h1>
        <a href="#miModal">
        <div className="miModal">
          <ModalCart
            data={props.data}
            handleSaveData={props.handleSaveData}
            saveStock={props.saveStock}
            setSaveStock={props.setSaveStock}
          />
          <img src={Shopping_cart_icon} alt="Shopping cart icon"/>
        </div>
        </a>
    </header>
  )
}

export default Header;