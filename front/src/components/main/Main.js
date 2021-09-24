import { useRouteMatch } from "react-router-dom";
import Card from "../card/Card";
import Product from "../product/Product";

import './main.css';

const Main = (props) => {
    let match = useRouteMatch("/item");

    if (!!match) {
        return (
            <section>
                <Product
                    data={props.data}
                    saveData={props.saveData}
                />
            </section>
        )
    } else {
        return (
            <section className="container-card">
                <h2>Products</h2>
                <Card
                    data={props.data}
                    saveData={props.saveData}
                    setSaveData={props.setSaveData}
                    handleSaveData={props.handleSaveData}
                />
            </section>
        )
    }
}

export default Main;