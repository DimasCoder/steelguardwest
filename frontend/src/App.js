import React, {Component} from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import Backdrop from "./components/Backdrop/Backdrop";
import Header from "./components/Header/Header";
import SideDrawer from "./components/SideDraw/SideDrawer";
import Catalog from "./components/Catalog/Catalog";
import MainSection from "./components/MainSection/MainSection";
import AutoPage from "./components/AutoPage/AutoPage";
import Home from "./components/Auth/home.component";
import Register from "./components/Auth/register.component";
import Login from "./components/Auth/Login";
import Profile from "./components/Auth/profile.component";
import BoardModerator from "./components/Auth/board-moderator.component";
import BoardUser from "./components/Auth/board-user.component";
import BoardAdmin from "./components/Auth/board-admin.component";
import AuthService from './services/auth.service'
import AdminPanel from "./components/AdminPanel/AdminPanel";
import SearchSection from "./components/SearchSection/SearchSection";

class App extends Component {
    constructor(props) {
        super(props);
        this.logOut = this.logOut.bind(this);

        this.state = {
            showModeratorBoard: false,
            showAdminBoard: false,
            currentUser: undefined,
            sideDrawerOpen: false,
            q: ''
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

    logOut() {
        AuthService.logout();
    }

    drawerToggleClickHandler = () => {
        this.setState((prevState) => {
            return {sideDrawerOpen: !prevState.sideDrawerOpen}
        });
    };

    backdropClickHandler = () => {
        this.setState({sideDrawerOpen: false})
    }

    inputSearch = (e) => {
        this.setState({q: e})
    }

    render() {
        let backdrop;

        if (this.state.sideDrawerOpen) {
            backdrop = <Backdrop click={this.backdropClickHandler}/>
        }
        const { currentUser, showModeratorBoard,q, showAdminBoard } = this.state;

        return (
            <div>
                <Router>
                    <Header logOut={this.logOut}
                            currentUser={currentUser}
                            role={showAdminBoard}
                            drawerClickHandler={this.drawerToggleClickHandler}
                            toggle={this.state.sideDrawerOpen}
                            search={this.inputSearch}
                    />
                    <SideDrawer show={this.state.sideDrawerOpen}/>
                    {backdrop}
                    <Switch>
                        <Route exact path="/" component={() => <MainSection search={this.inputSearch} q={q}/>}/>
                        <Route exact path="/:brand/:model" component={AutoPage}/>
                        <Route exact path={["/", "/home"]} component={Home}/>
                        <Route exact path="/admin" component={Login}/>
                        <Route exact path="/register" component={Register}/>
                        <Route exact path="/profile" component={Profile}/>
                        <Route path="/admin-panel" logOut={this.logOut} user={currentUser} component={AdminPanel}/>
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default App;
