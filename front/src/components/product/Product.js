import './product.css';

const Product = (props) => {
        return (
            <>
                <p>Hello Product</p>
                <p>{props.data}</p>
            </>
        )
}

export default Product;