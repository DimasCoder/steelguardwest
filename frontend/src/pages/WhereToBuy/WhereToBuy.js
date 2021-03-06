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
                    <meta id="meta-description" name="description"
                          content="SteelGuardWest - інтернет магазин Українського виробника вхідних броньованих, металевих дверей SteelGuardWest."/>
                    <meta id="og-title" property="og:title" content="SteelGuardWest | Контакти"/>
                </MetaTags>
                <div className="page__inner">
                    <PageTitle title="Де купити"/>
                    <Line/>
                    <div className="contact-main-partners">
                        <div className="contact-data">
                            <h2>Рівненська область</h2>
                            <div className="contact-row">
                                <div className="contact-info">
                                    <h3>Рівне</h3>
                                    <h4>Вікна-двері</h4>
                                    <p>пр.Миру 15</p>
                                    <h4>Телефони:</h4>
                                    <p>(067)-362-04-34</p>
                                </div>
                                <div className="contact-info">
                                    <h3>Рівне</h3>
                                    <h4>ТЦ Максіма</h4>
                                    <p>вул. Курчатова 18є</p>
                                    <h4>Телефони:</h4>
                                    <p>(068)-002-47-29</p>
                                </div>
                                <div className="contact-info">
                                    <h3>Рівне</h3>
                                    <h4>Гіпермаркет вікон та дверей</h4>
                                    <p>вул. Щаслива 14</p>
                                    <h4>Телефони:</h4>
                                    <p>(097)-005-15-69</p>
                                </div>
                                <div className="contact-info">
                                    <h3>Рівне</h3>
                                    <h4>Гіпермаркет вікон та дверей</h4>
                                    <p>вул. Гагаріна 18б</p>
                                    <h4>Телефони:</h4>
                                    <p>(068)-805-65-80</p>
                                </div>
                                <div className="contact-info">
                                    <h3>Рівне</h3>
                                    <h4>ДекорБуд</h4>
                                    <p>вул. Київська 40а</p>
                                    <h4>Телефони:</h4>
                                    <p>(098)-543-09-03</p>
                                </div>
                            </div>
                            <div className="contact-row">
                                <div className="contact-info">
                                    <h3>Рівне</h3>
                                    <h4>ДекорБуд</h4>
                                    <p>вул. Київська 40а</p>
                                    <h4>Телефони:</h4>
                                    <p>(098)-543-09-03</p>
                                </div>
                                <div className="contact-info">
                                    <h3>Рівне</h3>
                                    <h4>Затишок</h4>
                                    <p>вул. Соборна 326</p>
                                    <h4>Телефони:</h4>
                                    <p>(067)-873-74-74</p>
                                    <h4>Email:</h4>
                                    <p>okto@ukr.net</p>
                                </div>
                                <div className="contact-info">
                                    <h3>Рівне</h3>
                                    <h4>Двері та фурнітура</h4>
                                    <p>вул. Бандери 46</p>
                                    <h4>Телефони:</h4>
                                    <p>(097)-972-00-48</p>
                                </div>
                                <div className="contact-info">
                                    <h3>Рівне</h3>
                                    <h4>Двері вікна</h4>
                                    <p>вул. Гагаріна 29</p>
                                    <h4>Телефони:</h4>
                                    <p>(036)-240-53-50</p>
                                </div>
                                <div className="contact-info">
                                    <h3>Рівне</h3>
                                    <h4>Бренд</h4>
                                    <p>вул. Замкова 20</p>
                                    <h4>Телефони:</h4>
                                    <p>(068)-500-40-09</p>
                                </div>
                            </div>
                            <div className="contact-row">
                                <div className="contact-info">
                                    <h3>Рівне</h3>
                                    <h4>Зодчий</h4>
                                    <p>вул. Богоявленська 2 </p>
                                    <h4>Телефони:</h4>
                                    <p>(096)-999-09-19</p>
                                </div>
                                <div className="contact-info">
                                    <h3>Рівне</h3>
                                    <h4>Комфорт Хаус</h4>
                                    <p>вул. Макарова 16</p>
                                    <h4>Телефони:</h4>
                                    <p>(097)-053-35-33</p>
                                    <h4>Email:</h4>
                                    <p>c.h-rivne@ukr.net</p>
                                    <h4>Веб-сайт:</h4>
                                    <p>http://comfort-house.rv.ua/</p>
                                </div>
                                <div className="contact-info">
                                    <h3>Здолбунів</h3>
                                    <h4>Світ дверей + вікно</h4>
                                    <p>вул. Полубодка</p>
                                    <h4>Телефони:</h4>
                                    <p>(096)-084-09-47</p>
                                </div>
                                <div className="contact-info">
                                    <h3>Дубно</h3>
                                    <h4>ВиМір</h4>
                                    <p>вул. Свободи 26</p>
                                    <h4>Телефони:</h4>
                                    <p>(099)-420-00-01</p>
                                </div>
                                <div className="contact-info">
                                    <h3>Дубно</h3>
                                    <h4>Флагман</h4>
                                    <p>вул. Замкова 22</p>
                                    <h4>Телефони:</h4>
                                    <p>(098)-625-38-66</p>
                                </div>
                            </div>
                            <div className="contact-row">
                                <div className="contact-info">
                                    <h3>Радивилів</h3>
                                    <h4>Вікнарьоф</h4>
                                </div>
                                <div className="contact-info">
                                    <h3>Сарни</h3>
                                    <h4>Двері Білорусії</h4>
                                </div>
                                <div className="contact-info">
                                    <h3>Сарни</h3>
                                    <h4>Будівельник</h4>
                                </div>
                                <div className="contact-info">
                                    <h3>Вараш</h3>
                                    <h4>Галерея дверей</h4>
                                </div>
                                <div className="contact-info">
                                    <h3>Острог</h3>
                                    <h4>Веснянка</h4>
                                    <p>вул. Східна 31</p>
                                </div>
                            </div>
                        </div>
                        <div className="contact-data">
                            <h2>Львівська область</h2>
                            <div className="contact-row">
                                <div className="contact-info">
                                    <h3>Броди</h3>
                                    <h4>Макс+</h4>
                                    <p>вул. Франка 38</p>
                                    <h4>Телефони:</h4>
                                    <p>(063)-711-13-00</p>
                                    <p>(093)-711-13-00</p>
                                    <h4>Email:</h4>
                                    <p>maks_plus@ukr.net</p>
                                </div>
                                <div className="contact-info">
                                    <h3>Броди</h3>
                                    <h4>Візит</h4>
                                    <p>вул. Чупринки 6а</p>
                                    <h4>Телефони:</h4>
                                    <p>(068)-185-96-64</p>
                                    <h4>Email:</h4>
                                    <p>adima2014@ukr.net</p>
                                </div>
                                <div className="contact-info">
                                    <h3>Золочів</h3>
                                    <h4>Елегант</h4>
                                    <p>вул. Героїв УПА 8</p>
                                    <h4>Телефони:</h4>
                                    <p>(067)-672-90-23</p>
                                    <h4>Email:</h4>
                                    <p>office@elegant.in.ua</p>
                                    <h4>Веб-сайт:</h4>
                                    <p>www.elegant.in.ua</p>
                                </div>
                                <div className="contact-info">
                                    <h3>Золочів</h3>
                                    <h4>Елегант</h4>
                                    <p>вул. Л.Українки 14</p>
                                    <h4>Телефони:</h4>
                                    <p>(067)-675-54-58</p>
                                    <h4>Email:</h4>
                                    <p>office.elegant2@gmail.com</p>
                                    <h4>Веб-сайт:</h4>
                                    <p>www.elegant.in.ua</p>
                                </div>
                                <div className="contact-info">
                                    <h3>Буськ</h3>
                                    <h4>Елегант</h4>
                                    <p>вул. Петрушевича 1</p>
                                    <h4>Телефони:</h4>
                                    <p>(097)-407-53-30</p>
                                    <h4>Email:</h4>
                                    <p>office@elegant.in.ua</p>
                                    <h4>Веб-сайт:</h4>
                                    <p>www.elegant.in.ua</p>
                                </div>
                            </div>
                            <div className="contact-row">
                                <div className="contact-info">
                                    <h3>Червоноград</h3>
                                    <h4>Перфект</h4>
                                    <p>вул. Сокальська 3</p>
                                    <h4>Телефони:</h4>
                                    <p>(063)-608-46-31</p>
                                    <p>(096)-722-67-97</p>
                                    <h4>Email:</h4>
                                    <p>cvir.ludmila@gmail.com</p>
                                </div>
                                <div className="contact-info">
                                    <h3>Червоноград</h3>
                                    <h4>Перфект</h4>
                                    <p>вул. Шевченка 14а</p>
                                    <h4>Телефони:</h4>
                                    <p>(073)-777-15-25</p>
                                    <p>(067)-777-15-26</p>
                                    <h4>Email:</h4>
                                    <p>vekachervonograd@gmail.com</p>
                                </div>
                                <div className="contact-info">
                                    <h3>Червоноград</h3>
                                    <h4>Добрий тесля</h4>
                                    <p>вул. Шептицького 1</p>
                                    <h4>Телефони:</h4>
                                    <p>(098)-251-36-36</p>
                                </div>
                                <div className="contact-info">
                                    <h3>Стрий</h3>
                                    <h4>Ковальський</h4>
                                    <p>вул. Зеньковецької 75/2</p>
                                    <h4>Телефони:</h4>
                                    <p>(096)-115-91-15</p>
                                    <h4>Email:</h4>
                                    <p>kovalskyivs@gmail.com</p>
                                    <h4>Веб-сайт:</h4>
                                </div>
                                <div className="contact-info">
                                    <h3>Трускавець</h3>
                                    <h4>Комора</h4>
                                    <p>вул. Довженка 5</p>
                                    <h4>Телефони:</h4>
                                    <p>(098)-127-51-73</p>
                                    <h4>Email:</h4>
                                    <p>viknoof@ukr.net</p>
                                </div>
                            </div>
                            <div className="contact-row">
                                <div className="contact-info">
                                    <h3>Трускавець</h3>
                                    <h4>ВДС</h4>
                                    <p>вул. Стебницька 80</p>
                                    <h4>Телефони:</h4>
                                    <p>(067)-274-36-56</p>
                                    <h4>Email:</h4>
                                    <p>vovh@ukr.net</p>
                                </div>
                                <div className="contact-info">
                                    <h3>Червоноград</h3>
                                    <h4>Статус</h4>
                                    <p>вул. Хмельницького 61</p>
                                    <h4>Телефони:</h4>
                                    <p>(097)-803-83-55</p>
                                </div>
                                <div className="contact-info">
                                    <h3>Червоноград</h3>
                                    <h4>Перфект</h4>
                                    <p>вул. Стуса 19</p>
                                    <h4>Телефони:</h4>
                                    <p>(093)-670-94-44</p>
                                    <p>(068)-500-94-96</p>
                                    <h4>Email:</h4>
                                    <p>cvir.andriy@gmail.com</p>
                                </div>
                                <div className="contact-info">
                                    <h3>Львів</h3>
                                    <h4>Двері</h4>
                                    <p>вул. Городоцька 207</p>
                                    <h4>Телефони:</h4>
                                    <p>(067)-371-29-04</p>
                                    <h4>Email:</h4>
                                    <p>2470607@gmail.com</p>
                                </div>
                                <div className="contact-info">
                                    <h3>Львів</h3>
                                    <h4>Центр дверей</h4>
                                    <p>вул. Чуваська 29</p>
                                    <h4>Телефони:</h4>
                                    <p>(097)-994-82-13</p>
                                    <h4>Email:</h4>
                                    <p>lvivdveri@gmail.com</p>
                                </div>
                            </div>
                        </div>
                        <div className="contact-data">
                            <h2>Волинська область</h2>
                            <div className="contact-row">
                                <div className="contact-info">
                                    <h3>Луцьк</h3>
                                    <h4>Еталон</h4>
                                    <p>вул. Глушець 49</p>
                                    <h4>Телефони:</h4>
                                    <p>(098)-043-04-47</p>
                                    <h4>Email:</h4>
                                    <p>etalonlutsk@ukr.net</p>
                                </div>
                                <div className="contact-info">
                                    <h3>Луцьк</h3>
                                    <h4>Свої двері</h4>
                                    <p>вул. Рівненська 25</p>
                                    <h4>Телефони:</h4>
                                    <p>(095)-140-20-20</p>
                                    <h4>Email:</h4>
                                    <p>etalonlutsk@ukr.net</p>
                                </div>
                                <div className="contact-info">
                                    <h3>Луцьк</h3>
                                    <h4>Свої двері</h4>
                                    <p>вул. Рівненська 25</p>
                                    <h4>Телефони:</h4>
                                    <p>(095)-140-20-20</p>
                                </div>
                                <div className="contact-info">
                                    <h3>Луцьк</h3>
                                    <h4>Файні двері</h4>
                                    <p>вул. Шопена 13</p>
                                    <h4>Телефони:</h4>
                                    <p>(067)-799-17-17</p>
                                    <p>(068)-807-38-33</p>
                                    <h4>Email:</h4>
                                    <p>fayni-dveri@ukr.net</p>
                                </div>
                                <div className="contact-info">
                                    <h3>Володимир-Волинський</h3>
                                    <h4>Перфект</h4>
                                    <p>вул. Ковельська 42</p>
                                    <h4>Телефони:</h4>
                                    <p>(098)-028-27-77</p>
                                </div>
                            </div>
                            <div className="contact-row">
                                <div className="contact-info">
                                    <h3>Володимир-Волинський</h3>
                                    <h4>Добробуд</h4>
                                    <p>вул. Луцька 2</p>
                                    <h4>Телефони:</h4>
                                    <p>(096)-121-20-12</p>
                                    <h4>Email:</h4>
                                    <p>vvdobrobud@i.ua</p>
                                </div>
                                <div className="contact-info">
                                    <h3>Нововолинськ</h3>
                                    <h4>Перфект</h4>
                                </div>
                                <div className="contact-info">
                                    <h3>Нововолинськ</h3>
                                    <h4>Вікнарьоф</h4>
                                    <p>вул. Шевченка 9</p>
                                    <h4>Телефони:</h4>
                                    <p>(098)-662-82-51</p>
                                    <h4>Email:</h4>
                                    <p>viknaroff_nv@ukr.net</p>
                                </div>
                            </div>
                        </div>
                        <div className="contact-data">
                            <h2>Хмельницька область</h2>
                            <div className="contact-row">
                                <div className="contact-info">
                                    <h3>Нетішин</h3>
                                    <h4>Двері</h4>
                                </div>
                                <div className="contact-info">
                                    <h3>Славута</h3>
                                    <h4>Акцент + </h4>
                                    <p>Миру 20/1</p>
                                    <h4>Телефони:</h4>
                                    <p>(098)-483-69-87</p>
                                    <h4>Email:</h4>
                                    <p>petrova-2020@ukr.net</p>
                                </div>
                                <div className="contact-info">
                                    <h3>Нетішин</h3>
                                    <h4>АРА</h4>
                                </div>
                                <div className="contact-info">
                                    <h3>Шепетівка</h3>
                                    <h4>Двері</h4>
                                    <p>Чкалова 20</p>
                                    <h4>Телефони:</h4>
                                    <p>(097)-489-41-60</p>
                                    <h4>Email:</h4>
                                    <p>tntshop.ukr@gmail.com</p>
                                </div>
                            </div>
                        </div>
                        <div className="contact-data">
                            <h2>Житомирська область</h2>
                            <div className="contact-row">
                                <div className="contact-info">
                                    <h3>Новоград-Волинський</h3>
                                    <h4>Світанок</h4>
                                    <p>Житомирська 55</p>
                                    <h4>Телефони:</h4>
                                    <p>(063)-246-61-58</p>
                                    <h4>Email:</h4>
                                    <p>ignatovichnv@ukr.net</p>
                                </div>
                                <div className="contact-info">
                                    <h3>Новоград-Волинський</h3>
                                    <h4>Норма</h4>
                                    <p>Пушкіна</p>
                                    <h4>Телефони:</h4>
                                    <p>(068)-071-88-56</p>
                                    <h4>Email:</h4>
                                    <p>alina_norma_01@ukr.net</p>
                                </div>
                                <div className="contact-info">
                                    <h3>Новоград-Волинський</h3>
                                    <h4>Епіцентр</h4>
                                    <p>Вокзальна 3а</p>
                                    <h4>Телефони:</h4>
                                    <p>(093)-558-86-80</p>
                                    <h4>Email:</h4>
                                    <p>epicentrbud@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        );
    }
}

export default WhereToBuy;
