import React, {useEffect, useState} from 'react';
import "./Catalog.css"
import Line from "../Line/Line";
import ProductCard from '../ProductCard/ProductCard'
import axios from "axios";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope} from "@fortawesome/free-regular-svg-icons";
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
            );
                let interior = await axios(
                    "/api/interiorDoors/all",
                );
                setProducts(product.data);
                setInterior(interior.data);
                setIsLoading(false)
            };

            fetchData();
        }, []);


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

    console.log(props.q)
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
                            <h1>?????? ??????????</h1>
                            <div className="filter__inner">
                                <input type="checkbox" id="filter-checkbox"/>
                                <label htmlFor="filter-checkbox" className="filter-label">
                                    ?????????????? <FontAwesomeIcon icon={faFilter}/>
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
                            {series.length < 1 && props.q === '' ?
                                interior.map((product, index) => (<InteriorCard product={product}/>)

                                ) : null}

                        </div>
                    </div>
                    <div className="additional-info">
                        <h3>??????????</h3>
                        <Line/>
                        <a href="/flatDoor">???????????????????????? ?????????????? ?????????????????? ???????????? ???? STEELGUARD ?????????? ???? ??????????!</a>
                        <p>?????????? ?? ???????????????? - ?????????? ?????? ???????????????? ?????????????? ???????????? ???? STEELGUARD- ?????? ?????????? Kale
                            (??????????????????) - ???????????? ?? ???????????????????????????? ?????? ?????????????????????????? ?????????????? ???? ?????????????????? ????????????
                            ?????????? ?? ?????? ????????????????, ???????????????? ?????????? ???? ????, ???????? ???????? ?????? ???????????????????????? ...</p>
                        <Line/>
                        <div className="subscribe-container">
                            <FontAwesomeIcon className="subscribe-icon" icon={faEnvelope}/>
                            <h4>?????????????????????? ???? ????????????????!</h4>
                            <p>?????????????????????? ?? ?????????? ???????????????? ?????????? ?? ????????????????????????????</p>
                            <input name="email" value={email} onChange={inputChange} type="email"
                                   placeholder="Email"/>
                            <button type="button" className="subscribe-button" onClick={subscribeEmail}><a
                                href="/">??????????????????????</a></button>

                        </div>
                    </div>
                </div>
                : <Loader/>}
        </div>
    )
}


export default Catalog;
