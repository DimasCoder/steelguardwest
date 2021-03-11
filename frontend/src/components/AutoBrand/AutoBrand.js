import React from 'react';
import './AutoBrand.css'
import logo from "../../assets/bmw-logo.png";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faChevronRight} from '@fortawesome/free-solid-svg-icons'
import {Link} from "react-router-dom";
import MainSection from "../MainSection/MainSection";
import AutoPage from "../AutoPage/AutoPage";

const AutoBrand = props => {
    {/*let full = <div className="auto-brand-container">
        <img
            src={logo}
            alt="Auto"
            className="auto-brand-logo"/>
        <p>Запчастини на BMW</p>
        <span><FontAwesomeIcon icon={faCaretDown}/></span>
        <div className="dropdown-content">
            <a href="#">BMW X5</a>
            <a href="#">BMW X6</a>
            <a href="#">BMW X7</a>
        </div>
    </div>

    let adaptive = */
    }

    return (
        <div className="auto-brand-container">
            <img
                src={require(props.brand.file.url).default}
                alt="Auto"
                className="auto-brand-logo"/>
            <p>Запчастини на {props.brand.brandName}</p>
            <span><FontAwesomeIcon icon={faChevronRight}/></span>
            <div className="dropdown-content">
                {props.brand.models.sort((a, b) => a.modelName.localeCompare(b.modelName)).map((model, index) => (
                    <Link to={`/${props.brand.brandName}/${model.modelName}`.toLowerCase()} name={model.modelName}>{model.modelName}</Link>
                ))}
            </div>
        </div>
    )
}
export default AutoBrand;