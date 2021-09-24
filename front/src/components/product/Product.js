import DetailsProduct from "../detailsProduct/DetailsProduct"
import './product.css';

const Product = (props) => {
    const data = props.saveData.dataSaved;
        return (
            <div className="container-description">
                {data.map((item)=>
                    <DetailsProduct item={item} id={props.id} saveData={props.saveData}/>
                )}
            </div>
        )
}

export default Product;