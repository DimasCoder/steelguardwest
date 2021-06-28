import React, {Component, useEffect, useState} from 'react';
import "./Catalog.css"
import Line from "../Line/Line";
import ProductCard from '../ProductCard/ProductCard'
import axios from "axios";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope} from "@fortawesome/free-regular-svg-icons";
import {NavLink} from "react-router-dom";
import Loader from "../Loader/Loader";
import {faFilter} from "@fortawesome/free-solid-svg-icons";
import InteriorCard from "../InteriorCard/InteriorCard";


function Catalog(props){


    const [products, setProducts] = useState([])
    const [interior, setInterior] = useState([])
    const [search, setSearch] = useState('')
    const [email, setEmail] = useState('')
    const [series, setSeries] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [filter, setFilter] = useState(true)


    useEffect(() => {
            const fetchData = async () => {
                let product = await axios(
                    "/api/doors/all",
                    setIsLoading(false)
            );
                let interior = await axios(
                    "/api/interiorDoors/all",
                );
                setProducts(product.data);
                setInterior(interior.data)
            };

            fetchData();
        }, []);


    const findAllProducts = () => {
        axios.get("/api/doors/all")
            .then(response => response.data)
            .then((data) => {
                setProducts(data);
                setIsLoading(false);
            });
    }

    const findInteriorDoors = () => {
        axios.get("/api/doors/all")
            .then(response => response.data)
            .then((data) => {
                setProducts([...products, data]);
                setIsLoading(false);
            });
    }

    const inputSearch = (e) => {
        this.setState({search: e.target.value})
    }

    const subscribeEmail = () => {
        axios.post("api/emails/", {
            email: this.state.email
        })
    }

    const inputChange = (e) => {
        const {name, value} = e.target;
        this.setState({[name]: value})
    }

    const changeSeries = (e) => {
        if (series.includes(e.target.value)) {
            setSeries(series.filter(function (ele) {
                return ele !== e.target.value
            }))
        } else {
            setSeries([...series, e.target.value])
        }
    }

    let filteredProducts = products.filter(
        (product) => {
            if (series.length > 0) {
                return series.includes(product.series);
            } else if (props.q !== '' && props.q !== undefined)
                return product.doorName.toLowerCase().indexOf(props.q.toLowerCase()) !== -1;
            return product
        }
    )

    return (
        <div className="catalog-container">
            {!isLoading ?
                <div className="catalog-container__inner">
                    <div className="catalog">
                        <div className="catalog-top">
                            <h2>Всі двері</h2>
                            <div className="filter__inner">
                                <input type="checkbox" id="filter-checkbox"/>
                                <label htmlFor="filter-checkbox" className="filter-label">
                                    Фільтри <FontAwesomeIcon icon={faFilter}/>
                                </label>
                                <div className="checkbox-filter-catalog">
                                    <div className="check-container">
                                        <input type="checkbox" id="forza" name="forza" value="Forza"
                                               onChange={changeSeries}
                                               checked={series.includes("Forza")}/>
                                        <label htmlFor="forza">Forza</label>
                                    </div>
                                    <div className="check-container">
                                        <input type="checkbox" id="alta" name="alta" value="Alta"
                                               onChange={changeSeries}
                                               checked={series.includes("Alta")}/>
                                        <label htmlFor="alta">Alta</label>
                                    </div>
                                    <div className="check-container">
                                        <input type="checkbox" id="vela" name="vela" value="Vela"
                                               onChange={changeSeries}
                                               checked={series.includes("Vela")}/>
                                        <label htmlFor="vela">Vela</label>
                                    </div>
                                    <div className="check-container">
                                        <input type="checkbox" id="maxima" name="maxima" value="Maxima"
                                               onChange={changeSeries}
                                               checked={series.includes("Maxima")}/>
                                        <label htmlFor="maxima">Maxima</label>
                                    </div>
                                    <div className="check-container">
                                        <input type="checkbox" id="devi-u" name="devi-u" value="Devi-U"
                                               onChange={changeSeries}
                                               checked={series.includes("Devi-U")}/>
                                        <label htmlFor="devi-u">Devi-U</label>
                                    </div>
                                    <div className="check-container">
                                        <input type="checkbox" id="forte+" name="forte+" value="Forte+"
                                               onChange={changeSeries}
                                               checked={series.includes("Forte+")}/>
                                        <label htmlFor="forte+">Forte+</label>
                                    </div>
                                    <div className="check-container">
                                        <input type="checkbox" id="antifrost-10" name="antifrost-10"
                                               value="Antifrost-10"
                                               onChange={changeSeries} checked={series.includes("Antifrost-10")}/>
                                        <label htmlFor="antifrost-10">Antifrost-10</label>
                                    </div>
                                    <div className="check-container">
                                        <input type="checkbox" id="tech" name="tech" value="Tech"
                                               onChange={changeSeries}
                                               checked={series.includes("Tech")}/>
                                        <label htmlFor="tech">Tech</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="catalog-doors">
                            {filteredProducts.map((product, index) => (
                                <ProductCard product={product}/>
                            ))}
                            {series.length < 1 ?
                                interior.map((product, index) => (<InteriorCard product={product}/>)

                                ) : null}

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
                            <input name="email" value={email} onChange={inputChange} type="email"
                                   placeholder="Email"/>
                            <button type="button" className="subscribe-button" onClick={subscribeEmail}><a
                                href="/">Підписатися</a></button>

                        </div>
                    </div>
                </div>
                : <Loader/>}
        </div>
    )
}


export default Catalog;
