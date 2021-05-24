import React from 'react'
import './ProductCard.css'
import logo from '../../assets/rem-komplect.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCheckCircle, faTimesCircle} from '@fortawesome/free-solid-svg-icons'
import {NavLink} from "react-router-dom";

const ProductCard = props => {
    let avalaibility = props.product.available
    let available;
    if(avalaibility){
        available = <span className="span-available"><p>В наявності</p> <FontAwesomeIcon style={{ color: "green" }} icon={faCheckCircle} /></span>
    }else{
        available = <span className="span-available"><p>Нема в наявності</p> <FontAwesomeIcon style={{ color: "red" }} icon={faTimesCircle} /></span>
    }

    let image = 'data:image/png;base64,' + props.product.file.data;

    return (

        <div className="door-card-container">
            <img
                src={image}
                alt="Auto"
                className="door-logo"/>
            <p>Двері {props.product.productName}</p>

            {/*<div>*/}
            {/*    <div className="availability">*/}
            {/*        {available}*/}
            {/*    </div>*/}
            {/*</div>*/}

            <div className="door-card-footer">
                    <span>{props.product.price} грн.</span>
                    <NavLink to={`/${props.product.id}`.toLowerCase()} className="to-cart">Детальніше</NavLink>
            </div>

        </div>
    )}
export default ProductCard;
