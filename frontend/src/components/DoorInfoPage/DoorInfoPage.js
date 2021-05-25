import React, {Component} from 'react';
import './DoorInfoPage.css'
import axios from "axios";
import Line from "../Line/Line";

class DoorInfoPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            doors: [],
            door1: []
        }
    }

    componentDidMount() {
        this.findAllDoors();
    }

    findAllDoors() {
        axios.get(`/api/flatDoor/all`)
            .then(response => response.data)
            .then((data) => {
                this.setState({doors: data, isLoading: false})
            });
    }


    render() {
        let {doors, door1} = this.state
        let image = 'data:image/png;base64,';

        return (
            <div className="door-info-page">
                {doors.map((door) => (
                    door.doorName.replace(' ', '-').toLowerCase() === this.props.match.params.p2 ?
                        <div className="container">
                            <div className="door-info-page__inner">
                                <div className="door-info-top">
                                    <div className="door-image-container">
                                        <img
                                            className="door-image"
                                            src={image + door.file.data}/>
                                    </div>
                                    <div className="door-main-info">
                                        <h2>Двері {door.doorName}</h2>
                                        <p>Наявність: {door.available ? "На складі" : "Привеземо"}</p>
                                        <p>Код товару: {door.code}</p>
                                    </div>
                                </div>
                                <div>

                                </div>
                            </div>
                        </div>
                        : <div></div>
                ))}
            </div>
        );
    }
}

export default DoorInfoPage;
