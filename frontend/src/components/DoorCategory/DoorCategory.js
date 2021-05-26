import React from 'react';
import './DoorCategory.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCaretRight} from '@fortawesome/free-solid-svg-icons'
import {Link} from "react-router-dom";

const DoorCategory = props => {
    return (
        <div className="door-category-container">
            <p>{props.text}</p>
            <span><FontAwesomeIcon icon={faCaretRight}/></span>
            <div className="dropdown-content">
                {console.log("sclas " + props.subClass)}
                {props.subClass.map((sClass) => (
                    <Link to={`/` + sClass.url} onClick={() => {props.setFilter(sClass.filter, sClass.url)}}>{sClass.subClass}</Link>
                ) )}
            </div>
        </div>
    )
}
export default DoorCategory;
