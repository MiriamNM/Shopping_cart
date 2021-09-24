import Art from '../art/Art';
import './card.css';

const Card = (props) => {
        return (
            <div className="container-card">
                {/* {props.data} */}
                {props.data.map((item, image) => <Art  item={item} key={item.id}/>)}
            </div>
        )
}

export default Card;