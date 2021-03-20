import React, {Component} from 'react'
import "./SideCategory.css"
import Line from "../Line/Line";
import AutoBrand from "../AutoBrand/AutoBrand";
import AutoBrandAdaptive from "../AutoBrand/AutoBrandAdaptive";
import axios from "axios";
import Backdrop from "../Backdrop/Backdrop";
import Loader from "../Loader/Loader";
import UserService from "../../services/user.service";

export default class SideCategory extends Component {
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
        return (
            <div className="side-category">
                <div className="side-category-container">
                    <h2>Марка авто</h2>
                    <Line/>
                    <div className="notAdaptive">
                    {!isLoading ? (

                            brands.map((brand, index) => (
                                <AutoBrand key={index} brand={brand}/>
                            )))
                        :
                        (<Loader/>)
                    }
                    </div>
                    <div className="adaptive">
                        {!isLoading ? (

                                brands.map((brand, index) => (
                                    <AutoBrandAdaptive key={index} brand={brand}/>
                                )))
                            :
                            (<Loader/>)
                        }
                    </div>

                </div>
            </div>
        )
    }
}
