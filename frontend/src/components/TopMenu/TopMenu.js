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
import {NavLink} from "react-router-dom";

export default class TopMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            brands: [],
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
        const {isLoading, brands} = this.state
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
                <div className="top-menu-container">
                    <div className="door-categories">
                        <h2>Каталог дверей</h2>
                        <Line/>
                        <div className="notAdaptive">
                            {!isLoading ? (

                                    brands.map((brand, index) => (
                                        <DoorCategory key={index} brand={brand}/>
                                    )))
                                :
                                (<Loader/>)
                            }
                        </div>
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
        )
    }
}
