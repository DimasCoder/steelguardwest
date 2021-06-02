import React, {Component, useEffect, useState} from 'react';
import './FilteredCatalog.css'
import axios from "axios";
import ProductCard from "../ProductCard/ProductCard";
import PageTitle from "../PageTitle/PageTitle";
import {NavLink} from "react-router-dom";
import SliderRange from "@material-ui/core/Slider";
import Slider from "react-slick";
import def2 from "../../assets/site-banner-antivzlom3-765x268.jpg";
import def1 from "../../assets/site-banner-antivzlom2-765x268.jpg";
import {Typography} from "@material-ui/core";

const FilteredCatalog = (props) => {

    const [priceValue, setPriceValue] = useState([0, 35000]);
    const [products, setProducts] = useState([])


    const setTitle = () => {
        if (props.typeFilter === 'flatDoor')
            return 'Двері в квартиру'
        else if (this.props.typeFilter === 'streetDoor')
            return 'Двері на вулицю'
        else
            return 'Всі двері'
    }

    useEffect(() => {
        findFilteredProducts();
    })

    const findFilteredProducts = () => {
        axios.get(`http://localhost:8080/doors/filter/${props.match.params.filter}`)
            .then(response => response.data)
            .then((data) => {
                setProducts(data)
            });
    }

    const rangeSelector = (event, newValue) => {
        setPriceValue(newValue)
    };

    const handleChange = (e) => {
        const {name, value} = e.target;
        this.setState({[name]: value})
    }

    const settings = {
        dots: true,
        infinite: true,
        fade: true,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
    };

    const filteredProducts = products.filter((product) => {
        return product.price < priceValue[1] && product.price > priceValue[0]
    })

    return (
        <div className="container">
            <div className="filtered-catalog__inner">
                <div className="filter">
                    <PageTitle title={"Фільтр"}/>
                    <div>
                        <h4>Ціна:</h4>
                        <Typography id="range-slider" gutterBottom>
                        </Typography>
                        <p>{priceValue[0]} грн. - {priceValue[1]} грн.</p>
                        <SliderRange
                            value={priceValue}
                            onChange={rangeSelector}
                            valueLabelDisplay="auto"
                            aria-labelledby="range-slider"
                            min={0}
                            max={35000}
                            step={1}
                        />
                    </div>
                        <h4>За призначенням: </h4>
                    <div className="check-container">
                        <input type="checkbox" id="street" name="streetDoor" checked/>
                        <label htmlFor="street">Двері на вулицю</label>
                    </div>
                    <div className="check-container">
                        <input type="checkbox" id="flat" name="flatDoor"/>
                        <label htmlFor="flat">Двері в квартиру</label>
                    </div>
                    <div className="check-container">
                        <input type="checkbox" id="techD" name="techDoor"/>
                        <label htmlFor="techD">Технічні двері</label>
                    </div>
                    <div className="check-container">
                        <input type="checkbox" id="fire" name="fireDoor"/>
                        <label htmlFor="fire">Протипожежні двері</label>
                    </div>

                    <h4>За серією: </h4>
                    <div className="check-container">
                        <input type="checkbox" id="forza" name="forza" checked/>
                        <label htmlFor="forza">Forza</label>
                    </div>
                    <div className="check-container">
                        <input type="checkbox" id="alta" name="alta"/>
                        <label htmlFor="alta">Alta</label>
                    </div>
                    <div className="check-container">
                        <input type="checkbox" id="vella" name="vella"/>
                        <label htmlFor="vella">Vella</label>
                    </div>
                    <div className="check-container">
                        <input type="checkbox" id="maxima" name="maxima"/>
                        <label htmlFor="maxima">Maxima</label>
                    </div>
                    <div className="check-container">
                        <input type="checkbox" id="devi-u" name="devi-u"/>
                        <label htmlFor="devi-u">Devi-U</label>
                    </div>
                    <div className="check-container">
                        <input type="checkbox" id="forte+" name="forte+"/>
                        <label htmlFor="forte+">Forte+</label>
                    </div>
                    <div className="check-container">
                        <input type="checkbox" id="antifrost-10" name="antifrost-10"/>
                        <label htmlFor="antifrost-10">Antifrost-10</label>
                    </div>
                    <div className="check-container">
                        <input type="checkbox" id="tech" name="tech"/>
                        <label htmlFor="tech">Tech</label>
                    </div>

                    <h4>За класом зламостійкості: </h4>
                    <div className="check-container">
                        <input type="checkbox" id="RC-4" name="RC-4" checked/>
                        <label htmlFor="RC-4">4 клас зламостійкості RC-4</label>
                    </div>
                    <div className="check-container">
                        <input type="checkbox" id="RC-3" name="RC-3"/>
                        <label htmlFor="RC-3">3 клас зламостійкості RC-3</label>
                    </div>
                    <div className="check-container">
                        <input type="checkbox" id="RC-2" name="RC-2"/>
                        <label htmlFor="RC-2">2 клас зламостійкості RC-2</label>
                    </div>
                </div>
                <div className="filtered-catalog">
                    <div className="carousel-filter">
                        <div className="carousel-text">
                            <article>Захисти свій дім</article>
                            <p>вибирай сертифіковані зламостійкі вхідні двері</p>
                            <NavLink exact to="/protected-door" className="protected-door-link">Детальніше</NavLink>
                        </div>
                        <Slider {...settings}>
                            <img className="carousel-image" src={def2}/>
                            <img className="carousel-image" src={def1}/>
                        </Slider>
                    </div>
                    <div>
                        <div className="sort-container">
                            <p>{setTitle}</p>

                            <div className="select">
                                <label>Сортування: </label>
                                <select value={123} onChange={handleChange}
                                        name="doorType">
                                    <option value={'wareHouse'}>Рейтинг (за зростанням)</option>
                                    <option value={'wareHouse'}>Рейтинг (за спаданням)</option>
                                    <option value={'wareHouse'}>Назва (А -> Я)</option>
                                    <option value={'streetDoor'}>Назва (Я -> А)</option>
                                    <option value={'asd'}>Ціна (за зростанням)</option>
                                    <option value={'at4wer'}>Ціна (за спаданням)</option>
                                    <option value={'ashhrer'}>Модель (А -> Я)</option>
                                    <option value={'htrgrf'}>Модель (Я -> А)</option>
                                </select>
                            </div>
                        </div>
                        {filteredProducts.map((product) => (
                            <ProductCard product={product}/>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FilteredCatalog;
