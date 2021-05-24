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
                if(this.props.q !== '' )
                    return product.productName.toLowerCase().indexOf(this.props.q.toLowerCase()) !== -1;
                return product
            }
        )
        return (
            <div className="catalog-container">
                <h2>Вхідні двері</h2>
                <div className="catalog-brands">
                    {filteredProducts.map((product, index) => (
                        <ProductCard cartItems={this.props.cartItems} addToCart={this.props.addToCart} product={product}/>
                    ))}
                </div>
                <div>

                </div>
            </div>
        )
    }
}


export default Catalog;
