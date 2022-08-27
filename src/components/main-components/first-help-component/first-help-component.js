import React from "react";
import './first-help-component.css';
import FirstHelpItem from "../../building-components/first-help-item/first-help-item";
import FirstHelpItemTitle from "../../building-components/first-help-item-title/first-help-item-title";

import horizontVector from './img/horizon-vector.png';
import textVector from './img/text-vector.png';
import arrowVector from './img/last-arrow-vector.png';

function FirstHelpComponent() {
    return (
        <div class="container">
            <section className='first-help-section'>

                <div class="first-help">
                    <div class="first-help-container">

                        <div class="first-help-titel-container">
                            <div class="first-help-titel">
                                <div class="first-help-text">
                                    <h1>ПЕРВАЯ ПОМОЩЬ</h1>
                                    <img src="../IMG/first-help-page/first-help-vector.png" />
                                    <p>В некоторых случаях девайс можно попробовать реанимировать в домашних условиях,
                                        используя подручные средства</p>
                                </div>
                            </div>
                        </div>

                        <div class="first-help-images">
                            <img src="../IMG/first-help-page/first-help.png" alt="First help" />
                        </div>

                        <div class="first-help-attention-container">

                            <div class="attention-text">
                                <h2>ВНИМАНИЕ!</h2>
                                <p>Указанные способы не всегда могут помочь устройству. Для точной диагностики следует
                                    обратится к специалисту.</p>
                                <button>Заказ ремонта</button>

                            </div>
                            <div class="first-help-attention"></div>
                        </div>

                    </div>
                </div>

                <img src="../IMG/first-help-page/main-vector.png" alt="Vector" class="main-first-help-vector" />

                <div class="about-first-help">
                    <div class="about-water">

                        <img src="../IMG/first-help-page/horizon-vector.png" alt="Vector" class="horizon-vector-water" />
                        <div class="vector-title">
                            <img src="../IMG/first-help-page/text-vector.png" alt="Left vector" class="text-vector" />
                            <h3 class="about-first-titel">Что делать если аппарат попал в воду </h3>
                            <div class="about-first-text">Такой способ при немедленном его решении может помочь на 70 %. </div>
                        </div>

                        <div class="water">
                            <div class="about-first-items">
                                <div class="about-first-item">
                                    <div class="item-title"><img src="../IMG/first-help-page/01.png" alt="01" /></div>
                                    <div class="item-icons">
                                        <img src="../IMG/first-help-page/icon1.png" alt="" class="item-icon" />
                                    </div>
                                    <img src="../IMG/first-help-page/vertical-vector.png" alt="" class="item-vector" />
                                    <div class="item-text">Необходимо вынуть аккумулятор.</div>
                                </div>
                                <div class="about-first-item">
                                    <div class="item-title"><img src="../IMG/first-help-page/02.png" alt="02" /></div>
                                    <div class="item-icons">
                                        <img src="../IMG/first-help-page/icon2.png" alt="" class="item-icon" />
                                    </div>
                                    <img src="../IMG/first-help-page/vertical-vector.png" alt="" class="item-vector" />
                                    <div class="item-text">Аккуратно разобрать устройство.</div>
                                </div>
                                <div class="about-first-item">
                                    <div class="item-title"><img src="../IMG/first-help-page/03.png" alt="03" /></div>
                                    <div class="item-icons">
                                        <img src="../IMG/first-help-page/icon3.png" alt="" class="item-icon" />
                                    </div>
                                    <img src="../IMG/first-help-page/vertical-vector.png" alt="" class="item-vector" />
                                    <div class="item-text">Просушить 15 минут феном.</div>
                                </div>
                                <div class="about-first-item">
                                    <div class="item-title"><img src="../IMG/first-help-page/04.png" alt="04" /></div>
                                    <div class="item-icons">
                                        <img src="../IMG/first-help-page/icon4.png" alt="" class="item-icon" />
                                    </div>
                                    <img src="../IMG/first-help-page/vertical-vector.png" alt="" class="item-vector" />
                                    <div class="item-text">После просушки дать устройству остыть </div>
                                </div>
                                <div class="about-first-item">
                                    <div class="item-title"><img src="../IMG/first-help-page/05.png" alt="05" /></div>
                                    <div class="item-icons">
                                        <img src="../IMG/first-help-page/icon5.png" alt="" class="item-icon" />
                                    </div>
                                    <img src="../IMG/first-help-page/vertical-vector.png" alt="" class="item-vector" />
                                    <div class="item-text">Собрать аппарат попробовать включить.</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="about-liquid">

                        <img src="../IMG/first-help-page/horizon-vector.png" alt="Vector" class="horizon-vector-liquid" />
                        <div class="vector-title-liquid">
                            <img src="../IMG/first-help-page/text-vector.png" alt="Left vector" class="text-vector" />
                            <h3 class="about-first-titel">Если в устройство попала сладкая, солёная или маслянистая жидкость</h3>
                            <div class="about-first-text">Такой способ помогает спасти устройство на некоторое время</div>
                        </div>

                        <div class="liquid">

                            <div class="about-first-items">
                                <div class="about-first-item">
                                    <div class="item-title"><img src="../IMG/first-help-page/01.png" alt="01" /></div>
                                    <div class="item-icons">
                                        <img src="../IMG/first-help-page/icon6.png" alt="" class="item-icon" />
                                    </div>
                                    <img src="../IMG/first-help-page/vertical-vector.png" alt="" class="item-vector" />
                                    <div class="item-text">Необходимо вынуть аккумулятор.</div>
                                </div>
                                <div class="about-first-item">
                                    <div class="item-title"><img src="../IMG/first-help-page/02.png" alt="02" /></div>
                                    <div class="item-icons">
                                        <img src="../IMG/first-help-page/icon7.png" alt="" class="item-icon" />
                                    </div>
                                    <img src="../IMG/first-help-page/vertical-vector.png" alt="" class="item-vector" />
                                    <div class="item-text">Аккуратно разобрать устройство.</div>
                                </div>
                                <div class="about-first-item">
                                    <div class="item-title"><img src="../IMG/first-help-page/03.png" alt="03" /></div>
                                    <div class="item-icons">
                                        <img src="../IMG/first-help-page/icon8.png" alt="" class="item-icon" />
                                    </div>
                                    <img src="../IMG/first-help-page/vertical-vector.png" alt="" class="item-vector" />
                                    <div class="item-text">Прочистить зубной щёткой все электронные компоненты кроме Экранов и Сенсоров.</div>
                                </div>
                                <div class="about-first-item">
                                    <div class="item-title"><img src="../IMG/first-help-page/04.png" alt="04" /></div>
                                    <div class="item-icons">
                                        <img src="../IMG/first-help-page/icon9.png" alt="" class="item-icon" />
                                    </div>
                                    <img src="../IMG/first-help-page/vertical-vector.png" alt="" class="item-vector" />
                                    <div class="item-text">Очистить от остатков жидкости корпусные запчасти</div>
                                </div>
                                <div class="about-first-item">
                                    <div class="item-title"><img src="../IMG/first-help-page/05.png" alt="05" /></div>
                                    <div class="item-icons">
                                        <img src="../IMG/first-help-page/icon10.png" alt="" class="item-icon" />
                                    </div>
                                    <img src="../IMG/first-help-page/vertical-vector.png" alt="" class="item-vector" />
                                    <div class="item-text">Собрать аппарат попробовать включить.</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="about-battery">
                    <FirstHelpItemTitle text='Проблемы с аккумулятором' classVector='vector-title-battery' imgHorizon={horizontVector} imgText={textVector} />
                        <FirstHelpItem classNameItem='battery' itemText1='Устройство не включается и при подключении ЗУ не заряжается'
                            itemText2='Устройство долго заряжается' itemText3='Устройство быстро разряжается'
                            itemText4='Устройство неравномерно показывает процент заряда' itemText5='Устройство выдаёт ошибки во время подключения к ЗУ' imgSrc={arrowVector}
                            text='В этом случае можно попробовать заменить батарейку, т.к. аккумулятор может выходить из строя, вызывая сбои и неисправности в телефоне.' />
                    </div>

                    <div class="about-os">
                        <FirstHelpItemTitle text='Проблемы с операционной системой устройства' classVector='vector-title-os' imgHorizon={horizontVector} imgText={textVector} />
                        <FirstHelpItem classNameItem='operating-system' itemText1='Аппарат сильно глючит и долго открывает нужные приложения'
                            itemText2='Аппарат очень долго грузит ОС' itemText3='При включении на экране нет никаких признаков жизни'
                            itemText4='Приложения перестали открываться' itemText5='Аппарат выдаёт ошибки' imgSrc={arrowVector}
                            text='В данном случае можно попробовать форматирование ОС. Все ваши данные на внутренней памяти устройства удалятся!!!' />
                    </div>

                </div>

            </section>
        </div>
    );
}

export default FirstHelpComponent;