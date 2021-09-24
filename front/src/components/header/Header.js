import Shopping_cart_icon from '../../assets/Shopping_cart_icon.png';
import './header.css';

const Header = () => {
  return (
    <header>
        <h1>Shopping cart</h1>
        <img src={Shopping_cart_icon} alt="Shopping cart icon"/>
    </header>
  )
}

export default Header;