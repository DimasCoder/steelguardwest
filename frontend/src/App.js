import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Backdrop from "./components/Backdrop/Backdrop";
import Header from "./components/Header/Header";
import SideDrawer from "./components/SideDraw/SideDrawer";
import MainSection from "./components/MainSection/MainSection";
import Home from "./components/Auth/home.component";
import Register from "./components/Auth/Register";
import Login from "./components/Auth/Login";
import AuthService from './services/auth.service'
import AdminPanel from "./components/AdminPanel/AdminPanel";
import Navigation from "./components/Navigation/Navigation";
import DoorInfoPage from "./components/DoorInfoPage/DoorInfoPage";
import Delivery from "./pages/DeliveryPage/Delivery";
import Payment from "./pages/Payment/Payment";
import FilteredCatalog from "./components/FilteredCatalog/FilteredCatalog";
import Contact from "./pages/Contact/Contact";
import HowToBuy from "./pages/HowToBuy/HowToBuy";
import WhereToBuy from "./pages/WhereToBuy/WhereToBuy";
import Footer from "./components/Footer/Footer";
import AboutUs from "./pages/AboutUs/AboutUs";
import ProtectedDoor from "./pages/ProtectedDoor/ProtectedDoor";
import DoorInteriorPage from "./components/DoorInteriorPage/DoorInteriorPage";

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
            filter: [],
            typeFilter : null
        };
    }

    componentDidMount() {
        const user = AuthService.getCurrentUser();
        if (user) {
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

    setFilter = (f1, f2, f3) => {
        this.setState({filter: [f1, f2, f3]})
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
                    <div className="content-container">
                    <Navigation role={showAdminBoard}/>
                    <Header logOut={this.logOut}
                            currentUser={currentUser}
                            drawerClickHandler={this.drawerToggleClickHandler}
                            shoppingCartClickHandler={this.shoppingCartClickHandler}
                            toggle={this.state.sideDrawerOpen}
                            search={this.inputSearch}
                            cartItems={this.state.cartItems}
                    />
                    <SideDrawer show={this.state.sideDrawerOpen} click={this.backdropClickHandler}/>
                    {backdrop}
                    <Switch>
                        <Route exact path="/" render={() => <MainSection cartItems={this.state.cartItems} setFilter={this.setFilter} addToCart={this.addToCart} q={q}/>}/>
                        <Route exact path="/door/:id" render={(props) => <DoorInfoPage {...props}/>}/>
                        <Route exact path="/interiorDoor/:id" render={(props) => <DoorInteriorPage {...props}/>}/>
                        <Route exact path={["/", "/home"]} component={Home}/>
                        <Route exact path={["/doors/:filter"]} render={props => <FilteredCatalog {...props} filter={filter} setFilter={this.setFilter}/>}/>
                        <Route exact path="/delivery" component={Delivery}/>
                        <Route exact path="/payment" component={Payment}/>
                        <Route exact path="/contact" component={Contact}/>
                        <Route exact path="/how-to-buy" component={HowToBuy}/>
                        <Route exact path="/where-to-buy" component={WhereToBuy}/>
                        <Route exact path="/about-us" component={AboutUs}/>
                        <Route exact path="/protected-door" component={ProtectedDoor}/>
                        <Route exact path="/admin" component={Login}/>
                        <Route exact path="/signup" component={Register}/>
                        <Route exact path="/admin-panel" render={() => <AdminPanel logOut={this.logOut} user={currentUser} />}/>
                    </Switch>
                    </div>
                    <Footer/>
                </Router>
            </div>
        );
    }
}

export default App;
