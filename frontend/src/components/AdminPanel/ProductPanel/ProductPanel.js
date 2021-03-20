import React, {Component} from 'react';
import axios from "axios";
import AuthService from "../../../services/auth.service";
import AdminData from "../AdminData/AdminData";

class ProductPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            productName: '',
            price: 0,
            code: 0,
            file: '',
            image: "https://image.flaticon.com/icons/png/512/37/37543.png",
            isLoading: true
        }
        this.inputChange = this.inputChange.bind(this);

    }

    componentDidMount() {
        this.findAllProducts();
    }

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

    findAllProducts() {
        axios.get("/api/product/all")
            .then(response => response.data)
            .then((data) => {
                this.setState({products: data, isLoading: false})
            });
    }

    postProduct = () => {
        let data = new FormData();
        data.append('productName', this.state.productName);
        data.append('price', this.state.price);
        data.append('code', this.state.code);
        data.append('file', this.state.file);
        axios.post("/api/product",
            data
        )
        window.location.reload(true);
    }

    deleteProduct = (id) => {
        axios.delete("api/product/" + id)
            .then(respone => {
                if (respone.data != null) {
                    this.setState({
                        products: this.state.models.filter(product => product.id !== id)
                    })
                }
            })
    }

    render() {
        const {products, productName, price, code, image} = this.state;
        return (
                <div>
                    <div className="add-brand">
                        <h3>Добавити товар</h3>
                        <div className="add-brand_inner">
                            <div className="add-brand-group">
                                <label>Назва товару</label>
                                <input className="review-form-input" required={true} type="input"
                                       value={productName}
                                       name="productName"
                                       onChange={this.inputChange} placeholder="Назва товару"/>
                            </div>
                            <div className="add-brand-group">
                                <label>Ціна товару</label>
                                <input className="review-form-input" required={true} type="input"
                                       value={price}
                                       name="price"
                                       onChange={this.inputChange} placeholder="Ціна товару"/>
                            </div>
                            <div className="add-brand-group">
                                <label>Код товару</label>
                                <input className="review-form-input" required={true} type="input"
                                       value={code}
                                       name="code"
                                       onChange={this.inputChange} placeholder="Код товару"/>
                            </div>
                            <div className="add-brand-group">
                                <label className="choose-image" htmlFor="file">Вибрати фото</label>
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
                                    onClick={this.postProduct}>
                                <a>Добавити</a>
                            </button>
                        </div>
                    </div>
                    {products.map((product, index) => (
                        <AdminData key={index} data={product} remove={this.deleteProduct}/>
                    ))}
            </div>
        );
    }
}


export default ProductPanel;
