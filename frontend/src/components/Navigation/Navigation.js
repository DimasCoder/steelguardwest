import React, {Component} from 'react';
import "./Navigation.css"
import {NavLink} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComments, faPaperPlane, faCreditCard, faAddressCard, faIdBadge, faMoneyBillAlt } from '@fortawesome/free-regular-svg-icons'
import {faChevronDown, faCaretDown, faUserCog, faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons'
import {faFacebookF, faInstagram, faYoutube} from "@fortawesome/free-brands-svg-icons";

class Navigation extends Component {
    render() {
        return (
            <div className="navigation">
                <div className="container">
                    <div className="navigation__inner">
                        <nav className="navigation-links">
                            <div className="navigation-link nav-dropdown">
                                <FontAwesomeIcon icon={faComments} /> Номер телефону <FontAwesomeIcon icon={faCaretDown} />
                                <div className="dropdown-numbers">
                                    <a className="contact-phone" href="tel:0999990999"><span>(</span>+380<span>)</span>-999-09-99 Рівне</a>
                                    <a className="contact-phone" href="tel:0999990999"><span>(</span>+380<span>)</span>-999-09-99 Рівне</a>
                                    <a className="contact-phone" href="tel:0999990999"><span>(</span>+380<span>)</span>-999-09-99 Діма</a>
                                </div>
                            </div>
                            <NavLink exact to="/delivery" className="navigation-link">
                                <FontAwesomeIcon icon={faPaperPlane} /> Доставка
                            </NavLink>
                            <NavLink exact to="/payment" className="navigation-link">
                                <FontAwesomeIcon icon={faMoneyBillAlt} /> Оплата
                            </NavLink>
                            <NavLink exact to="/contact" className="navigation-link">
                                <FontAwesomeIcon icon={faAddressCard} /> Контакти
                            </NavLink>
                            <NavLink exact to="/how-to-buy" className="navigation-link">
                                <FontAwesomeIcon icon={faCreditCard} /> Як купити
                            </NavLink>
                            <NavLink exact to="/partners" className="navigation-link">
                                <FontAwesomeIcon icon={faIdBadge} /> Наші партнери
                            </NavLink>
                            <NavLink exact to="/where-to-buy" className="navigation-link">
                                <FontAwesomeIcon icon={faMapMarkerAlt} /> Де купити
                            </NavLink>
                        </nav>
                        {this.props.role && (
                            <NavLink exact to="/admin-panel" className="navigation-link">
                                <FontAwesomeIcon icon={faUserCog} /> Адмін-панель
                            </NavLink>
                        )}
                        <div className="nav-social">
                            <a target="_blank" href="http://instagram.com"> <FontAwesomeIcon icon={faInstagram} /></a>
                            <a target="_blank" href="http://facebook.com"> <FontAwesomeIcon icon={faFacebookF} /></a>
                            <a target="_blank" href="http://youtube.com"> <FontAwesomeIcon icon={faYoutube} /></a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Navigation;
