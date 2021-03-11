import React, {Component} from 'react';
import axios from "axios";
import AutoBrand from "./AutoBrand/AutoBrand";

class BrandForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            brand: '',
            file: '',
            brands: [],
            model: '',
            brandID: 1
        }
        this.inputChange = this.inputChange.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    inputChange = (e) =>{
        const { name, value } = e.target;
        this.setState({ [name]: value })
    }

    onFileChangeHandler = (e) => {
        e.preventDefault();
        this.setState({
            file: e.target.files[0]
        });

    };

    handleChange(e) {
        console.log(e.target.value);
        this.setState({ brandID: e.target.value });
    }

    postAutoBrand = () => {
        let data = new FormData();
        data.append('file', this.state.file);
        data.append('brand', this.state.brand);
        axios.post("/api/brand",
            data, {headers: {"Content-type": "multipart/form-data"}}
        )
    }

    postAutoModel  = () => {
        let data = new FormData();
        data.append('model', this.state.model);
        data.append('brand', this.state.brandID);
        axios.post("/api/model",
            data
        )
    }

    componentDidMount() {
        this.findAllBrands();
    }

    findAllBrands() {
        axios.get("/api/brand/all")
            .then(response => response.data)
            .then((data) => {
                this.setState({brands: data})
            });
    }


    render() {
        const {brand, model, brandID, brands} = this.state
        return (
            <div className="container">
                <div style={{display: "block"}}>
                <p>Марка машини</p>
                <input className="review-form-input" required={true} type="input" value={brand}
                       name="brand"
                       onChange={this.inputChange} placeholder="Марка машини"/>
                <label>Upload Your File </label>
                <input type="file" name="file" onChange={this.onFileChangeHandler}/>
                <button type="submit" onClick={this.postAutoBrand}><a
                    >Добавити машину</a></button>
                </div>
                <div style={{display: "block"}}>
                    <p>Модель машини</p>
                    <select value={brandID} onChange={this.handleChange} name="cars">
                        {brands.map((brand, index) => (
                            <option key={index} value={brand.id}>{brand.brandName}</option>
                        ))}
                    </select>
                    <input className="review-form-input" required={true} type="input" value={model}
                           name="model"
                           onChange={this.inputChange} placeholder="Модель машини"/>
                    <button type="submit" onClick={this.postAutoModel}><a
                        href="/">Добавити модель</a></button>
                </div>
            </div>
        );
    }
}

export default BrandForm;