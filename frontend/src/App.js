import React, {Component} from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import Backdrop from "./components/Backdrop/Backdrop";
import Header from "./components/Header/Header";
import SideDrawer from "./components/SideDraw/SideDrawer";
import Catalog from "./components/Catalog/Catalog";
import MainSection from "./components/MainSection/MainSection";
import AutoPage from "./components/AutoPage/AutoPage";
import Home from "./components/Auth/home.component";
import Register from "./components/Auth/Register";
import Login from "./components/Auth/Login";
import Profile from "./components/Auth/profile.component";
import BoardModerator from "./components/Auth/board-moderator.component";
import BoardUser from "./components/Auth/board-user.component";
import BoardAdmin from "./components/Auth/board-admin.component";
import AuthService from './services/auth.service'
import AdminPanel from "./components/AdminPanel/AdminPanel";
import SearchSection from "./components/SearchSection/SearchSection";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";
import Checkout from "./components/Checkout/Checkout";
import Navigation from "./components/Navigation/Navigation";
import DoorInfoPage from "./components/DoorInfoPage/DoorInfoPage";

class App extends Component {
    constructor(props) {
        super(props);
        this.logOut = this.logOut.bind(this);

        this.state = {
            showModeratorBoard: false,
            showAdminBoard: false,
            currentUser: undefined,
            sideDrawerOpen: false,
            shoppingCartOpen: false,
            q: '',
            cartItems: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [],
            filter: undefined,
            typeFilter : null
        };
    }

    componentDidMount() {
        const user = AuthService.getCurrentUser();
        if (user) {
            console.log(user)
            this.setState({
                currentUser: user,
                showModeratorBoard: user.roles.includes("ROLE_MODERATOR"),
                showAdminBoard: user.roles.includes("ROLE_ADMIN"),
            });
        }
    }

    addToCart = (product) => {
        const cartItems = this.state.cartItems.slice();
        let alreadyInCart = false;
        cartItems.forEach((item) => {
            if (item.id === product.id) {
                item.count++;
                alreadyInCart = true
            }
        });
        if (!alreadyInCart) {
            cartItems.push({...product, count: 1});
        }
        this.setState({cartItems});
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
        console.log(cartItems.length)
    }

    removeFromCart = (product) => {
        const cartItems = this.state.cartItems.slice();
        if(cartItems.length !== 1){
            cartItems.forEach((item) => {
                if(product.id === item.id){
                    console.log(item.id)
                    cartItems.splice(cartItems.indexOf(item), 1)
                }
            })
            this.setState({cartItems})
            localStorage.setItem("cartItems", JSON.stringify(cartItems));
        }else if(cartItems.length === 1){
            cartItems.forEach((item) => {
                if(product.id === item.id){
                    console.log(item.id)
                    cartItems.splice(cartItems.indexOf(item), 1)
                }
            })
            localStorage.clear()
            this.setState({cartItems})

        }

    };

    logOut() {
        AuthService.logout();
    }

    drawerToggleClickHandler = () => {
        this.setState((prevState) => {
            return {sideDrawerOpen: !prevState.sideDrawerOpen}
        });
    };

    shoppingCartClickHandler = () => {
        this.setState((prevState) => {
            return {shoppingCartOpen: !prevState.sideDrawerOpen}
        });
    };

    backdropClickHandler = () => {
        this.setState({sideDrawerOpen: false, shoppingCartOpen: false})
    }

    inputSearch = (e) => {
        this.setState({q: e})
    }

    setFilter = (e, type) => {
        this.setState({filter : e})
        this.setState({typeFilter : type})
    }

    render() {
        let backdrop;

        if (this.state.sideDrawerOpen) {
            backdrop = <Backdrop click={this.backdropClickHandler}/>
        }

        if (this.state.shoppingCartOpen) {
            backdrop = <Backdrop click={this.backdropClickHandler}/>
        }
        const { currentUser, showModeratorBoard,q, showAdminBoard, filter, typeFilter } = this.state;

        return (
            <div>
                <Router>
                    <Navigation role={showAdminBoard}/>
                    <Header logOut={this.logOut}
                            currentUser={currentUser}
                            drawerClickHandler={this.drawerToggleClickHandler}
                            shoppingCartClickHandler={this.shoppingCartClickHandler}
                            toggle={this.state.sideDrawerOpen}
                            search={this.inputSearch}
                            cartItems={this.state.cartItems}
                    />
                    <SideDrawer show={this.state.sideDrawerOpen}/>
                    <ShoppingCart cartItems={this.state.cartItems} removeFromCart={this.removeFromCart} click={this.backdropClickHandler} show={this.state.shoppingCartOpen}/>
                    {backdrop}
                    <Switch>
                        <Route exact path="/" render={() => <MainSection cartItems={this.state.cartItems} setFilter={this.setFilter} addToCart={this.addToCart} q={q}/>}/>
                        {/*<Router exact path="/" component={MainSection}/>*/}
                        <Route exact path="/:p1/:p2" component={DoorInfoPage}/>
                        <Route exact path={["/", "/home"]} component={Home}/>
                        {console.log(filter)}
                        <Route exact path={["/streetDoor", "/flatDoor", "/techDoor", "/fireDoor", "/interiorDoor" ]} render={() => <Catalog filter={filter} typeFilter={typeFilter}/>}/>
                        <Route exact path="/admin" component={Login}/>
                        <Route exact path="/signup" component={Register}/>
                        <Route exact path="/register" component={Register}/>
                        <Route exact path="/checkout" render={() => <Checkout cartItems={this.state.cartItems} removeFromCart={this.removeFromCart}/>}/>
                        <Route exact path="/profile" component={Profile}/>
                        <Route exact path="/admin-panel" render={() => <AdminPanel logOut={this.logOut} user={currentUser} />}/>
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default App;
