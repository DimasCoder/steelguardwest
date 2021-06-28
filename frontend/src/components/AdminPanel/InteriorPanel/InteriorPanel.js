import React, {Component} from 'react';
import axios from "axios";

class InteriorPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            model: '',
            color: '',
            coating: 'Ламіновані',
            priceCommon: null,
            priceStandard: null,
            priceProfi: null,
            count: '',
            additionalImage: '',
            image: "https://image.flaticon.com/icons/png/512/37/37543.png",
            file: ''
        }
        this.inputChange = this.inputChange.bind(this);
        this.handleChange = this.handleChange.bind(this);
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

    handleChange(e) {
        const {name, value} = e.target;
        this.setState({[name]: value})
    }

    findAllProducts() {
        axios.get("/api/interiorDoors/all")
            .then(response => response.data)
            .then((data) => {
                this.setState({products: data, isLoading: false})
            });
    }

    postProduct = () => {
        let data = new FormData();
        data.append('model', this.state.model);
        data.append('color', this.state.color);
        data.append('coating', this.state.coating);
        data.append('priceCommon', this.state.priceCommon);
        data.append('priceStandard', this.state.priceStandard);
        data.append('priceProfi', this.state.priceProfi);
        data.append('count', this.state.count);
        data.append('additionalImage', this.state.additionalImage);
        data.append('file', this.state.file);
        axios.post("/api/interiorDoors/",
            data
        )
        //window.location.reload(true);
    }

    deleteProduct = (id) => {
        axios.delete("/api/interiorDoors/" + id)
            .then(respone => {
                if (respone.data != null) {
                    this.setState({
                        products: this.state.products.filter(product => product.id !== id)
                    })
                }
            })
    }

    render() {
        const {
            model,
            color,
            coating,
            priceCommon,
            priceStandard,
            priceProfi,
            count,
            additionalImage,
            file, image
        } = this.state
        let img = 'data:image/png;base64,';
        return (
            <div>
                <div className="add-brand">
                    <h3>Добавити міжкімнатні двері</h3>
                    <div className="add-brand_inner">
                        <div className="row-group">
                            <div className="add-brand-group">
                                <label>Модель дверей</label>
                                <input className="review-form-input" required={true} type="input"
                                       value={model}
                                       name="model"
                                       onChange={this.inputChange} placeholder="Назва дверей"/>
                            </div>
                            <div className="add-brand-group">
                                <label>Колір дверей</label>
                                <input className="review-form-input" required={true} type="input"
                                       value={color}
                                       name="color"
                                       onChange={this.inputChange} placeholder="Ціна 1 дверей"/>
                            </div>
                            <div className="add-brand-group">
                                <label>Покриття дверей</label>
                                <select value={coating} onChange={this.handleChange}
                                        name="coating">
                                    <option value={'Ламіновані'}>Ламіновані</option>
                                    <option value={'Фарбовані'}>Фарбовані</option>
                                </select>
                            </div>
                        </div>
                        <div className="row-group">
                            <div className="add-brand-group">
                                <label>Ціна 1 дверей</label>
                                <input className="review-form-input" required={true} type="input"
                                       value={priceCommon}
                                       name="priceCommon"
                                       onChange={this.inputChange} placeholder="Ціна 1 дверей"/>
                            </div>
                            <div className="add-brand-group">
                                <label>Ціна 2 дверей</label>
                                <input className="review-form-input" required={true} type="input"
                                       value={priceStandard}
                                       name="priceStandard"
                                       onChange={this.inputChange} placeholder="Ціна 2 дверей"/>
                            </div>
                            <div className="add-brand-group">
                                <label>Ціна 3 дверей</label>
                                <input className="review-form-input" required={true} type="input"
                                       value={priceProfi}
                                       name="priceProfi"
                                       onChange={this.inputChange} placeholder="Ціна 3 дверей"/>
                            </div>
                            <div className="add-brand-group">
                                <label>Кількість</label>
                                <input className="review-form-input" required={true} type="input"
                                       value={count}
                                       name="count"
                                       onChange={this.inputChange} placeholder="Ціна 3 дверей"/>
                            </div>
                        </div>
                        <div className="row-group">
                            <div className="row-group">
                                <div className="add-brand-group">
                                    <label>Додаткове фото</label>
                                    <input className="review-form-input" required={true} type="input"
                                              value={additionalImage}
                                              name="additionalImage"
                                              onChange={this.inputChange} placeholder="Додаткове фото"/>
                                </div>
                            </div>
                            <div className="add-brand-group">
                                <label className="choose-image" htmlFor="file">Вибрати основне фото</label>
                                <input type="file" name="file" id="file" hidden
                                       onChange={this.onFileChangeHandler}/>
                            </div>
                            <div className="add-brand-group">
                                <img
                                    className="add-brand-image"
                                    src={image}
                                />
                            </div>
                        </div>
                        <button className="btn-add-brand" type="submit"
                                onClick={this.postProduct}>
                            <a>Добавити</a>
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default InteriorPanel;
