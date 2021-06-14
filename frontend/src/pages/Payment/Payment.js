import React, {Component} from 'react';
import PageTitle from "../../components/PageTitle/PageTitle";
import Line from "../../components/Line/Line";
import MetaTags from "react-meta-tags";

class Payment extends Component {
    render() {
        return (
            <div className="container">
                <MetaTags>
                    <title>SteelGuardWest - оплата</title>
                    <meta id="meta-description" name="description" content="SteelGuardWest - інтернет магазин Українського виробника вхідних броньованих, металевих дверей SteelGuardWest." />
                    <meta id="og-title" property="og:title" content="SteelGuardWest | Оплата" />
                </MetaTags>
                <div className="page__inner">
                    <PageTitle title="Оплата"/>
                    <Line/>
                    <p>Оплата придбаних товарів здійснюється відповідно до виставленого рахунку через касу банку, термінал або систему Приват24.</p>
                </div>
            </div>
        );
    }
}

export default Payment;
