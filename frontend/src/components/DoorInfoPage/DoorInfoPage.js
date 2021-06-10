import React, {Component} from 'react';
import './DoorInfoPage.css'
import axios from "axios";
import Line from "../Line/Line";
import ProductCard from "../ProductCard/ProductCard";
import PreviewedDoor from "../PreviewedDoor/PreviewedDoor";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCheckCircle} from '@fortawesome/free-regular-svg-icons'
import {faChevronCircleRight, faChevronRight, faTruck} from '@fortawesome/free-solid-svg-icons'
import Slider from "react-slick";
import Loader from "../Loader/Loader";
import logo from "../../assets/logo.png";

class DoorInfoPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            doors: [],
            door: [],
            viewedDoors: [],
            viewedID: localStorage.getItem("previouslyViewed") ? JSON.parse(localStorage.getItem("previouslyViewed")) : [],
            image1: '',
            isLoading: true
        }
    }

    componentDidMount() {
        this.findDoorById();
        this.findAllDoors();
    }

    findDoorById() {
        axios.get(`/api/doors/${this.props.match.params.id}`)
            .then(response => response.data)
            .then((data) => {
                this.setState({door: data, image1: data.file, isLoading: false})
            });
    }

    findAllDoors() {
        axios.get(`/api/doors/all`)
            .then(response => response.data)
            .then((data) => {
                this.setState({viewedDoors: data, isLoading: false})
            });
    }

    tranlsateDoor(door) {
        if (door === "flatDoor")
            return "Двері в квартиру"
        else if (door === "streetDoor")
            return "Двері на вулицю"
        else if (door === "techDoor")
            return "Технічні двері"
        else if (door === "fireDoor")
            return "Протипожежні двері"
    }

    toPriceFormat(e) {
        e = "" + e
        e = e.substring(0, e.length - 3) + ' ' + e.substring(e.length - 3)
        return e
    }

    viewedDoors(e) {
        let vID = this.state.viewedID;
        if (vID.includes(e)) {
            return true
        } else
            return false
    }

    availability() {
        if (this.state.door.available) {
            return (
                <div className="availability-container available">
                    <FontAwesomeIcon icon={faCheckCircle}/> <span>На складі</span>
                </div>
            )
        } else {
            return (
                <div className="availability-container unavailable">
                    <FontAwesomeIcon icon={faTruck}/> <span>Привеземо</span>
                </div>
            )
        }
    }

    render() {
        let {door, viewedDoors, image1, viewedID, isLoading} = this.state
        let image = 'data:image/png;base64,';
        // console.log(!door.length)
        return (
            <div className="door-info-page">
                {!isLoading ? (
                <div className="container">
                    <div className="door-info-page__inner">
                        {console.log(door.doorName)}
                        {door.doorName !== undefined ? (
                                <div className="door-info-left">
                                    <div className="door-info-top">
                                        <div className="door-image-container">
                                            <img
                                                className="door-image"
                                                src={image + image1.data}/>
                                        </div>
                                        <div className="door-main-info">
                                            <h2>Двері {door.doorName}</h2>
                                            {this.availability()}
                                            <p>Серія: {door.series}</p>
                                            {/*<p>Код товару: {door.code}</p>*/}
                                            <p>Категорія: {this.tranlsateDoor(door.doorType)}</p>
                                            <p>Розмір: 880х2050 / 960х2050</p>
                                            {/*<label>Відкривання:</label>*/}
                                            {/*<div className="select">*/}
                                            {/*    <select value={123} onChange={this.handleChange}*/}
                                            {/*            name="doorType">*/}
                                            {/*        <option value={'wareHouse'}>Праве</option>*/}
                                            {/*        <option value={'streetDoor'}>Ліве</option>*/}
                                            {/*    </select>*/}
                                            {/*</div>*/}
                                            <label>Ціна: </label>
                                            {/*<span>{door1.price.toString()} ГРН.</span>*/}
                                            <span>{this.toPriceFormat(door.price)} ГРН.</span>
                                        </div>
                                    </div>
                                    <div className="door-info-bottom">
                                        {/*<div>*/}
                                        {/*    <button className="tab-button active-button">Характеристикі &nbsp;<FontAwesomeIcon*/}
                                        {/*        icon={faChevronRight}/></button>*/}
                                        {/*    <button className="tab-button">Докладніше &nbsp;<FontAwesomeIcon*/}
                                        {/*        icon={faChevronRight}/></button>*/}
                                        {/*</div>*/}
                                        {/*<div id="chars" className="tab-content">*/}

                                        {/*</div>*/}
                                        {/*<div id="desc-chars" className="tab-content">*/}

                                        {/*</div>*/}
                                        <input className="radio" id="one" name="group" type="radio" checked/>
                                        <input className="radio" id="two" name="group" type="radio"/>
                                        <div className="tabs">
                                            <label className="tab" id="one-tab" htmlFor="one">Характеристикі &nbsp;
                                                <FontAwesomeIcon
                                                    icon={faChevronRight}/></label>
                                            <label className="tab" id="two-tab" htmlFor="two">Докладніше &nbsp;
                                                <FontAwesomeIcon
                                                    icon={faChevronRight}/></label>
                                        </div>
                                        <div className="panels">
                                            <div className="panel" id="one-panel">
                                                <h5 className="panel-title">Характеристики</h5>
                                                <table className="char-table">
                                                    <tbody>
                                                    {door.deviator ? (
                                                        <tr>
                                                            <td>Девіатор</td>
                                                            <td>{door.deviator}</td>
                                                        </tr>
                                                    ) : null}
                                                    <tr>
                                                        <td>Метал полотна</td>
                                                        <td>{door.canvasMetal}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Метал рами</td>
                                                        <td>{door.frameMetal}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Товщина полотна</td>
                                                        <td>{door.canvasThickness}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Товщина рами</td>
                                                        <td>{door.frameThickness}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Заповнення полотна і рами</td>
                                                        <td>{door.canvasFrameFilling}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Зовнішня / внутрішня обробка</td>
                                                        <td>{door.externalInternalFinishing}</td>
                                                    </tr>
                                                    {door.nightValue ? (
                                                        <tr>
                                                            <td>Нічна засувка</td>
                                                            <td>{door.nightValve}</td>
                                                        </tr>
                                                    ) : null}
                                                    <tr>
                                                        <td>Петлі</td>
                                                        <td>{door.hinges}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Протизнімні ригелі</td>
                                                        <td>{door.antiRemovableLedgers}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Ущільнювач</td>
                                                        <td>{door.sealant}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Основний замок</td>
                                                        <td>{door.mainLock}</td>
                                                    </tr>
                                                    {door.additionalLock ? (
                                                        <tr>
                                                            <td>Додатковий замок</td>
                                                            <td>{door.additionalLock}</td>
                                                        </tr>
                                                    ) : null}
                                                    <tr>
                                                        <td>Накладка на поріг з нерж. сталі</td>
                                                        <td>Присутня</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Система захисту</td>
                                                        <td>{door.burglaryResistance}</td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div className="panel" id="two-panel">
                                                <h5 className="panel-title">Двері {door.doorName}</h5>
                                                <h6>Конструкція дверей</h6>
                                                <p>{door.doorConstruction}</p>
                                                <h6>Взломостійкість</h6>
                                                <p>{door.descBurglaryResistance}</p>
                                                <h6>Тепло-шумо ізоляція</h6>
                                                <p>{door.heatSoundIsolation}</p>
                                                <h6>Дизайн</h6>
                                                <p>{door.design}</p>
                                                <iframe width="660" height="370" src={door.video} rel="0"
                                                        enablejsapi="1" modestbranding="0" controls="0" frameBorder="0"
                                                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ) :
                            <div className="door-info-left">
                                <div className="door-info-top">
                                    <div className="page-not-found">
                                        <img
                                            src={logo}
                                            alt="Logo"
                                        />
                                    <h4>404 помилка <br/>Така сторінка не знайдена </h4>
                                    <p>Перейти на <a href="/">головну</a> сторінку</p>
                                    </div>
                                </div>
                            </div>}
                        <div className="previously-viewed">
                            <p>Раніше ви переглядали:</p>
                            {viewedDoors.reverse().map((product) => (
                                this.viewedDoors(product.id) ?
                                    <PreviewedDoor product={product}/>
                                    : null
                            ))}
                        </div>
                    </div>
                </div> ) : <Loader/>}
            </div>
        );

    }
}

export default DoorInfoPage;
