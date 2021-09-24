import './product.css';

const Product = (props) => {
        return (
            <>
                <p>Hello Product</p>
                <p>{props.response}</p>
            </>
        )
}

export default Product;