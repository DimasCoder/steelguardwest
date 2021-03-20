import React, {Component} from 'react';
import './AdminPanel.css'
import AuthService from "../../services/auth.service";
import axios from "axios";
import {Redirect} from "react-router-dom";
import Line from "../Line/Line";
import AutoBrand from "../AutoBrand/AutoBrand";
import Loader from "../Loader/Loader";
import AdminLink from "./AdminLink/AdminLink";
import AdminData from "./AdminData/AdminData";
import ProductPanel from "./ProductPanel/ProductPanel";

class AdminPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            brand: '',
            file: '',
            brands: [],
            models: [],
            products: [],
            model: '',
            brandID: 602,
            redirect: null,
            userReady: false,
            currentUser: {username: ""},
            showBrands: true,
            showModels: false,
            showProducts: false,
            image: "https://image.flaticon.com/icons/png/512/37/37543.png",
            isLoading: true
        }
        console.log(this.props.currentUser)
        this.inputChange = this.inputChange.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.showBrand = this.showBrand.bind(this);
        this.showModel = this.showModel.bind(this);
        this.showProduct = this.showProduct.bind(this);
        this.deleteBrand = this.deleteBrand.bind(this);
        this.deleteModel = this.deleteModel.bind(this);
    }

    componentDidMount() {
        const currentUser = AuthService.getCurrentUser();

        if (!currentUser) this.setState({redirect: "/"});
        this.setState({currentUser: currentUser, userReady: true})
        this.findAllBrands();
        this.findAllModels();

    }

    /*Inputs*/

    inputChange = (e) => {
        const {name, value} = e.target;
        this.setState({[name]: value})
    }

    onFileChangeHandler = (e) => {
        const reader = new FileReader();
        reader.onload = () => {
            if (reader.readyState === 2) {
                this.setState({image: reader.result})
            }
        }
        reader.readAsDataURL(e.target.files[0])
        e.preventDefault();
        this.setState({
            file: e.target.files[0]
        });

    };

    handleChange(e) {
        this.setState({brandID: e.target.value});
    }

    /*End of inputs*/

    /*AutoBrand*/

    findAllBrands() {
        axios.get("/api/brand/all")
            .then(response => response.data)
            .then((data) => {
                this.setState({brands: data, isLoading: false})
            });
    }

    postBrand = () => {
        let data = new FormData();
        data.append('file', this.state.file);
        data.append('brand', this.state.brand);
        axios.post("/api/brand",
            data, {headers: {"Content-type": "multipart/form-data"}}
        )
        window.location.reload(true);
    }

    deleteBrand = (id) => {
        axios.delete("api/brand/" + id)
            .then(respone => {
                if (respone.data != null) {
                    this.setState({
                        brands: this.state.brands.filter(brand => brand.id !== id)
                    })
                }
            })
    }

    showBrand() {
        this.setState({showBrands: true, showModels: false, showProducts: false})
    }

    /*End of AutoBrand*/

    /*AutoModel*/

    findAllModels() {
        axios.get("/api/model/all")
            .then(response => response.data)
            .then((data) => {
                this.setState({models: data, isLoading: false})
            });
    }

    postModel = () => {
        let data = new FormData();
        data.append('model', this.state.model);
        data.append('brand', this.state.brandID);
        axios.post("/api/model",
            data
        )
        window.location.reload(true);
    }

    deleteModel = (id) => {
        axios.delete("api/model/" + id)
            .then(respone => {
                if (respone.data != null) {
                    this.setState({
                        models: this.state.models.filter(model => model.id !== id)
                    })
                }
            })
    }


    showModel() {
        this.setState({showBrands: false, showModels: true, showProducts: false})
    }

    /*End of AutoModel*/

    /*Product*/


    showProduct() {
        this.setState({showBrands: false, showModels: false, showProducts: true})
    }

    /*End of Product*/


    render() {
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect}/>
        }
        const {model, brandID,} = this.state
        const {isLoading, showBrands, showModels, showProducts, brand, brands, models, image} = this.state
        console.log(showBrands)
        return (
            <div className="container">
                {(this.state.userReady) ?
                    <div className="admin-container">
                        {/*<div>*/}
                        {/*    <p>Модель машини</p>*/}
                        {/*    <select value={brandID} onChange={this.handleChange} name="cars">*/}
                        {/*        {brands.map((brand, index) => (*/}
                        {/*            <option key={index} value={brand.id}>{brand.brandName}</option>*/}
                        {/*        ))}*/}
                        {/*    </select>*/}
                        {/*    <input className="review-form-input" required={true} type="input" value={model}*/}
                        {/*           name="model"*/}
                        {/*           onChange={this.inputChange} placeholder="Модель машини"/>*/}
                        {/*    <button type="submit" onClick={this.postAutoModel}><a*/}
                        {/*    >Добавити модель</a></button>*/}
                        {/*</div>*/}
                        <div className="admin-category">
                            <div className="admin-category-container">
                                <div className="admin-category-header">
                                    <h2>Адмін-меню</h2>
                                    <a href="/admin" className="admin-logout"
                                       onClick={() => {
                                           this.props.logOut()
                                       }}>
                                        Вийти
                                    </a>
                                </div>
                                <Line/>
                                <AdminLink name="Марки" click={this.showBrand}/>
                                <AdminLink name="Моделі" click={this.showModel}/>
                                <AdminLink name="Товари" click={this.showProduct}/>
                            </div>
                        </div>
                        <div className="admin-content">

                            {showBrands && !isLoading ? (
                                    <div>
                                        <div className="add-brand">
                                            <h3>Добавити модель</h3>
                                            <div className="add-brand_inner">
                                                <div className="add-brand-group">
                                                    <label>Модель машини</label>
                                                    <input className="review-form-input" required={true} type="input"
                                                           value={brand}
                                                           name="brand"
                                                           onChange={this.inputChange} placeholder="Марка машини"/>
                                                </div>
                                                <div className="add-brand-group">
                                                    <label className="choose-image" for="file">Вибрати фото</label>
                                                    <input type="file" name="file" id="file" hidden
                                                           onChange={this.onFileChangeHandler}/>
                                                </div>
                                                <div className="add-brand-group">
                                                    <img
                                                        className="add-brand-image"
                                                        src={image}
                                                    />
                                                </div>
                                                <button className="btn-add-brand" type="submit"
                                                        onClick={this.postBrand}>
                                                    <a>Добавити</a>
                                                </button>
                                            </div>
                                        </div>
                                        {brands.map((brand, index) => (
                                            <AdminData key={index} data={brand} remove={this.deleteBrand}/>
                                        ))}

                                    </div>
                                )
                                : showModels && !isLoading ?
                                    (<div>
                                            <div className="add-brand">
                                                <h3>Добавити марку</h3>
                                                <div className="add-brand_inner">
                                                    <div className="add-brand-group">
                                                        <label>Марка машини</label>
                                                        <select value={brandID} onChange={this.handleChange}
                                                                name="cars">
                                                            {brands.map((brand, index) => (
                                                                <option key={index}
                                                                        value={brand.id}>{brand.brandName}</option>
                                                            ))}
                                                        </select>
                                                    </div>
                                                    <div className="add-brand-group">
                                                        <label>Модель машини</label>
                                                        <input className="review-form-input" required={true}
                                                               type="input"
                                                               value={model}
                                                               name="model"
                                                               onChange={this.inputChange} placeholder="Модель машини"/>
                                                    </div>

                                                    <button className="btn-add-brand" type="submit"
                                                            onClick={this.postModel}>
                                                        <a>Добавити</a>
                                                    </button>
                                                </div>
                                            </div>
                                            {brands.map((brand, index) => (
                                                <div className="admin-data-model">
                                                    <img
                                                        src={'data:image/png;base64,' + brand.file.data}
                                                        alt="Admin data"
                                                        className="model-img"
                                                    />
                                                    <p>{brand.brandName}</p>
                                                    {brand.models.map(model => (
                                                        <AdminData key={index} data={model} remove={this.deleteModel}/>
                                                    ))}
                                                </div>

                                            ))}
                                        </div>
                                    )
                                    : showProducts && !isLoading ?
                                        (
                                            <ProductPanel/>
                                        )
                                        : (<Loader/>)

                            }
                        </div>
                        <div>

                        </div>
                    </div>
                    : null}

            </div>
        );
    }
}

export default AdminPanel;
