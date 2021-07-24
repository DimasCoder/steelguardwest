import React, {useEffect, useState} from 'react';
import './FilteredCatalog.css'
import axios from "axios";
import PageTitle from "../PageTitle/PageTitle";
import {Link} from "react-router-dom";
import SliderRange from "@material-ui/core/Slider";
import Slider from "react-slick";
import def2 from "../../assets/banner1.jpg";
import def1 from "../../assets/banner2.jpg";
import {Typography} from "@material-ui/core";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFilter} from '@fortawesome/free-solid-svg-icons'
import Loader from "../Loader/Loader";
import PreviewedDoor from "../PreviewedDoor/PreviewedDoor";
import Line from "../Line/Line";
import DoorCategory from "../DoorCategory/DoorCategory";


const FilteredCatalog = (props) => {
    const [priceValue, setPriceValue] = useState(props.filter.length > 1 ? [props.filter[0], props.filter[1]] : [0, 35000]);
    const [resistance, setResistance] = useState([])
    const [series, setSeries] = useState([])
    const [models, setModels] = useState([])
    const [products, setProducts] = useState([])
    const [sort, setSort] = useState("nameAZ")
    const [isLoading, setIsLoading] = useState(true)
    const [streetDoor, setStreetDoor] = useState([{subClass: "Преміум", minPrice: 22700, maxPrice: 35000, url: '/doors/streetDoor'},
        {subClass: "Стандарт", minPrice: 11200, maxPrice: 22700, url: '/doors/streetDoor'},
        {subClass: "Економ", minPrice: 0, maxPrice: 11200, url: '/doors/streetDoor'}])
    const [warehouseDoor, setWarehouseDoor] = useState([{subClass: "Складська програма", minPrice: 0, maxPrice: 35000, filter:true, url: '/doors/warehouse'}])
    const [flatDoor, setFlatDoor] = useState([{subClass: "Преміум", minPrice: 22700, maxPrice: 35000, url: '/doors/flatDoor'},
        {subClass: "Стандарт", minPrice: 11200, maxPrice: 22700, url: '/doors/flatDoor'},
        {subClass: "Економ", minPrice: 0, maxPrice: 11200, url: '/doors/flatDoor'}])
    const [techDoor, setTechDoor] = useState([{subClass: "Технічні", minPrice: 0, maxPrice: 35000, url: '/doors/techDoor'},
        {subClass: "Протипожежні", minPrice: 0, maxPrice: 35000, url: '/doors/fireDoor'}])
    const [interiorDoor, setInteriorDoor] = useState([{subClass: "TM «BRAMA» складська програма", minPrice: 0, maxPrice: 35000, url: '/doors/interiorDoors'}])

    useState(() => {
        window.scrollTo(0, 0)
    })

    useEffect(() => {
        findFilteredProducts();
    })


    const findFilteredProducts = () => {
        if (props.match.params.filter === "interiorDoors") {
            axios.get(`/api/interiorDoors/all`)
                .then(response => response.data)
                .then((data) => {
                    setProducts(data);
                    setIsLoading(false)
                });
        } else if (props.match.params.filter !== "interiorDoors") {
            axios.get(`/api/doors/filter/${props.match.params.filter}`)
                .then(response => response.data)
                .then((data) => {
                    setProducts(data);
                    setIsLoading(false)
                });
        }
    }

    const rangeSelector = (event, newValue) => {
        setPriceValue(newValue)
    };

    const handleChange = (e) => {
        setSort(e.target.value)
    }

    const sortDoors = (e) => {
        if (sort === "nameAZ") {
            return e.sort(function (a, b) {
                if (a.doorName > b.doorName) {
                    return 1;
                }
                if (a.doorName < b.doorName) {
                    return -1;
                }
                return 0;
            })
        } else if (sort === "nameZA") {
            return e.sort(function (a, b) {
                if (a.doorName < b.doorName) {
                    return 1;
                }
                if (a.doorName > b.doorName) {
                    return -1;
                }
                // a должно быть равным b
                return 0;
            })
        } else if (sort === "priceUp") {
            return e.sort(function (a, b) {
                return a.price - b.price;
            })
        } else if (sort === "priceDown") {
            return e.sort(function (a, b) {
                return b.price - a.price;
            })
        } else if (sort === "modelAZ") {
            return e.sort(function (a, b) {
                if (a.series > b.series) {
                    return 1;
                }
                if (a.series < b.series) {
                    return -1;
                }
                // a должно быть равным b
                return 0;
            })
        } else if (sort === "modelZA") {
            return e.sort(function (a, b) {
                if (a.series < b.series) {
                    return 1;
                }
                if (a.series > b.series) {
                    return -1;
                }
                return 0;
            })
        }
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

    const changeModel = (e) => {
        if (models.includes(e.target.value)) {
            setModels(series.filter(function (ele) {
                return ele !== e.target.value
            }))
        } else {
            setModels([...models, e.target.value])
        }
    }

    const settings = {
        dots: true,
        infinite: true,
        lazyLoad: true,
        fade: true,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
    };


    if (props.match.params.filter !== "interiorDoors") {
        var filteredProducts = products.filter((product) => {
            if (series.length > 0) {
                return product.price < priceValue[1] && product.price > priceValue[0] && series.includes(product.series);
            } else
                return product.price < priceValue[1] && product.price > priceValue[0]
        })
    } else {
        var filteredProducts = products.filter((product) => {
            if (models.length > 0) {
                return product.priceCommon < priceValue[1] && product.priceCommon > priceValue[0] && models.includes(product.model);
            } else
                return product.priceCommon < priceValue[1] && product.priceCommon > priceValue[0]
        })
    }


    return (
        <div className="container">
            {!isLoading ?
                <div className="filtered-catalog__inner">

                    <div className="filter">
                        {/*<div className="door-categories-filter">*/}
                        {/*    <h2>Каталог дверей</h2>*/}
                        {/*    <Line/>*/}
                        {/*    <ul className="notAdaptive">*/}
                        {/*        <DoorCategory text={"Складська програма"} url="/doors/warehouse" subClass={warehouseDoor}*/}
                        {/*                      setFilter={props.setFilter}/>*/}
                        {/*        <DoorCategory text={"Двері на вулицю"} url="/doors/streetDoor" subClass={streetDoor}*/}
                        {/*                      setFilter={props.setFilter}/>*/}
                        {/*        <DoorCategory text={"Двері в квартиру"} url="/doors/flatDoor" subClass={flatDoor}*/}
                        {/*                      setFilter={props.setFilter}/>*/}
                        {/*        <DoorCategory text={"Технічні двері"} url="/doors/techDoor" subClass={techDoor}*/}
                        {/*                      setFilter={props.setFilter}/>*/}
                        {/*        <DoorCategory text={"Міжкімнатні двері"} url="/doors/interiorDoors" subClass={interiorDoor}*/}
                        {/*                      setFilter={props.setFilter}/>*/}
                        {/*        /!*<DoorCategory text={"Протипожежні двері"} setFilter={this.props.setFilter}/>*!/*/}
                        {/*    </ul>*/}
                        {/*</div>*/}
                        <PageTitle title={"Фільтр"}/>
                        <input type="checkbox" id="filter-checkbox"/>
                        <label htmlFor="filter-checkbox" className="filter-label">
                            Фільтри <FontAwesomeIcon icon={faFilter}/>
                        </label>
                        <div className="filter__inner">
                            <div>
                                <h4>Ціна:</h4>
                                <Typography id="range-slider" gutterBottom>
                                </Typography>
                                <p>{priceValue[0]} грн. - {priceValue[1]} грн.</p>
                                <div className="price-slider-container">
                                    <SliderRange
                                        value={priceValue}
                                        onChange={rangeSelector}
                                        valueLabelDisplay="auto"
                                        aria-labelledby="range-slider"
                                        min={0}
                                        max={35000}
                                        step={50}
                                    />
                                </div>
                            </div>
                            <div className="checkbox-filter">
                                {props.match.params.filter !== "interiorDoors" ? (
                                        <div>
                                            <h4>За серією: </h4>
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
                                        </div>)
                                    : (
                                        <div>
                                            <h4>За номером моделі: </h4>
                                            <div className="check-container">
                                                <input type="checkbox" id="21" name="21" value="2,1"
                                                       onChange={changeModel}
                                                       checked={models.includes("2,1")}/>
                                                <label htmlFor="21">2.1</label>
                                            </div>
                                            <div className="check-container">
                                                <input type="checkbox" id="71" name="71" value="7,1"
                                                       onChange={changeModel}
                                                       checked={models.includes("7,1")}/>
                                                <label htmlFor="71">7.1</label>
                                            </div>
                                            <div className="check-container">
                                                <input type="checkbox" id="72" name="72" value="7,2"
                                                       onChange={changeModel}
                                                       checked={models.includes("7,2")}/>
                                                <label htmlFor="72">7.2</label>
                                            </div>
                                            <div className="check-container">
                                                <input type="checkbox" id="73" name="73" value="7,3"
                                                       onChange={changeModel}
                                                       checked={models.includes("7,3")}/>
                                                <label htmlFor="73">7.3</label>
                                            </div>
                                            <div className="check-container">
                                                <input type="checkbox" id="74" name="74" value="7,4"
                                                       onChange={changeModel}
                                                       checked={models.includes("7,4")}/>
                                                <label htmlFor="74">7.4</label>
                                            </div>
                                            <div className="check-container">
                                                <input type="checkbox" id="75" name="75" value="7,5"
                                                       onChange={changeModel}
                                                       checked={models.includes("7,5")}/>
                                                <label htmlFor="75">7.5</label>
                                            </div>
                                            <div className="check-container">
                                                <input type="checkbox" id="1829" name="1829" value="18,29"
                                                       onChange={changeModel}
                                                       checked={models.includes("18,29")}/>
                                                <label htmlFor="1829">18.29</label>
                                            </div>
                                            <div className="check-container">
                                                <input type="checkbox" id="1831" name="1831" value="18,31"
                                                       onChange={changeModel}
                                                       checked={models.includes("18,31")}/>
                                                <label htmlFor="1831">18.31</label>
                                            </div>
                                            <div className="check-container">
                                                <input type="checkbox" id="1850" name="1850" value="18,50"
                                                       onChange={changeModel}
                                                       checked={models.includes("18,50")}/>
                                                <label htmlFor="1850">18.50</label>
                                            </div>
                                            <div className="check-container">
                                                <input type="checkbox" id="192" name="192" value="19,2"
                                                       onChange={changeModel}
                                                       checked={models.includes("19,2")}/>
                                                <label htmlFor="192">19.2</label>
                                            </div>

                                            <div className="check-container">
                                                <input type="checkbox" id="193" name="193" value="19,3"
                                                       onChange={changeModel}
                                                       checked={models.includes("19,3")}/>
                                                <label htmlFor="193">19.3</label>
                                            </div>
                                            <div className="check-container">
                                                <input type="checkbox" id="195" name="195" value="19,5"
                                                       onChange={changeModel}
                                                       checked={models.includes("19,5")}/>
                                                <label htmlFor="195">19.5</label>
                                            </div>
                                            <div className="check-container">
                                                <input type="checkbox" id="1932" name="1932" value="19,32"
                                                       onChange={changeModel}
                                                       checked={models.includes("19,32")}/>
                                                <label htmlFor="1932">19.32</label>
                                            </div>
                                        </div>)
                                }


                            </div>
                        </div>
                    </div>
                    <div className="filtered-catalog">
                        <div className="carousel-filter">
                            <div style={{width: '75%'}}>
                                <Slider {...settings}>
                                    <img className="carousel-image" src={def2}/>
                                    <img className="carousel-image" src={def1}/>
                                </Slider>
                            </div>
                            <div className="filter-carousel-text">
                                <article>Захисти свій дім</article>
                                <p>вибирай сертифіковані зламостійкі вхідні двері</p>
                                <Link exact to="/protected-door" className="protected-door-link">Детальніше</Link>
                            </div>
                        </div>
                        <div className="filtered-catalog-bottom">
                            <div className="sort-container">

                                <p>Знайдено {filteredProducts.length} дверей</p>

                                <div className="select">
                                    <label>Сортування: </label>
                                    <select value={sort} onChange={handleChange}
                                            name="sort">
                                        {/*<option value={'ratingUp'}>Рейтинг (за зростанням)</option>*/}
                                        {/*<option value={'ratingDown'}>Рейтинг (за спаданням)</option>*/}
                                        <option value={'nameAZ'}>Назва (А -> Я)</option>
                                        <option value={'nameZA'}>Назва (Я -> А)</option>
                                        <option value={'priceUp'}>Ціна (за зростанням)</option>
                                        <option value={'priceDown'}>Ціна (за спаданням)</option>
                                        <option value={'modelAZ'}>Модель (А -> Я)</option>
                                        <option value={'modelZA'}>Модель (Я -> А)</option>
                                    </select>
                                </div>
                            </div>
                            <div className="filtered-doors">
                                {filteredProducts.length !== 0 ?
                                    sortDoors(filteredProducts).map((product) => (
                                        <PreviewedDoor product={product}/>
                                    )) : <p className="no-filter">Нічого не знайдено</p>}
                            </div>
                        </div>
                    </div>
                </div>
                : <Loader/>}
        </div>
    );
}

export default FilteredCatalog;
