import React, {Component} from 'react';
import './WhereToBuy.css'
import PageTitle from "../../components/PageTitle/PageTitle";
import Line from "../../components/Line/Line";
import MetaTags from "react-meta-tags";

class WhereToBuy extends Component {

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
        return (
            <div className="container">
                <MetaTags>
                    <title>SteelGuardWest - де купити</title>
                    <meta id="meta-description" name="description" content="SteelGuardWest - інтернет магазин Українського виробника вхідних броньованих, металевих дверей SteelGuardWest." />
                    <meta id="og-title" property="og:title" content="SteelGuardWest | Де купити" />
                </MetaTags>
                <div className="page__inner">
                    <PageTitle title="Де купити"/>
                    <Line/>
                </div>
            </div>
        );
    }
}

export default WhereToBuy;
