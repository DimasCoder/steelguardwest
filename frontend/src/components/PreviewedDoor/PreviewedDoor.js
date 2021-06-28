import React, {useState} from 'react'
import './PreviewedDoor.css'
import {Link, NavLink} from "react-router-dom";

const PreviewedDoor = props => {
    let avalaibility = props.product.available
    let note = props.product.note
    let [previouslyViewed, setPreviouslyViewed] = useState(localStorage.getItem("previouslyViewed") ? JSON.parse(localStorage.getItem("previouslyViewed")) : [])
    let available, url;
    if (!avalaibility && note === "order") {
        available = <span className="span-unavailable">Під замовлення</span>
    } else if(!avalaibility && note === "sale") {
        available = <span className="span-unavailable">Розпродаж</span>
    }else if(!avalaibility && note === "discount") {
        available = <span className="span-unavailable">Уцінка</span>
    }else if(avalaibility) {
        available = <span className="span-available">На складі</span>
    }

    if(props.product.model === undefined)
        url = "door"
    else
        url = "interiorDoor"

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
        <a href={`/${url}/${props.product.id}`} className="door-card-container">
            <img
                src={image}
                alt="Auto"
                className="door-logo"/>
            <div className="door-card-header">
                <p>Серія: {props.product.series}</p>
                {available}
            </div>
            {props.product.doorName !== undefined ?
                <h3>Двері {props.product.doorName}</h3>
                : <h3>Міжкімнатні двері Brama {props.product.model} {props.product.color}</h3>

            }

            <div className="doorPrev-card-footer">
                {props.product.price !== undefined ?
                    <span>{toPriceFormat(props.product.price)} грн.</span>
                    : <span>{toPriceFormat(props.product.priceCommon)} грн.</span>
                }
                {props.product.model === undefined ?
                    <a href={`/door/${props.product.id}`} className="to-cart"
                       product={props.product.doorName} onClick={() => {addToLocalStorage(props.product)}}>Детальніше</a>
                    :
                    <a href={`/interiorDoor/${props.product.id}`} className="to-cart"
                       product={props.product.doorName} onClick={() => {addToLocalStorage(props.product)}}>Детальніше</a>
                }

            </div>

        </a>
    )
}
export default PreviewedDoor;
