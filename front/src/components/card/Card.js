import Art from '../art/Art';
import './card.css';

const Card = (props) => {
        return (
            <div className="container-card">
                {/* <p>{props.response}</p> */}
                {props.response.map((item) => <Art  item={item} key={item.id}/>)}
            </div>
        )
}

export default Card;