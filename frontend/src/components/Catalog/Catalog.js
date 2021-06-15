import React, {Component} from 'react';
import "./Catalog.css"
import Line from "../Line/Line";
import ProductCard from '../ProductCard/ProductCard'
import axios from "axios";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope} from "@fortawesome/free-regular-svg-icons";
import {NavLink} from "react-router-dom";
import Loader from "../Loader/Loader";


class Catalog extends Component {
    constructor() {
        super();
        this.state = {
            products: [],
            search: '',
            title: 'Вхідні двері',
            isLoading: true,
            email: ''
        }
        this.inputChange = this.inputChange.bind(this);
    }

    componentDidMount() {
        this.findAllProducts();
    }

    findAllProducts() {
        axios.get("/api/doors/all")
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

    subscribeEmail = () => {
        axios.post("api/emails/", {
            email: this.state.email
        })
    }

    inputChange(e) {
        const {name, value} = e.target;

        this.setState({[name]: value})

    }


    render() {
        const {products, email, isLoading} = this.state;
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
                {!isLoading ?
                    <div className="catalog-container__inner">
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
                            <a href="/flatDoor">Комплектація вхідних металевих дверей ТМ STEELGUARD стала ще краще!</a>
                            <p>Тепер і назавжди - бонус для покупців вхідних дверей ТМ STEELGUARD- два замки Kale
                                (Туреччина) - панелі з вологостійкого МДФ Вологостійкий МДФЕслі ви вибираєте вхідні
                                двері з МДФ панелями, зверніть увагу на те, який саме МДФ використовує ...</p>
                            <Line/>
                            <div className="subscribe-container">
                                <FontAwesomeIcon className="subscribe-icon" icon={faEnvelope}/>
                                <h4>Підпишіться на розсилку!</h4>
                                <p>Залишайтеся в курсі останніх новин і спецпропозицій</p>
                                <input name="email" value={email} onChange={this.inputChange} type="email"
                                       placeholder="Email"/>
                                <button type="button" className="subscribe-button" onClick={this.subscribeEmail}><a
                                    href="/">Підписатися</a></button>

                            </div>
                        </div>
                    </div>
                    : <Loader/>}
            </div>
        )
    }
}


export default Catalog;
