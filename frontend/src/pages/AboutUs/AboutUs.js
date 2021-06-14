import React, {Component} from 'react';
import './AbousUs.css'
import PageTitle from "../../components/PageTitle/PageTitle";
import Line from "../../components/Line/Line";
import MetaTags from 'react-meta-tags';

class AboutUs extends Component {
    render() {
        return (
            <div className="container">
                <MetaTags>
                    <title>SteelGuardWest - про нас</title>
                    <meta id="meta-description" name="description" content="SteelGuardWest - інтернет магазин Українського виробника вхідних броньованих, металевих дверей SteelGuardWest." />
                    <meta id="og-title" property="og:title" content="SteelGuardWest | Про нас" />
                </MetaTags>
                <div className="page__inner">
                    <PageTitle title="Про нас"/>
                    <Line/>
                    <p>Інтернет-магазин дверей SteelGuardWest - один з лідерів продажів вхідних дверей в Україні. Наш магазин є
                        ексклюзивним представником торгової марки Steelguard - бренду з досить довгою і успішною
                        історією. ТМ Steelguard широко представлена у всіх регіонах України в великих торгових
                        мережах, таких як Епіцентр, Нова Лінія і багатьох інших. Всі двері виготовляються потоковим
                        методом, на найсучаснішому обладнанні європейського виробництва в м. Київ. Завдяки цьому
                        втручання людини в виробничий процес мінімально, і, як наслідок, знижена вартість готової
                        продукції.
                        <br/>
                        <br/>
                        Інтернет-магазин вхідних дверей SteelGuardWest - це найширший вибір дверей виконаних в різних стилях, а
                        також різних цінових категоріях. На нашому складі завжди в наявності більше 1500 дверей.
                        Піклуючись про наших покупців, ми постійно оновлюємо нашу товарну лінійку. Ми ретельно
                        аналізуємо сучасні тенденції і ваші уподобання, щоб задовольняти найвимогливіших покупців!</p>
                </div>

            </div>
        );
    }
}

export default AboutUs;
