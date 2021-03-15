import React from 'react';
import "./Catalog.css"
import Line from "../Line/Line";
import ProductCard from '../ProductCard/ProductCard'


const Catalog = props => (
    <div className="catalog-container">
            <h2>Популярні товари</h2>
            <Line/>
            <div className="catalog-brands">
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
            </div>
    </div>
)


export default Catalog;