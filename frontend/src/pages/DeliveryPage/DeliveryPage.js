import React, {Component} from 'react';
import './DeliveryPage.css'
import PageTitle from "../../components/PageTitle/PageTitle";
import Line from "../../components/Line/Line";

class DeliveryPage extends Component {
    render() {
        return (
            <div className="container">
                <div className="delivery__inner">
                    <PageTitle title="ІНФОРМАЦІЯ ПРО ДОСТАВКУ ТА ВСТАНОВЛЕННЯ"/>
                    <Line/>
                    <p>Магазин дверей <b>SteelGuardWest</b> здійснює доставку і монтаж придбаних у нас дверей по м.Рівне та Рівненській області!</p>
                    <table>
                        <thead>
                            <th>Послуги</th>
                            <th>На 01.06.2021</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Монтаж 2-х контурної двері (доставка, підйом на ліфті, демонтаж), крім DEVI-U</td>
                                <td>1200</td>
                            </tr>
                            <tr><td></td><td></td></tr>
                            <tr><td></td><td></td></tr>
                            <tr><td></td><td></td></tr>
                            <tr><td></td><td></td></tr>
                            <tr><td></td><td></td></tr>
                            <tr><td></td><td></td></tr>
                            <tr><td></td><td></td></tr>
                            <tr><td></td><td></td></tr>
                            <tr><td></td><td></td></tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default DeliveryPage;
