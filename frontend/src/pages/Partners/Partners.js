import React, {Component} from 'react';
import './Partners.css'
import PageTitle from "../../components/PageTitle/PageTitle";
import Line from "../../components/Line/Line";
import MetaTags from "react-meta-tags";

class Partners extends Component {

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
        return (
            <div className="container">
                <MetaTags>
                    <title>SteelGuardWest - нашы партнери</title>
                    <meta id="meta-description" name="description" content="SteelGuardWest - інтернет магазин Українського виробника вхідних броньованих, металевих дверей SteelGuardWest." />
                    <meta id="og-title" property="og:title" content="SteelGuardWest | Наші партнери" />
                </MetaTags>
                <div className="page__inner">
                    <PageTitle title="Наші партнери"/>
                    <Line/>
                </div>
            </div>
        );
    }
}

export default Partners;
