import React from 'react'
import './AutoBrandCard.css'
import logo from '../../assets/rem-komplect.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCheckCircle, faTimesCircle} from '@fortawesome/free-solid-svg-icons'

const AutoBrandCard = props => {
    let avalaibility = true
    let available
    if(avalaibility){
        available = <div>В наявності <FontAwesomeIcon style={{ color: "green" }} icon={faCheckCircle} /></div>
    }else{
        available = <div>Нема в наявності <FontAwesomeIcon style={{ color: "red" }} icon={faTimesCircle} /></div>
    }
    return (
        <div className="auto-card-container">
            <p>Ремкомплект ГРМ с водяным насосом INA 530 0191 30</p>
            <img
                src={logo}
                alt="Auto"
                className="auto-logo"/>
            <div className="auto-brand-card-footer">
                <div>
                    <p className="price">Ціна</p>
                    <span>599 грн</span>
                </div>
                <div className="availability">
                    {available}
                </div>
            </div>

        </div>
    )}
export default AutoBrandCard;