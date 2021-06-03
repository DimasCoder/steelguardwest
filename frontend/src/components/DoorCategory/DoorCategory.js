import React from 'react';
import './DoorCategory.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCaretRight} from '@fortawesome/free-solid-svg-icons'
import {Link} from "react-router-dom";

const DoorCategory = props => {
    return (
        <li className="door-category-container" tabindex="0">
            <input type="checkbox" id={props.text}/>
            <label for={props.text} className="door-category-text">
            <p>{props.text}</p>
            <span><FontAwesomeIcon icon={faCaretRight}/></span>
            </label>
            <ul className="dropdown-content">
                {console.log("sclas " + props.subClass)}
                {props.subClass.map((sClass) => (
                    <li><Link to={`/${sClass.url}`} onClick={() => {props.setFilter(sClass.filter, sClass.url)}}>{sClass.subClass}</Link></li>
                ) )}
            </ul>
            <ul className="dropdown-content-adaptive">
                {props.subClass.map((sClass) => (
                    <li><Link to={`/${sClass.url}`} onClick={() => {props.setFilter(sClass.filter, sClass.url)}}>{sClass.subClass}</Link></li>
                ) )}
            </ul>
        </li>
    )
}
export default DoorCategory;
