import React from "react";
import './AutoBrandAdaptive.css';
import logo from "../../assets/bmw-logo.png";

const AutoBrandAdaptive = props => {
    let image = 'data:image/png;base64,' + props.brand.file.data;

    return(
        <div className="auto-brand-adaptive-container">
            <img
                src={image}
                alt="Auto"
                className="auto-brand-adaptive-logo"/>
            <p>{props.brand.brandName}</p>
        </div>
    )
}

export default AutoBrandAdaptive;
