import React, {Component} from 'react'
import "./TopMenu.css"
import Line from "../Line/Line";
import DoorCategory from "../DoorCategory/DoorCategory";
import axios from "axios";
import def1 from "../../assets/banner1.jpg"
import def2 from "../../assets/banner2.jpg"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {NavLink} from "react-router-dom";

export default class TopMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            brands: [],
            warehouseDoor: [{subClass: "Складська програма", minPrice: 0, maxPrice: 35000, filter:true, url: '/doors/warehouse'}],
            streetDoor: [{subClass: "Преміум", minPrice: 22700, maxPrice: 35000, url: '/doors/streetDoor'},
                {subClass: "Стандарт", minPrice: 11200, maxPrice: 22700, url: '/doors/streetDoor'},
                {subClass: "Економ", minPrice: 0, maxPrice: 11200, url: '/doors/streetDoor'}],
            flatDoor: [{subClass: "Преміум", minPrice: 22700, maxPrice: 35000, url: '/doors/flatDoor'},
                {subClass: "Стандарт", minPrice: 11200, maxPrice: 22700, url: '/doors/flatDoor'},
                {subClass: "Економ", minPrice: 0, maxPrice: 11200, url: '/doors/flatDoor'}],
            techDoor: [{subClass: "Технічні", minPrice: 0, maxPrice: 35000, url: '/doors/techDoor'},
                {subClass: "Протипожежні", minPrice: 0, maxPrice: 35000, url: '/doors/fireDoor'}],
            interiorDoor: [{subClass: "TM «BRAMA» складська програма", minPrice: 0, maxPrice: 35000, url: '/doors/interiorDoors'}]
        };
    }

    render() {
        const {isLoading, warehouseDoor, streetDoor, flatDoor, techDoor, interiorDoor} = this.state
        const settings = {
            dots: true,
            infinite: true,
            autoplay: true,
            fade:true,
            lazyLoad: true,
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
                                <DoorCategory text={"Складська програма"} url="/doors/warehouse" subClass={warehouseDoor}
                                              setFilter={this.props.setFilter}/>
                                <DoorCategory text={"Двері на вулицю"} url="/doors/streetDoor" subClass={streetDoor}
                                              setFilter={this.props.setFilter}/>
                                <DoorCategory text={"Двері в квартиру"} url="/doors/flatDoor" subClass={flatDoor}
                                              setFilter={this.props.setFilter}/>
                                <DoorCategory text={"Технічні двері"} url="/doors/techDoor" subClass={techDoor}
                                              setFilter={this.props.setFilter}/>
                                <DoorCategory text={"Міжкімнатні двері"} url="/doors/interiorDoors" subClass={interiorDoor}
                                              setFilter={this.props.setFilter}/>
                                {/*<DoorCategory text={"Протипожежні двері"} setFilter={this.props.setFilter}/>*/}
                            </ul>
                        </div>
                        <div className="carousel">
                            <div style={{width: '75%'}}>
                            <Slider {...settings}>
                                <img className="carousel-image" src={def1} alt={"Захисти свій дім Steelguard"}/>
                                <img className="carousel-image" src={def2} alt={"Зламостійкі двері Steelguard"}/>

                            </Slider>
                            </div>

                            <div className="carousel-text">
                                <article>Захисти свій дім</article>
                                <p>вибирай сертифіковані зламостійкі вхідні двері</p>
                                <NavLink exact to="/protected-door" className="protected-door-link">Детальніше</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
