import React, {Component} from 'react';
import "./Catalog.css"
import Line from "../Line/Line";
import ProductCard from '../ProductCard/ProductCard'
import axios from "axios";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import mercedes from "../../assets/mercedes1.png";


class Catalog extends Component {
    constructor() {
        super();
        this.state ={
            products: [],
            search:''
        }
    }

    componentDidMount() {
        this.findAllProducts();
    }

    findAllProducts() {
        axios.get("/api/product/all")
            .then(response => response.data)
            .then((data) => {
                this.setState({products: data, isLoading: false})
            });
    }

    inputSearch = (e) => {
        this.setState({search: e.target.value})
    }



    render() {
        const {products} = this.state;
        let filteredProducts = products.filter(
            (product) => {
                if(this.state.search !== '')
                    return product.productName.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
                else if(this.props.q !== '')
                    return product.code.toString().indexOf(this.props.q) !== -1;
                else
                    return product
            }
        )
        return (
            <div className="catalog-container">
                <div className="search-section-container">
                    <div className="search-container">
                        <FontAwesomeIcon className="search-icon" icon={faSearch}/>
                        <input className="input-search"
                               value={this.search}
                               onChange={this.inputSearch}
                               type="text"
                               placeholder="Пошук по номеру"/>
                    </div>
                    <img
                        src={mercedes}
                        className="mercedes-image"
                        alt="Mercedes"/>
                </div>
                <h2>Популярні товари</h2>
                <Line/>
                {/*<input className="input-search" value={this.search} type="text" placeholder="Пошук, підбір" onChange={this.inputSearch}/>*/}

                <div className="catalog-brands">
                    {filteredProducts.map((product, index) => (
                        <ProductCard product={product}/>
                    ))}
                </div>
            </div>
        )
    }
}


export default Catalog;
