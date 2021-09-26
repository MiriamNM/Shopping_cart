// import ModalWithoutStock from "../modalWithStock/ModalWithStock";
import ModalWithStock from "../modalWithStock/ModalWithStock";
import './modalCart.css';

const ModalCart = (props) => {
  const data = props.saveStock.stockSaved;
    // if (props.saveStock.stockSaved == []) {
    //   return (
    //     <div id="miModal" className="modal">
    //         <div className="modal-contenido">
    //           <a href="#"><p>X</p></a>
    //           <ModalWithoutStock />
    //         </div>
    //     </div>
    //   )
    // } else {
    //   return (
    //     <div id="miModal" className="modal">
    //         <div className="modal-contenido">
    //           <a href="#"><p>X</p></a>
    //           <div className="container-cartWthStock">
    //               <div>{props.saveStock.stockSaved.map((item)=>
    //                   <ModalWithStock
    //                     item={item}
    //                     key={item.id}
    //                     handleSaveStock={props.handleSaveStock}
    //                   />
    //                 )}
    //               </div>
    //               <p><strong>Total: $</strong><input type="number"></input></p>
    //               <button>To buy</button>
    //           </div>
    //         </div>
    //     </div>
    //   )
    // }
    return (
      <div id="miModal" className="modal">
          <div className="modal-contenido">
            <a href="#"><p>X</p></a>
            <div className="container-cartWthStock">
                <div>{data.map((item)=>
                    <ModalWithStock
                      item={item}
                      id={props.id}
                      saveStock={props.saveStock}
                      handleSaveData={props.handleSaveData}
                    />
                  )}
                </div>
                <p><strong>Total: $</strong><input type="number"></input></p>
                <button>To buy</button>
            </div>
          </div>
      </div>
    )
}

export default ModalCart;