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
        this.state = {
            products: [],
            search: '',
            title: 'Вхідні двері'
        }
    }

    componentDidMount() {
        this.findAllProducts();
    }

    findAllProducts() {
        axios.get("/doors/all")
            .then(response => response.data)
            .then((data) => {
                this.setState({products: data, isLoading: false})
            });
    }

    inputSearch = (e) => {
        this.setState({search: e.target.value})
    }

    setTitle = () => {
        if (this.props.typeFilter === 'flatDoor')
            return 'Двері в квартиру'
        else if (this.props.typeFilter === 'streetDoor')
            return 'Двері на вулицю'
        else
            return 'Всі двері'
    }


    render() {
        console.log("filter " + this.props.filter)
        console.log("q " + this.props.q)
        const {products, title} = this.state;
        let filteredProducts = products.filter(
            (product) => {
                if (this.props.q !== '' && this.props.q !== undefined)
                    return product.doorName.toLowerCase().indexOf(this.props.q.toLowerCase()) !== -1;
                else if (this.props.typeFilter === "techDoor")
                    return product.series === this.props.filter;
                else if (this.props.typeFilter === "fireDoor")
                    return product.series === this.props.filter;
                else if (this.props.filter !== '' && this.props.filter !== undefined && this.props.typeFilter !== null)
                    return product.price <= this.props.filter && product.price >= this.props.filter - 10000 && product.doorType === this.props.typeFilter
                return product
            }
        )
        return (
            <div className="catalog-container">
                <div className="catalog">
                    <h2>{this.setTitle()}</h2>
                    <div className="catalog-doors">
                        {filteredProducts.map((product, index) => (
                            <ProductCard cartItems={this.props.cartItems} addToCart={this.props.addToCart}
                                         product={product}/>
                        ))}
                    </div>
                </div>
                <div className="additional-info">
                    <h3>Акції</h3>
                    <Line/>
                    <a href="/flatDoor">Комплектация входных металлических дверей ТМ STEELGUARD стала еще лучше!</a>
                    <p>Теперь и навсегда – бонус для покупателей входных дверей ТМ STEELGUARD- два замка Kale (Турция)- панели из влагостойкого МДФ Влагостойкий МДФЕсли вы выбираете входную дверь с МДФ панелями, обратите внимание на то, какой именно МДФ использует ...</p>
                    <Line/>
                </div>
            </div>
        )
    }
}


export default Catalog;
