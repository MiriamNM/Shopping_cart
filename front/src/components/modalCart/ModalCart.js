// import {useState} from "react";
import Shopping_cart_icon from '../../assets/Shopping_cart_icon.png';
import './modalCart.css';

const ModalCart = () => {
    // if (!Stock) {
    //     return (
    //         <section>
    //             <Product
    //                 data={props.data}
    //                 saveData={props.saveData}
    //             />
    //         </section>
    //     )
    // } else {
    //     return (
    //         <section className="container-card">
    //             <h2>Products</h2>
    //             <Card
    //                 data={props.data}
    //                 saveData={props.saveData}
    //                 setSaveData={props.setSaveData}
    //                 handleSaveData={props.handleSaveData}
    //             />
    //         </section>
    //     )
    // }


  return (
    <div id="miModal" class="modal">
        <div class="modal-contenido">
            <a href="#">X</a>
            <h2>Mi primer Modal</h2>
            <p>Este es mi primera ventana modal sin utilizar JavaScript.</p>
        </div>  
    </div>
  )
}

export default ModalCart;