import React from 'react';
import "./Header.css";
import "../..//App.css";
import logo from '../../assets/rem7.png';
import logoAdaptive from '../../assets/rem8.png';
import ToggleButton from '../ToggleButton/ToggleButton'
import {NavLink, Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'


const Header = props => {

    return(
        <header className="header">
            <div className="container">
                <div className="header__inner">
                    <img
                        src={logo}
                        className="header__inner-logo"
                        alt="Logo"
                    />
                    <img
                        src={logoAdaptive}
                        className="header__inner-logo-adaptive"
                        alt="Logo"
                    />
                    <nav className="header-navigation">
                        <NavLink exact to="/" className="header__navigation-link">Головна</NavLink>
                        <NavLink exact to="/katalog" className="header__navigation-link">Каталог</NavLink>
                        <NavLink exact to="/reviews" className="header__navigation-link">Відгуки</NavLink>
                        <NavLink exact to="/contact" className="header__navigation-link">Контакти</NavLink>
                    </nav>
                    <div className="search-container">
                        <FontAwesomeIcon className="search-icon" icon={faSearch} />
                        <input className="input-search" type="text" placeholder="Пошук по номеру"/>

                    </div>
                    <div className="header__inner-contact">
                        <a className="contact-phone" href="tel:0999990999"><span>(</span>+380<span>)</span>-999-09-99</a>
                        <a className="contact-phone" href="tel:0999990999"><span>(</span>+380<span>)</span>-999-09-99</a>
                        {/*<a className="contact-email" href="#">monovex.studio@gmail.com</a>*/}
                    </div>
                    <div className="header__inner-toggle">
                        <ToggleButton click={props.drawerClickHandler} toggle={props.toggle}/>
                    </div>
                </div>
            </div>
        </header>

    )
}

export default Header;
