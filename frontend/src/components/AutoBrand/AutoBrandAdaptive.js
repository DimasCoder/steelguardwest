import React from "react";
import './AutoBrandAdaptive.css';
import logo from "../../assets/bmw-logo.png";

const AutoBrandAdaptive = props => (
    <div className="auto-brand-adaptive-container">
            <img
                src={logo}
                alt="Auto"
                className="auto-brand-adaptive-logo"/>
            <p>BMW</p>
    </div>
)

export default AutoBrandAdaptive;