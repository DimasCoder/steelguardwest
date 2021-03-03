import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Backdrop from "./components/Backdrop/Backdrop";
import Header from "./components/Header/Header";
import SideDrawer from "./components/SideDraw/SideDrawer";
import Catalog from "./components/Catalog/Catalog";
import MainSection from "./components/MainSection/MainSection";
import BrandForm from "./components/BrandForm";
import AutoPage from "./components/AutoPage/AutoPage";

class App extends Component {
    state = {
        sideDrawerOpen : false
    };

    drawerToggleClickHandler = () => {
        this.setState((prevState) => {
            return {sideDrawerOpen: !prevState.sideDrawerOpen}
        });
    };

    backdropClickHandler = () => {
        this.setState({sideDrawerOpen: false})
    }
    render() {
        let backdrop;

        if(this.state.sideDrawerOpen){
            backdrop = <Backdrop click={this.backdropClickHandler}/>
        }
        return (
            <Router>
                <Header drawerClickHandler={this.drawerToggleClickHandler} toggle={this.state.sideDrawerOpen}/>
                <SideDrawer show={this.state.sideDrawerOpen}/>
                {backdrop}
                <Switch>
                    <Route exact path="/" component={MainSection}/>
                    <Route exact path="/reviews" component={BrandForm}/>
                    <Route exact path="/:brand/:model" name={"asdasd"} component={AutoPage}/>
                </Switch>
            </Router>
        );
    }
}

export default App;