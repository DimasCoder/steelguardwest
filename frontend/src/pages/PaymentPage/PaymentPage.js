import React, {Component} from 'react';
import PageTitle from "../../components/PageTitle/PageTitle";
import Line from "../../components/Line/Line";

class PaymentPage extends Component {
    render() {
        return (
            <div className="container">
                <div className="delivery__inner">
                    <PageTitle title="ОПЛАТА"/>
                    <Line/>
                    <p>Оплата придбаних товарів здійснюється відповідно до виставленого рахунку через касу банку, термінал або систему Приват24.</p>
                </div>
            </div>
        );
    }
}

export default PaymentPage;
