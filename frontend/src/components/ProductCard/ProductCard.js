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

    let url = ''

    if(props.product.doorType === 'Квартирні'){
        url = 'flat-door'
    }else if(props.product.doorType === 'Вуличні') {
        url = 'street-door'
    }else if(props.product.doorType === 'Технічні'){
        url = 'tech-door'
    }else if(props.product.doorType === 'Протипожежні'){
        url = 'fire-door'
    }

    return (
        <div className="door-card-container">
            <img
                src={image}
                alt="Auto"
                className="door-logo"/>
            <p>Двері {props.product.doorName}</p>

            {/*<div>*/}
            {/*    <div className="availability">*/}
            {/*        {available}*/}
            {/*    </div>*/}
            {/*</div>*/}

            <div className="door-card-footer">
                    <span>{props.product.price} грн.</span>{console.log(props.product)}
                <NavLink to={`/${url}/${props.product.doorName.replace(' ', '-')}`.toLowerCase()} className="to-cart" product={props.product.doorName}>Детальніше</NavLink>
            </div>

        </div>
    )}
export default ProductCard;
