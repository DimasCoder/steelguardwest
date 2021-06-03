import React, {Component} from 'react';
import './DoorInfoPage.css'
import axios from "axios";
import Line from "../Line/Line";

class DoorInfoPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            doors: [],
            door: [],
            door1: [],
            image1 : ''
        }
    }

    componentDidMount() {
        this.findAllDoors();
    }

    findAllDoors() {
        axios.get(`/api/doors/${this.props.match.params.id}`)
            .then(response => response.data)
            .then((data) => {
                this.setState({door: data, image1 : data.file, isLoading: false})
            });
    }

    tranlsateDoor(door) {
        if (door === "flatDoor")
            return "Двері в квартиру"
        else if (door === "streetDoor")
            return "Двері на вулицю"
        else if (door === "techDoor")
            return "Технічні двері"
        else if (door === "fireDoor")
            return "Протипожежні двері"
    }

    toPriceFormat(e){
        e = "" + e
        e = e.substring(0,e.length - 3) + ' ' + e.substring(e.length - 3)
        return e
    }

    render() {
        let {door, door1, image1} = this.state
        let image = 'data:image/png;base64,';
        door1 = door
        return (
            <div className="door-info-page">
                {console.log(door)}
                        <div className="container">
                            <div className="door-info-page__inner">
                                <div className="door-info-top">
                                    <div className="door-image-container">
                                        <img
                                            className="door-image"
                                            src={image + image1.data}/>
                                    </div>
                                    <div className="door-main-info">
                                        <h2>Двері {door.doorName}</h2>
                                        <p>Наявність: {door.available ? "На складі" : "Привеземо"}</p>
                                        {/*<p>Код товару: {door.code}</p>*/}
                                        <p>Категорія: {this.tranlsateDoor(door.doorType)}</p>
                                        <label>Розмір:</label>
                                        <div className="select">
                                            <select value={123} onChange={this.handleChange}
                                                    name="doorType">
                                                <option value={'wareHouse'}>880x2050</option>
                                                <option value={'streetDoor'}>960x250</option>
                                            </select>
                                        </div>
                                        <label>Відкривання:</label>
                                        <div className="select">
                                            <select value={123} onChange={this.handleChange}
                                                    name="doorType">
                                                <option value={'wareHouse'}>Праве</option>
                                                <option value={'streetDoor'}>Ліве</option>
                                            </select>
                                        </div>
                                        <label>Ціна: </label>
                                        {/*<span>{door1.price.toString()} ГРН.</span>*/}
                                        <span>{this.toPriceFormat(door.price)} ГРН.</span>
                                    </div>
                                </div>
                                <div>

                                </div>
                            </div>
                        </div>
            </div>
        );
    }
}

export default DoorInfoPage;
