import React from "react";
import { Link } from 'react-router-dom';
import '../scss/pages/main-page.css';

import { Modal, ModalOrderComponent, Carousel } from '../components/index';
import {iconComputerMainPage, iconSupportMainPage, iconTouchpadMainPage, iconWorkspaceMainPage, infoVectorMainPage, guarantyMainPage, callMainPage, smartphoneMainPage, systemMainPage, phoneSecondNav, tabletSecondNav, watchSecondNav, glassSecondNav, laptopSecondNav, sliderMainPage, vectorButtonMainPage} from './images';

import { useState } from 'react';

const mainPageMenu = [{id: 1, name: 'Ремонт телефонов', img: phoneSecondNav, path: '/phoneRepair'}, {id: 2, name: 'Ремонт планшетов', img: tabletSecondNav, path: '/laptopRepair'}, {id: 3, name: 'Замена стекол', img: glassSecondNav, path: '/glass'}, {id: 4, name: 'Ремонт ноутбуков', img: laptopSecondNav, path: '/notebookRepair'}, {id: 5, name: 'Ремонт смарт часов', img: watchSecondNav, path: '/smartWatch'}]
const infoMainPage = [{id: '01', img: iconComputerMainPage, vectorImg: infoVectorMainPage, text: `Ваш девайс не реагирует на нажатие клавиш, работает замедленно или вообще отказывается работать?`}, {id: '02', img: iconSupportMainPage, vectorImg: infoVectorMainPage, text: `Необходима помощь специалиста, который поможет решить любую проблему в работе вашего девайса.`}, {id: '03', img: iconWorkspaceMainPage, vectorImg: infoVectorMainPage, text: `Не знаете, к кому обратиться за квалифицированной помощью по ремонту.
`, textSpan: 'ОБРАТИТЕСЬ К НАМ'}, {id: '04', img: iconTouchpadMainPage, vectorImg: infoVectorMainPage, text: `Мы в кратчайшие сроки вернем ваш девайс в привычный для вас режим работы.`}]

function MainPageComponent() {
    const [modalActiveOrder, setModalActiveOrder] = useState(false);
    let handleClickOrder = () => {
        setModalActiveOrder(true);
    }
    let sliderMainPageBI = {
        backgroundImage: `url(${sliderMainPage})`
    }
    return (
        <section className="main-page">
            <div className="container">
            <Modal active={modalActiveOrder} setActive={setModalActiveOrder}><ModalOrderComponent/></Modal>
                <div className="nav-container">
                    <Carousel>
                        <div>Ir=tem 1</div>
                        <div>Ir=tem 2</div>
                    </Carousel>
                    <div className="main-page-slider" style={sliderMainPageBI}>
                        <div className="main-page-slider-container">
                            <div className="main-page-slider-info">
                                <h2>НОВАЯ ЖИЗНЬ <br /> ДЛЯ ВАШИХ ГАДЖЕТОВ</h2>
                                <p>Ремонт мобильных телефонов, планшетов, ноутбуков, смарт часов</p>
                                
                                <button className="main-page-button-order" onClick={() => handleClickOrder()}>Оставить заявку  <img src={vectorButtonMainPage} alt="" /></button>
                            </div>
                            <div className="main-page-slider-triangle">
                                <div className="first-triangle triangle-top">
                                    <div className="first-triangle-color">
                                        <div className="first-triangle-text">
                                            <div className="first-triangle-container-text">
                                                <img src={smartphoneMainPage} alt="" className="first-triangle-image" />
                                                <p>Оригинальные  комплектующие</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="first-triangle bottom-triangle">
                                    <div className="first-triangle-color">
                                        <div className="first-triangle-text">
                                            <div className="first-triangle-container-text">
                                                <img src={systemMainPage} alt="" className="first-triangle-image" />
                                                <p>Бесплатная диагностика</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="second-triangle">
                                    <div className="second-triangle-color">
                                        <div className="first-triangle-container-text">
                                            <img src={guarantyMainPage} alt="" className="first-triangle-image" />
                                            <p>Гарантия на все виды ремонта</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="main-page-slider-nav">
                        {mainPageMenu.map((elem, index) =>
                        <Link to={elem.path}> 
                            <div className="main-page-slider-square" key={index}>
                            <div className="square-border">
                                <img src={elem.img} alt="" />
                                <p>{elem.name}</p>
                            </div>
                        </div>
                        </Link>
                        )}
                    </div>

                </div>
                <div className="grey-line"></div>
                <div className="main-page-info">
                    
                    <div className="info-container">
                        {infoMainPage.map((elem, index) => 
                             <div className="info-square" key={index}>
                             <div className="info-square-text">
                                 <div className="info-square-text-container">
                                     <p id="info-square-num">{elem.id}</p> 
                                     <img className="info-square-img" src={elem.img} alt="" />
                                     <img className="info-square-vector" src={elem.vectorImg} alt="" />
                                     <p>{elem.text} {elem.textSpan ? <h5>{elem.textSpan}</h5> : ''}</p>
                                 </div>
                             </div>
                         </div>
                        )}
                    </div>
                </div>

                <div className="connection">
                    <div className="call-text">
                        <p><span className="call">Вызовите мастера</span> и Ваш девайс начнёт работать как нужно</p></div>
                    <div className="call-img"><img src={callMainPage} /></div>
                    <div className="call-master">
                        <p>Номер телефона</p>
                        <div className="call-number">
                            <input type="number" />
                            <button type="submit">Вызвать мастера</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}

export default MainPageComponent;