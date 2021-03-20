import React from 'react'
import './ProductCard.css'
import logo from '../../assets/rem-komplect.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCheckCircle, faTimesCircle} from '@fortawesome/free-solid-svg-icons'

const ProductCard = props => {
    let avalaibility = props.product.productName
    let available
    if(avalaibility){
        available = <div>В наявності <FontAwesomeIcon style={{ color: "green" }} icon={faCheckCircle} /></div>
    }else{
        available = <div>Нема в наявності <FontAwesomeIcon style={{ color: "red" }} icon={faTimesCircle} /></div>
    }

    //let image = 'data:image/png;base64,' + props.product.file.data;

    return (

        <div className="auto-card-container">
            <p>{props.product.productName}</p>
            <img
                src={logo}
                alt="Auto"
                className="auto-logo"/>
            <div className="auto-brand-card-footer">
                <div>
                    <p className="price">Ціна</p>
                    <span>{props.product.price} грн</span>
                </div>
                <div className="availability">
                    {available}
                </div>
            </div>

        </div>
    )}
export default ProductCard;
