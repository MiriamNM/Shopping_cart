import ModalWithoutStock from "../modalWithStock/ModalWithStock";
import ModalWithStock from "../modalWithStock/ModalWithStock";
import './modalCart.css';

const ModalCart = (props) => {
  if (props.saveStock.length === 0) {
    return (
      <div id="miModal" className="modal">
          <div className="modal-contenido">
            <a href="#"><p>X</p></a>
            <ModalWithoutStock />
          </div>
      </div>
    )
  } else {
    return (
      <div id="miModal" className="modal">
          <div className="modal-contenido">
            <a href="#"><p>X</p></a>
            <div className="container-cartWthStock">
                <div>{props.data.map((item)=>
                    <ModalWithStock
                      item={item}
                      id={props.id}
                      data={props.data}
                      saveStock={props.saveStock}
                      setSaveStock={props.setSaveStock}
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
}

export default ModalCart;