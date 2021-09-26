import Art from '../art/Art';
import './card.css';

const Card = (props) => {
        return (
            <div className="container-card">
                {/* {props.data} */}
                {props.data.map((item) =>
                    <Art
                        item={item}
                        key={item.id}
                        data={props.data}
                        handleSaveData={props.handleSaveData}
                        saveStock={props.saveStock}
                        setSaveStock={props.setSaveStock}
                        // handleSaveStock={props.handleSaveStock}
                    />)}
            </div>
        )
}

export default Card;