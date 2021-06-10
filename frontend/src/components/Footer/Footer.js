import React, {Component} from 'react';
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHome, faGift, faMapMarkerAlt, faAd, faPercent, faUserTag} from '@fortawesome/free-solid-svg-icons'
import {NavLink} from "react-router-dom";
import {faAddressCard, faBookmark, faIdBadge, faMoneyBillAlt, faPaperPlane} from "@fortawesome/free-regular-svg-icons";
import {faFacebookF, faInstagram, faYoutube} from "@fortawesome/free-brands-svg-icons";

class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <div className="footer-top">
                    <div className="container">
                        <div className="footer-top__inner">
                            <div className="footer-top-item">
                                <FontAwesomeIcon className="footer-item-icon" icon={faHome}/>
                                <div className="footer-top-links">
                                <NavLink exact to="/contact" className="footer-link">
                                    <FontAwesomeIcon icon={faAddressCard} /> Контакти
                                </NavLink>
                                    <NavLink exact to="/partners" className="footer-link">
                                        <FontAwesomeIcon icon={faIdBadge} /> Наші партнери
                                    </NavLink>
                                    <NavLink exact to="/about-us" className="footer-link">
                                        <FontAwesomeIcon icon={faBookmark} /> Про нас
                                    </NavLink>
                                </div>
                            </div>
                            <div className="footer-top-item">
                                <FontAwesomeIcon className="footer-item-icon" icon={faPaperPlane}/>
                                <div className="footer-top-links">
                                    <NavLink exact to="/delivery" className="footer-link">
                                        <FontAwesomeIcon icon={faPaperPlane} /> Доставка
                                    </NavLink>
                                    <NavLink exact to="/payment" className="footer-link">
                                        <FontAwesomeIcon icon={faMoneyBillAlt} /> Оплата
                                    </NavLink>
                                    <NavLink exact to="/where-to-buy" className="footer-link">
                                        <FontAwesomeIcon icon={faMapMarkerAlt} /> Де купити
                                    </NavLink>
                                </div>
                            </div>
                            <div className="footer-top-item">
                                <FontAwesomeIcon className="footer-item-icon" icon={faGift}/>
                                <div className="footer-top-links">
                                    <NavLink exact to="/delivery" className="footer-link">
                                        <FontAwesomeIcon icon={faAd} /> Акції
                                    </NavLink>
                                    <NavLink exact to="/payment" className="footer-link">
                                        <FontAwesomeIcon icon={faPercent} /> Бонуси
                                    </NavLink>
                                    <NavLink exact to="/contact" className="footer-link">
                                        <FontAwesomeIcon icon={faUserTag} /> Хіти продажу
                                    </NavLink>
                                </div>
                            </div>
                            {/*<div></div>*/}
                            {/*<div></div>*/}
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="container">
                        <div className="footer-bottom__inner">
                            <div className="footer-bottom-item">
                                <p>© 2021 Steel Guard West.
                                    <br/>
                                    Всі права захищені.</p>
                            </div>
                            <div className="footer-bottom-item">
                                <h6>Підписатися на розсилку</h6>
                                <div className="footer-subscribe">
                                    <input type="email" placeholder="Email"/>
                                    <NavLink exact to="/novelty" className="novelty-link">Підписатися</NavLink>
                                </div>
                            </div>
                            <div className="footer-bottom-item">
                                <h6>Ми в соц. мережах</h6>
                                <div className="footer-social">
                                    <a target="_blank" href="http://instagram.com"> <FontAwesomeIcon icon={faInstagram} /></a>
                                    <a target="_blank" href="http://facebook.com"> <FontAwesomeIcon icon={faFacebookF} /></a>
                                    <a target="_blank" href="http://youtube.com"> <FontAwesomeIcon icon={faYoutube} /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </footer>
        );
    }
}

export default Footer;
