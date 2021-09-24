import { useRouteMatch } from "react-router-dom";
import Card from "../card/Card";
import Product from "../product/Product";

import './main.css';

const Main = (props) => {
    let match = useRouteMatch("/item");

    if (!!match) {
        return (
            <section>
                <Product data={props.data}/>
            </section>
        )
    } else {
        return (
            <section className="container-card">
                <h2>Products</h2>
                <Card data={props.data}/>
            </section>
        )
    }
}

export default Main;