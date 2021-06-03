import React from 'react'
import './ProductCard.css'
import logo from '../../assets/rem-komplect.jpg'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCheckCircle, faTimesCircle} from '@fortawesome/free-solid-svg-icons'
import {NavLink} from "react-router-dom";

const ProductCard = props => {
    let avalaibility = props.product.available
    let available;
    if (avalaibility) {
        available = <span className="span-available">В наявності</span>
    } else {
        available = <span className="span-unavailable">Нема в наявності</span>
    }

    let image = 'data:image/png;base64,' + props.product.file.data;


    let toPriceFormat = (e) => {
        e = e.toString()
        e = e.substring(0,e.length - 3) + ' ' + e.substring(e.length - 3)
        return e
    }

    return (
        <div className="door-card-container">
            <img
                src={image}
                alt="Auto"
                className="door-logo"/>
            <div className="door-card-header">
                <p>Код: {props.product.code}</p>
                {available}
            </div>
            <h3>Двері {props.product.doorName}</h3>

            <div className="door-card-footer">
                <span>{toPriceFormat(props.product.price)} грн.</span>
                {/*<NavLink to={`/doors/${props.product.doorType}/${props.product.doorName.replace(' ', '-')}`.toLowerCase()} className="to-cart"*/}
                {/*         product={props.product.doorName}>Детальніше</NavLink>*/}
                <NavLink to={`/test/doors/${props.product.id}`} className="to-cart"
                         product={props.product.doorName}>Детальніше</NavLink>
            </div>

        </div>
    )
}
export default ProductCard;
