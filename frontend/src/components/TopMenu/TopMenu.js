import React, {Component} from 'react'
import "./TopMenu.css"
import Line from "../Line/Line";
import DoorCategory from "../DoorCategory/DoorCategory";
import axios from "axios";
import Backdrop from "../Backdrop/Backdrop";
import def1 from "../../assets/site-banner-antivzlom2-765x268.jpg"
import def2 from "../../assets/site-banner-antivzlom3-765x268.jpg"
import Loader from "../Loader/Loader";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Link, NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCaretRight} from "@fortawesome/free-solid-svg-icons";

export default class TopMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            brands: [],
            streetDoor: [{subClass: "Преміум", filter: 30000, url: 'streetDoor'},
                {subClass: "Стандарт", filter: 20000, url: 'streetDoor'},
                {subClass: "Економ", filter: 10000, url: 'streetDoor'}],
            flatDoor: [{subClass: "Преміум", filter: 30000, url: 'flatDoor'},
                {subClass: "Стандарт", filter: 20000, url: 'flatDoor'},
                {subClass: "Економ", filter: 10000, url: 'flatDoor'}],
            techDoor: [{subClass: "Технічні", filter: 'Forte+', url: 'techDoor'},
                {subClass: "Протипожежні", filter: 'Maxima', url: 'fireDoor'}],
            interiorDoor: [{subClass: "TM «BRAMA» складська програма", filter: 'flatDoor', url: 'interiorDoor'}]
        };
    }


    componentDidMount() {
        this.findAllBrands();
    }

    findAllBrands() {
        axios.get("/api/brand/all")
            .then(response => response.data)
            .then((data) => {
                this.setState({brands: data, isLoading: false})

            });
    }

    render() {
        const {isLoading, brands, streetDoor, flatDoor, techDoor, interiorDoor} = this.state
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
        return (
            <div className="top-menu">
                <div>
                    <div className="top-menu-container">
                        <div className="door-categories">
                            <h2>Каталог дверей</h2>
                            <Line/>
                            <ul className="notAdaptive">
                                <DoorCategory text={"Складська програма"} subClass={streetDoor}
                                              setFilter={this.props.setFilter}/>
                                <DoorCategory text={"Двері на вулицю"} subClass={streetDoor}
                                              setFilter={this.props.setFilter}/>
                                <DoorCategory text={"Двері в квартиру"} subClass={flatDoor}
                                              setFilter={this.props.setFilter}/>
                                <DoorCategory text={"Технічні двері"} subClass={techDoor}
                                              setFilter={this.props.setFilter}/>
                                <DoorCategory text={"Міжкімнатні двері"} subClass={interiorDoor}
                                              setFilter={this.props.setFilter}/>
                                {/*<DoorCategory text={"Протипожежні двері"} setFilter={this.props.setFilter}/>*/}
                            </ul>
                        </div>
                        <div className="carousel">
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
                    </div>
                </div>
            </div>
        )
    }
}
