import { getImg } from './helper';
import './pokecard.css';

const Pokecard = ({ name, id, type, experience }) => {
    return (
        <div className="pokecard-container">
            <h3 className="pokecard-name">{name}</h3>
            <img className="pokecard-sprite" src={getImg(id)}></img>
            <p className="pokecard-type">Type: {type}</p>
            <p className="pokecard-experience">EXP: {experience}</p>
        </div>
    );
}

export default Pokecard;