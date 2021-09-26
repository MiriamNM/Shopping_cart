import DetailsProduct from "../detailsProduct/DetailsProduct"
import './product.css';

const Product = (props) => {
    const data = props.saveData.dataSaved;
        return (
            <div className="container-description">
                {data.map((item)=>
                    <DetailsProduct 
                        item={item}
                        id={props.id}
                        data={props.data}
                        saveData={props.saveData}
                        saveStock={props.saveStock}
                        setSaveStock={props.setSaveStock}
                        // handleSaveStock={props.handleSaveStock}
                    />
                )}
            </div>
        )
}

export default Product;