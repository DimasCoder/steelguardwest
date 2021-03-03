import React from 'react';
import "./Catalog.css"
import Line from "../Line/Line";
import AutoBrandCard from '../AutoBrandCard/AutoBrandCard'


const Catalog = props => (
    <div className="catalog-container">
            <h2>Популярні товари</h2>
            <Line/>
            <div className="catalog-brands">
                <AutoBrandCard/>
                <AutoBrandCard/>
                <AutoBrandCard/>
                <AutoBrandCard/>
                <AutoBrandCard/>
                <AutoBrandCard/>
                <AutoBrandCard/>
                <AutoBrandCard/>
                <AutoBrandCard/>
                <AutoBrandCard/>
                <AutoBrandCard/>
                <AutoBrandCard/>
                <AutoBrandCard/>
                <AutoBrandCard/>
                <AutoBrandCard/>
                <AutoBrandCard/>
                <AutoBrandCard/>
                <AutoBrandCard/>
                <AutoBrandCard/>
                <AutoBrandCard/>
                <AutoBrandCard/>
            </div>
    </div>
)


export default Catalog;