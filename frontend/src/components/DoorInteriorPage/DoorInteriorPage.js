import React, {Component} from 'react';
import './DoorInteriorPage.css'
import axios from "axios";
import PreviewedDoor from "../PreviewedDoor/PreviewedDoor";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCheckCircle} from '@fortawesome/free-regular-svg-icons'
import {faChevronRight, faTruck, faTag, faPercent} from '@fortawesome/free-solid-svg-icons'
import Loader from "../Loader/Loader";
import logo from "../../assets/logo.png";
import MetaTags from "react-meta-tags";

class DoorInteriorPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            doors: [],
            door: [],
            viewedDoors: [],
            viewedProducts: localStorage.getItem("previouslyViewed") ? JSON.parse(localStorage.getItem("previouslyViewed")) : [],
            image1: '',
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
        axios.get(`/api/interiorDoors/${this.props.match.params.id}`)
            .then(response => response.data)
            .then((data) => {
                this.setState({door: data, image1: data.file})
            });
    }

    findAllDoors() {
        axios.get(`/api/interiorDoors/all`)
            .then(response => response.data)
            .then((data) => {
                this.setState({similarDoors : data, isLoading: false})
            });
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
        if (!this.state.door.available && this.state.door.note === "order"){
            return (
                <div className="availability-container unavailable">
                    <FontAwesomeIcon icon={faTruck}/> <span>?????? ????????????????????</span>
                </div>
            )
        }
        else if (!this.state.door.available && this.state.door.note === "sale"){
            return (
                <div className="availability-container unavailable">
                    <FontAwesomeIcon icon={faTag}/> <span>??????????????????</span>
                </div>
            )
        }
        else if (!this.state.door.available && this.state.door.note === "discount"){
            return (
                <div className="availability-container unavailable">
                    <FontAwesomeIcon icon={faPercent}/> <span>????????????</span>
                </div>
            )
        }
        else if (this.state.door.available) {
            return (
                <div className="availability-container available">
                    <FontAwesomeIcon icon={faCheckCircle}/> <span>???? ????????????</span>
                </div>
            )
        }
    }


    similarDoors(){
        this.state.similarDoors.map((similarDoor) => {
            if(similarDoor.doorType === this.state.door.doorType && similarDoor.id !== this.state.door.id){
                this.state.similarDoors1.push(similarDoor)
            }
            let currentIndex = this.state.similarDoors1.length,  randomIndex;

            while (0 !== currentIndex) {

                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex--;

                [this.state.similarDoors1[currentIndex], this.state.similarDoors1[randomIndex]] = [
                    this.state.similarDoors1[randomIndex], this.state.similarDoors1[currentIndex]];
            }
        })
        let width = window.innerWidth;

        return width > 750 ? this.state.similarDoors1.slice(0,4) : this.state.similarDoors1.slice(0,2)
    }

    render() {
        let {door, image1,viewedProducts, similarDoors, isLoading} = this.state
        let image = 'data:image/png;base64,';

        return (
            <div className="door-info-page">
                <MetaTags>
                    <title>?????????????????????? ?????????? BRAMA {door.model} {door.color}  ???????????? ?? ???????????????? SteelGuardWest</title>
                    <meta id="meta-description" name="description" content="SteelGuardWest - ???????????????? ?????????????? ???????????????????????? ?????????????????? ?????????????? ??????????????????????, ?????????????????? ???????????? SteelGuardWest." />
                    <meta id="og-title" property="og:title" content="SteelGuardWest | ??????????" />
                </MetaTags>
                {!isLoading ? (
                <div className="container">
                    <div className="door-info-page__inner">
                        {door.model !== undefined ? (
                                <div className="door-info-left">
                                    <div className="door-info-top">
                                        <div className="door-image-container">
                                            <img
                                                className="door-image"
                                                src={image + image1.data}
                                                alt={"?????????????????????? ?????????? BRAMA " + door.model + " " + door.color}
                                            />
                                        </div>
                                        <div className="interior-door-main-info">
                                            <h1>?????????????????????? ?????????? Brama {door.model}</h1>
                                            {this.availability()}
                                            <p>????????????: {door.model}</p>
                                            <p>????????????: 60, 70, 80, 90</p>
                                            <label>????????:</label>
                                            <table className="price-table">
                                                <tbody>
                                                <tr>
                                                    <td>???????? ???? ??????????????</td>
                                                    <td>{this.toPriceFormat(door.priceCommon) + " ??????."}</td>
                                                </tr>
                                                <tr>
                                                    <td>???????? ??????????, ?????????????? ???????????????? 80????</td>
                                                    <td>{this.toPriceFormat(door.priceStandard) + " ??????."}</td>
                                                </tr>
                                                <tr>
                                                    <td>???????? ??????????, ?????????????? PROFI 80-100????</td>
                                                    <td>{this.toPriceFormat(door.priceProfi) + " ??????."}</td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div className="door-info-bottom">
                                        <input className="radio" id="one" name="group" type="radio" checked/>
                                        <div className="tabs">
                                            <label className="tab" id="one-tab" htmlFor="one">???????????????????????????? &nbsp;
                                                <FontAwesomeIcon
                                                    icon={faChevronRight}/></label>
                                        </div>
                                        <div className="panels">
                                            <div className="panel" id="one-panel">
                                                <table className="char-table">
                                                    <tbody>
                                                    <tr>
                                                        <td>??????????</td>
                                                        <td>{door.color}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>????????????????</td>
                                                        <td>{door.coating}</td>
                                                    </tr>
                                                    {door.coating === "????????????????????" ?
                                                        <>
                                                        <tr>
                                                            <td>?????????? ???? ??????????</td>
                                                            <td>??????</td>
                                                        </tr>
                                                        <tr>
                                                            <td>???????????????? ???????????? ??????????, ????????????</td>
                                                            <td>??????</td>
                                                        </tr>
                                                        </>:
                                                        <tr>
                                                            <td>?????????????????? ?????????????? ???????????? ???????????????????? ??????????</td>
                                                            <td>??????</td>
                                                        </tr>

                                                    }
                                                    <tr>
                                                        <td>?????????? ?? ????????????????</td>
                                                        <td>{door.coating === "????????????????????" ? "??????" : "????"}</td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                        <p className="similar-products-text">?????????? ????????????</p>
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
                                    <h4>404 ?????????????? <br/>???????? ???????????????? ???? ???????????????? </h4>
                                    <p>?????????????? ???? <a href="/">??????????????</a> ????????????????</p>
                                    </div>
                                </div>
                            </div>}
                        <div className="previously-viewed">
                            <p>???????????? ???? ??????????????????????:</p>
                            {viewedProducts.reverse().map((product) => (
                                    <PreviewedDoor product={product}/>
                            ))}
                        </div>
                    </div>
                </div> ) : <Loader/>}
            </div>
        );

    }
}

export default DoorInteriorPage;
