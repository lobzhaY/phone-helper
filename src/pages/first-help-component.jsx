import React from "react";
import '../scss/pages/first-help.css';

import {  Modal, ModalOrderComponent } from '../components/index'
import { mainImageFirstHelp, arrowFirstHelp, verticalArrFirstHelp, horizonVectorFirstHelp, vectorFirstHelp, mainVectorFirstHelp, horizonFirstHelp, icon1FirstHelp, icon2FirstHelp, icon3FirstHelp, icon4FirstHelp, icon5FirstHelp, icon6FirstHelp, icon7FirstHelp, icon8FirstHelp, icon9FirstHelp, icon10FirstHelp } from './images';

import { useState } from 'react';

function FirstHelpComponent() {
    const [modalActiveOrder, setModalActiveOrder] = useState(false);
    let handleClickOrder = () => {
        setModalActiveOrder(true);
    }
    const firstItemVectorBI = {
        backgroundImage: `url(${horizonFirstHelp})`
    };
    return (
            <section className='first-help-section'>

                <div className="first-help">
                    <div className="first-help-container">

                        <div className="first-help-title-container">
                            <div className="first-help-title">
                                <div className="first-help-text">
                                    <h1>ПЕРВАЯ ПОМОЩЬ</h1>
                                    <img src={vectorFirstHelp} />
                                    <p>В некоторых случаях девайс можно попробовать реанимировать в домашних условиях,
                                        используя подручные средства</p>
                                </div>
                            </div>
                        </div>

                        <div className="first-help-images">
                            <img src={mainImageFirstHelp} alt="First help" />
                        </div>

                        <div className="first-help-attention-container">

                            <div className="attention-text">
                                <h2>ВНИМАНИЕ!</h2>
                                <p>Указанные способы не всегда могут помочь устройству. Для точной диагностики следует
                                    обратится к специалисту.</p>
                                <button onClick={() => handleClickOrder()}>Заказ ремонта</button>
                            </div>
                            <div className="first-help-attention"></div>
                        </div>
                    </div>
                </div>
                <Modal active={modalActiveOrder} setActive={setModalActiveOrder}><ModalOrderComponent/></Modal>
                <img src={mainVectorFirstHelp} alt="Vector" className="main-first-help-vector" />

                <div className="about-first-help">
                    <div className="about-water">

                        <img src={horizonVectorFirstHelp} alt="Vector" className="horizon-vector-water" />
                        <div className="vector-title">
                            <h3 className="about-first-title">Что делать если аппарат попал в воду </h3>
                            <div className="about-first-text">Такой способ при немедленном его решении может помочь на 70 %. </div>
                        </div>

                        <div className="water">
                            <div className="about-first-items">

                                <div className="about-first-item">
                                    <div className="item-title"><p>01</p></div>
                                    <div className="item-icons">
                                        <img src={icon1FirstHelp} alt="" className="item-icon" />
                                    </div>
                                    <img src={verticalArrFirstHelp} alt="" className="item-vector" />
                                    <div className="item-text">Необходимо вынуть аккумулятор.</div>
                                </div>

                                <div className="about-first-item">
                                    <div className="item-title"><p>02</p></div>
                                    <div className="item-icons">
                                        <img src={icon2FirstHelp} alt="" className="item-icon" />
                                    </div>
                                    <img src={verticalArrFirstHelp} alt="" className="item-vector" />
                                    <div className="item-text">Аккуратно разобрать устройство.</div>
                                </div>
                                <div className="about-first-item">
                                    <div className="item-title"><p>03</p></div>
                                    <div className="item-icons">
                                        <img src={icon3FirstHelp} alt="" className="item-icon" />
                                    </div>
                                    <img src={verticalArrFirstHelp} alt="" className="item-vector" />
                                    <div className="item-text">Просушить 15 минут феном.</div>
                                </div>
                                <div className="about-first-item">
                                    <div className="item-title"><p>04</p></div>
                                    <div className="item-icons">
                                        <img src={icon4FirstHelp} alt="" className="item-icon" />
                                    </div>
                                    <img src={verticalArrFirstHelp} alt="" className="item-vector" />
                                    <div className="item-text">После просушки дать устройству остыть </div>
                                </div>
                                <div className="about-first-item">
                                    <div className="item-title"><p>05</p></div>
                                    <div className="item-icons">
                                        <img src={icon5FirstHelp} alt="" className="item-icon" />
                                    </div>
                                    <img src={verticalArrFirstHelp} alt="" className="item-vector" />
                                    <div className="item-text">Собрать аппарат попробовать включить.</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="about-liquid">

                        <img src={horizonVectorFirstHelp} alt="Vector" className="horizon-vector-liquid" />
                        <div className="vector-title-liquid">
                            <h3 className="about-first-title">Если в устройство попала сладкая, солёная или маслянистая жидкость</h3>
                            <div className="about-first-text">Такой способ помогает спасти устройство на некоторое время</div>
                        </div>

                        <div className="liquid">

                            <div className="about-first-items">
                                <div className="about-first-item">
                                    <div className="item-title"><p>01</p></div>
                                    <div className="item-icons">
                                        <img src={icon6FirstHelp} alt="" className="item-icon" />
                                    </div>
                                    <img src={verticalArrFirstHelp} alt="" className="item-vector" />
                                    <div className="item-text">Необходимо вынуть аккумулятор.</div>
                                </div>
                                <div className="about-first-item">
                                    <div className="item-title"><p>02</p></div>
                                    <div className="item-icons">
                                        <img src={icon7FirstHelp} alt="" className="item-icon" />
                                    </div>
                                    <img src={verticalArrFirstHelp} alt="" className="item-vector" />
                                    <div className="item-text">Аккуратно разобрать устройство.</div>
                                </div>
                                <div className="about-first-item">
                                    <div className="item-title"><p>03</p></div>
                                    <div className="item-icons">
                                        <img src={icon8FirstHelp} alt="" className="item-icon" />
                                    </div>
                                    <img src={verticalArrFirstHelp} alt="" className="item-vector" />
                                    <div className="item-text">Прочистить зубной щёткой все электронные компоненты кроме Экранов и Сенсоров.</div>
                                </div>
                                <div className="about-first-item">
                                    <div className="item-title"><p>04</p></div>
                                    <div className="item-icons">
                                        <img src={icon9FirstHelp} alt="" className="item-icon" />
                                    </div>
                                    <img src={verticalArrFirstHelp} alt="" className="item-vector" />
                                    <div className="item-text">Очистить от остатков жидкости корпусные запчасти</div>
                                </div>
                                <div className="about-first-item">
                                    <div className="item-title"><p>05</p></div>
                                    <div className="item-icons">
                                        <img src={icon10FirstHelp} alt="" className="item-icon" />
                                    </div>
                                    <img src={verticalArrFirstHelp} alt="" className="item-vector" />
                                    <div className="item-text">Собрать аппарат попробовать включить.</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="about-battery">

                    <img src={horizonVectorFirstHelp} alt="Vector" className="horizon-vector-battery" />
                    <div className="vector-title-battery">

                        <h3 className="about-first-title">Проблемы с аккумулятором</h3>
                    </div>

                    <div className="battery-info">
                        <div className="about-first-items">
                            <div className="first-item">Устройство не включается и при подключении ЗУ не заряжается</div>
                            <div className="first-item">Устройство долго заряжается</div>
                            <div className="first-item">Устройство быстро разряжается</div>
                            <div className="first-item">Устройство неравномерно показывает процент заряда</div>
                            <div className="first-item">Устройство выдаёт ошибки во время подключения к ЗУ</div>
                        </div>
                        <div className="first-item-vector" style={firstItemVectorBI}>
                            <img src={arrowFirstHelp} alt="" />
                            <img src={arrowFirstHelp} alt="" />
                            <img src={arrowFirstHelp} alt="" />
                        </div>
                        <div className="first-text">В этом случае можно попробовать заменить батарейку, т.к. аккумулятор может выходить из строя, вызывая сбои и неисправности в телефоне.</div>
                    </div>
                </div>

                <div className="about-os">

                    <img src={horizonVectorFirstHelp} alt="Vector" className="horizon-vector-os" />
                    <div className="vector-title-os">
                        <h3 className="about-first-title">Проблемы с операционной системой устройства</h3>
                    </div>
                    
                    <div className="operating-system">
                        <div className="about-first-items">
                            <div className="first-item">Аппарат сильно глючит и долго открывает нужные приложения</div>
                            <div className="first-item">Аппарат очень долго грузит ОС</div>
                            <div className="first-item">При включении на экране нет никаких признаков жизни</div>
                            <div className="first-item">Приложения перестали открываться</div>
                            <div className="first-item">Аппарат выдаёт ошибки</div>
                        </div>
                        <div className="first-item-vector" style={firstItemVectorBI}>
                            <img src={arrowFirstHelp} alt="" />
                            <img src={arrowFirstHelp} alt="" />
                            <img src={arrowFirstHelp} alt="" />
                        </div>
                        <div className="first-text">В данном случае можно попробовать форматирование ОС. Все ваши данные на внутренней памяти устройства удалятся!!!</div>
                    </div>
                </div>

                </div>

            </section>
    );
}

export default FirstHelpComponent;