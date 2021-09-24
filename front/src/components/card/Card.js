import Art from '../art/Art';
import './card.css';

const Card = (props) => {
        return (
            <div className="container-card">
                {/* {props.data} */}
                {props.data.map((item, id) => 
                    <Art  
                        item={item} 
                        key={item.id}
                        handleSaveData={props.handleSaveData}

                    />)}
            </div>
        )
}

export default Card;