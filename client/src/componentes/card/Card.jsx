import React from 'react';
import style from './Card.module.css';
import {Link} from 'react-router-dom';

const Card = (props)=>{

    const { id, name, image, types} = props;
    // console.log(id);
    

return(
    <div className={style.card}>
        <Link to={`/detail/${id}`}>
        <h3>{name}</h3>
        <img src={image} alt='foto'/>
        <p>{types.join(' | ')}</p>
        </Link>
    </div>
)
};

export default Card;