import React, {Component} from 'react';
// import './FilteredCatalog.css '
import axios from "axios";
import ProductCard from "../ProductCard/ProductCard";

class FilteredCatalog extends Component {
    constructor() {
        super();
        this.state = {
            products: [],
            title: 'Вхідні двері'
        }
    }

    setTitle = () => {
        if (this.props.typeFilter === 'flatDoor')
            return 'Двері в квартиру'
        else if (this.props.typeFilter === 'streetDoor')
            return 'Двері на вулицю'
        else
            return 'Всі двері'
    }

    componentDidMount() {
        this.findFilteredProducts();
    }

    findFilteredProducts() {
        axios.get("http://localhost:8080/doors/?" + this.props.typeFilter + "=" + this.props.filter )
            .then(response => response.data)
            .then((data) => {
                this.setState({products: data, isLoading: false})
            });
    }


    render() {
        const {products} = this.state
        return (
            <div>
                {products.map((product) => (
                    <ProductCard product={product}/>
                ))}
            </div>
        );
    }
}

export default FilteredCatalog;
