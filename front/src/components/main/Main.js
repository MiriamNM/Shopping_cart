import { useRouteMatch } from "react-router-dom";
import Card from "../card/Card";
import Product from "../product/Product";

import './main.css';

const Main = (props) => {
    let match = useRouteMatch("/item");

    if (!!match) {
        return (
            <section>
                <Product response={props.response}/>
            </section>
        )
    } else {
        return (
            <section>
                <h2>Products</h2>
                <Card response={props.response}/>
            </section>
        )
    }
}

export default Main;