import React from 'react';
import './DoorCategory.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCaretRight} from '@fortawesome/free-solid-svg-icons'
import {Link} from "react-router-dom";

const DoorCategory = props => {
    let image = 'data:image/png;base64,' + props.brand.file.data;
    return (
        <div className="door-category-container">
            <p>Двері на {props.brand.brandName}</p>
            <span><FontAwesomeIcon icon={faCaretRight}/></span>
            <div className="dropdown-content">
                {props.brand.models.sort((a, b) => a.modelName.localeCompare(b.modelName)).map((model, index) => (
                    <Link to={`/${props.brand.brandName}/${model.modelName}`.toLowerCase()} name={model.modelName}>{model.modelName}</Link>
                ))}
            </div>
        </div>
    )
}
export default DoorCategory;
