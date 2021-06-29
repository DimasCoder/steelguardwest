import React, {useState} from 'react'
import './InteriorDoor.css'
import {Link} from "react-router-dom";

const InteriorCard = props => {
    let avalaibility = props.product.available
    let note = props.product.note
    let [previouslyViewed, setPreviouslyViewed] = useState(localStorage.getItem("previouslyViewed") ? JSON.parse(localStorage.getItem("previouslyViewed")) : [])
    let available;
    if (avalaibility) {
        available = <span className="span-available">На складі</span>
    }
    else{
        available = <span className="span-unavailable">Привеземо</span>
    }

    let image = 'data:image/png;base64,' + props.product.file.data;


    let toPriceFormat = (e) => {
        e = "" + e
        e = e.substring(0,e.length - 3) + ' ' + e.substring(e.length - 3)
        return e
    }

    const addToLocalStorage = (product) => {
        previouslyViewed = previouslyViewed.slice()
        let alreadyViewed = false;
        previouslyViewed.forEach((item) => {
            if (item.id === product.id) {
                alreadyViewed = true
            }
        });
        if (!alreadyViewed && previouslyViewed.length < 3) {
            previouslyViewed = [...previouslyViewed, product]
        } else if (!alreadyViewed && previouslyViewed.length === 3) {
            previouslyViewed.shift()
            previouslyViewed = [...previouslyViewed, product]
        }
        localStorage.setItem("previouslyViewed", JSON.stringify(previouslyViewed));
    }

    return (
        <Link to={`/interiorDoor/${props.product.id}`} className="door-card-container">
            <img
                src={image}
                alt={"Міжкімнатні двері BRAMA " + props.product.model}
                className="door-logo"/>
            <div className="door-card-header">
                <p>Модель: {props.product.model}</p>
                {available}
            </div>
            <h3>Міжкімнатні двері Brama {props.product.model} {props.product.color}</h3>
            <div className="door-card-footer">
                <span>{toPriceFormat(props.product.priceCommon)} грн.</span>
                <Link to={`/interiorDoor/${props.product.id}`} className="to-cart"
                         product={props.product.doorName} onClick={() => {addToLocalStorage(props.product)}}>Детальніше</Link>
            </div>

        </Link>
    )
}
export default InteriorCard;
