import React, {Component} from 'react';
import './ProtectedDoor.css'
import PageTitle from "../../components/PageTitle/PageTitle";
import Line from "../../components/Line/Line";
import certificate from "../../assets/maxima-wm.jpg"
import Rcmaxima from "../../assets/RC2-Maxima.jpg"
import MetaTags from "react-meta-tags";

class ProtectedDoor extends Component {

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
        return (
            <div className="container">
                <MetaTags>
                    <title>SteelGuardWest - зламостійкі двері</title>
                    <meta id="meta-description" name="description" content="SteelGuardWest - інтернет магазин Українського виробника вхідних броньованих, металевих дверей SteelGuardWest." />
                    <meta id="og-title" property="og:title" content="SteelGuardWest | Зламостійкі двері" />
                </MetaTags>
                <div className="page__inner">
                    <PageTitle title="Вхідні двері другого класу зламостійкості – що це означає?"/>
                    <Line/>
                    <br/>
                    <text>
                        Майже всі виробники вхідних дверей (і не тільки дверей) говорять про класи зламостійкості. Що ж це таке і як враховувати цей клас зламостійкості при виборі вхідних дверей.
                        <br/>
                        <br/>
                        Розглянемо чотири класи зламостійкості
                        <br/>
                        <br/>
                        <span>Перший клас, RC 1</span>
                        <br/>
                        <br/>
                        Це базовий рівень захисту від вандалізму, що використовується в більшості вхідних дверей. Тривалість зламу 1-2 хвилини. Тому варто обирати двері не нижче другого класу зламостійкості
                        <br/>
                        <br/>
                        <br/>

                        <span>Другий клас, RC 2</span>
                        <br/>
                        <br/>
                        Більш міцний захист. Для зламу знадобиться більше часу та простий ручний інструмент, такий як викрутка, клини тощо.
                        <br/>
                        <br/>
                        <br/>
                        <span>Третій клас, RC 3</span>
                        <br/>
                        <br/>
                        Середній рівень зламостійкості, такі двері зможе відкрити лише досвідчений злочинник за допомогою таких ручних інструментів як фомка, лом, ручний дриль
                        <br/>
                        <br/>
                        <br/>
                        <span>Четвертий клас, RC 4</span>
                        <br/>
                        <br/>
                        З таким рівнем захисту може впоратись тільки дуже досвідчений злодій за допомогою важких ручних та електричних інструментів
                        <br/>
                        <br/>
                        <br/>
                        Вочевидь, чим вище клас зламостійкості, тим вище ціна вхідних дверей. Тому забудовники заради економії часто встановлюють найдешевші вхідні двері, першого класу. У нових власників в перший час і так багато витрат, про заміну вхідних дверей можна подумати пізніше. Тим більше ну що там брати в тій квартирі, якщо ремонт ще триває або тільки скінчився, навіть меблі не всі купили, так? Саме цим і користуються недосвідчені злодії, яких дуже багато. А брати завжди є що: інструменти, оздоблювальні матеріали, навіть недорогі предмети побуту – повірте, вам буде дуже шкода! А ще є психологічний фактор – дуже складно жити у квартирі, якщо ти знаєш, що там все перерив хтось чужий.
                        <br/>
                        <br/>
                        Тому, якщо ви обмежені бюджетом, варто розглянути вхідні двері другого класу зламостійкості. З власного досвіду, недосвідченим злодіям так і не вдалося розкрити вхідні двері Steelguard серії Maxima, про що докладніше у відео:
                    </text>
                    <br/>
                    <br/>
                    <iframe width="660" height="370" src="https://www.youtube.com/embed/WfsFPnQqqqU" rel="0"
                            enablejsapi="1" modestbranding="0" controls="0" frameBorder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"/>
                    <br/>
                    <br/>
                            <text>Для того, щоб бути впевненими у класі зламостійкості вхідних дверей вимагайте сертифікат.
                        <br/>
                        <br/>
                        Вхідні двері серії Maxima від ТМ Steelguard пройшли лабораторні дослідження й отримали сертифікат другого класу зламостійкості RC 2.</text>
                    <br/>
                    <br/>
                    <img className="certificate-image"
                     alt="Maxima certificate" src={certificate}/>
                    <br/>
                    <br/>
                     <text>
                         <span>Двері серії Maxima мають такі фактори протистояння зламу:</span>
                         <br/>
                         <br/>
                         1. Верхній сувальдний замок захищений пластиною зі сталевої арматури завтовшки 8 мм та загартованою пластиною завтовшки 3 мм
                         <br/>
                         <br/>
                         2. Нижній циліндровий замок
                         <br/>
                         <br/>
                         3. Металева лиштва, що запобігає зрізанню анкерів
                         <br/>
                         <br/>
                         4. Протизнімні ригелі, що фіксують полотно дверей в рамі в разі зрізання петель
                     </text>
                    <br/>
                    <br/>
                    <img className="rc-maxima"
                         alt="RC2-Maxima" src={Rcmaxima}/>
                         <br/>
                         <br/>
                         <text>
                             Крім того, двері протистоять повітряному шуму 47 дБ та полум’ю протягом 60 хвилин (EI 60), що також зазначено у сертифікаті
                             <br/>
                             <br/>
                             Обирайте перевірені та сертифіковані вхідні двері, захистить свою оселю!
                         </text>
                </div>


            </div>
        );
    }
}

export default ProtectedDoor;
