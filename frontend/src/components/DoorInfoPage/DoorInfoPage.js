import React, {Component} from 'react';
import './DoorInfoPage.css'
import axios from "axios";
import PreviewedDoor from "../PreviewedDoor/PreviewedDoor";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCheckCircle} from '@fortawesome/free-regular-svg-icons'
import {faChevronRight, faPercent, faTag, faTruck} from '@fortawesome/free-solid-svg-icons'
import Loader from "../Loader/Loader";
import logo from "../../assets/logo.png";
import MetaTags from "react-meta-tags";

class DoorInfoPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            doors: [],
            door: [],
            viewedDoors: [],
            viewedProducts: localStorage.getItem("previouslyViewed") ? JSON.parse(localStorage.getItem("previouslyViewed")) : [],
            image1: '',
            image2: '',
            isLoading: true,
            similarDoors: [],
            similarDoors1: []
        }
        this.similarDoors = this.similarDoors.bind(this)
    }

    componentDidMount() {
        this.findDoorById();
        this.findAllDoors();
        window.scrollTo(0, 0)
        this.similarDoors();
    }

    findDoorById() {
        axios.get(`/api/doors/${this.props.match.params.id}`)
            .then(response => response.data)
            .then((data) => {
                this.setState({door: data, image1: data.file})
            });
    }

    findAllDoors() {
        axios.get(`/api/doors/all`)
            .then(response => response.data)
            .then((data) => {
                this.setState({similarDoors: data, isLoading: false})
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

    availability() {
        if (!this.state.door.available && this.state.door.note === "order") {
            return (
                <div className="availability-container unavailable">
                    <FontAwesomeIcon icon={faTruck}/> <span>Під замовлення</span>
                </div>
            )
        } else if (!this.state.door.available && this.state.door.note === "sale") {
            return (
                <div className="availability-container unavailable">
                    <FontAwesomeIcon icon={faTag}/> <span>Розпродаж</span>
                </div>
            )
        } else if (!this.state.door.available && this.state.door.note === "discount") {
            return (
                <div className="availability-container unavailable">
                    <FontAwesomeIcon icon={faPercent}/> <span>Уцінка</span>
                </div>
            )
        } else if (this.state.door.available) {
            return (
                <div className="availability-container available">
                    <FontAwesomeIcon icon={faCheckCircle}/> <span>На складі</span>
                </div>
            )
        }
    }


    similarDoors() {
        this.state.similarDoors.map((similarDoor) => {
            if (similarDoor.doorType === this.state.door.doorType && similarDoor.id !== this.state.door.id) {
                this.state.similarDoors1.push(similarDoor)
            }
            let currentIndex = this.state.similarDoors1.length, randomIndex;

            while (0 !== currentIndex) {

                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex--;

                [this.state.similarDoors1[currentIndex], this.state.similarDoors1[randomIndex]] = [
                    this.state.similarDoors1[randomIndex], this.state.similarDoors1[currentIndex]];
            }
        })
        let width = window.innerWidth;

        return width > 750 ? this.state.similarDoors1.slice(0, 4) : this.state.similarDoors1.slice(0, 1)
    }

    render() {
        let {door, image1, viewedProducts, similarDoors, isLoading} = this.state
        let image = 'data:image/png;base64,';

        return (
            <div className="door-info-page">
                <MetaTags>
                    <title>Двері {door.doorName} купити в магазині SteelGuardWest</title>
                    <meta id="meta-description" name="description"
                          content="SteelGuardWest - інтернет магазин Українського виробника вхідних броньованих, металевих дверей SteelGuardWest."/>
                    <meta id="og-title" property="og:title" content="SteelGuardWest | Двері"/>
                </MetaTags>
                {!isLoading ? (
                    <div className="container">
                        <div className="door-info-page__inner">
                            {door.doorName !== undefined ? (
                                    <div className="door-info-left">
                                        <div className="door-info-top">
                                            <div className="door-image-container">
                                                <img
                                                    className="door-image"
                                                    src={image + image1.data}
                                                    alt={"Двері " + door.doorName}/>
                                            </div>
                                            <div className="door-main-info">
                                                <h1>Двері {door.doorName}</h1>
                                                {this.availability()}
                                                <p>Серія: {door.series}</p>
                                                <p>Категорія: {this.tranlsateDoor(door.doorType)}</p>
                                                <p>Розмір: {door.size}</p>
                                                <label>Ціна:</label>
                                                <span>{door.note === "order" ? "Під замовлення" : this.toPriceFormat(door.price) + " ГРН."} </span>
                                            </div>
                                        </div>
                                        <div className="door-info-bottom">
                                            <input className="radio" id="one" name="group" type="radio" checked/>
                                            {door.doorConstruction ?
                                                <input className="radio" id="two" name="group" type="radio"/>
                                                : null
                                            }
                                            <div className="tabs">
                                                <label className="tab" id="one-tab" htmlFor="one">Характеристикі &nbsp;
                                                    <FontAwesomeIcon
                                                        icon={faChevronRight}/></label>
                                                {door.doorConstruction ?

                                                    <label className="tab" id="two-tab" htmlFor="two">Докладніше &nbsp;
                                                        <FontAwesomeIcon
                                                            icon={faChevronRight}/></label>
                                                    : null}
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
                                                            <td>{door.sealant} контури</td>
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
                                                            <td>{door.doorSill === true ? "Присутня" : "Відсутня"}</td>
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
                                            <p className="similar-products-text">Схожі товари</p>
                                            <div className="similar-products">
                                                {this.similarDoors().map((product) => (
                                                    <PreviewedDoor product={product}/>
                                                ))}
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
                                {viewedProducts.reverse().map((product) => (
                                    <PreviewedDoor product={product}/>
                                ))}
                            </div>
                        </div>
                    </div>) : <Loader/>}
            </div>
        );

    }
}

export default DoorInfoPage;
