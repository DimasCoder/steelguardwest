import React from 'react';
import './SearchSection.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import mercedes from '../../assets/mercedes1.png'

const SearchSection = props => (
    <div className="search-section-container">
        <div className="search-container">
            <FontAwesomeIcon className="search-icon" icon={faSearch} />
            <input className="input-search" type="text" placeholder="Пошук, підбір"/>
        </div>
        <img
            src={mercedes}
            className="mercedes-image"
            alt="Mercedes"/>
    </div>
)

export default SearchSection