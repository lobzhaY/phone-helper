import React from "react";
import { Link } from 'react-router-dom';
import '../scss/pages/laptop.css';

import { Title, RepairOrderButton, Modal, ModalOrderComponent } from '../components/index';

import { mainImageLaptopRepair, modelLaptopRepair, icon1Laptop, icon2Laptop, icon3Laptop, icon4Laptop, icon5Laptop, icon6Laptop, vectorOddLaptop, vectorEvenLaptop, vectorLaptop } from './images';

import { useState } from 'react';

const laptopModel = ['Apple iPad', 'Samsung', 'Asus', 'Sony', 'Xiaomi', 'Google'];

function LaptopRepairComponent() {
    const [modalActiveOrder, setModalActiveOrder] = useState(false);
    let handleClickOrder = (active) => {
        setModalActiveOrder(active);
    }
    const laptopRepairBI = {
        backgroundImage: `url(${mainImageLaptopRepair})`
    };
    const modelLaptopBI = {
        backgroundImage: `url(${modelLaptopRepair})`
    };
    return (
        <div className="container">
            <Title classTitle={'container-title tablet-repair-title'} hrWidth={650} name={'Ремонт планшетов'} text1={'Планшеты являются более удобными в эксплуатации, чем ноутбуки или нетбуки, однако в сравнении с последними сильнее подвержены износу.'} />

            <div className="tablet-repair-models">
          
                    {
                        laptopModel.map((el, index) => 
                            <Link to='/brandLaptop'>
                                 <div key={index}>
                                    <div className="triangle">
                                        <p className="model-triangle-text">{el}</p>
                                    </div>
                                </div>
                            </Link>
                        )}
        
            </div>

            <div className="tablet-repair-main-image" style={laptopRepairBI}></div>

            <div className="tablet-repair-info">
                <div className="tablet-repair-info-container">
                <div className="tablet-repair-info-item-odd">
                        <div className="tablet-repair-info-item-text">
                            <h3>Механические повреждения</h3>
                            <p>Причины механических повреждений могут быть самые различные, от внезапного удара посторонними предметами до падения на пол. В результате может потребоваться либо косметический ремонт или замена поврежденных внешних элементов, либо полная замена электроники.</p>
                        </div>
                        <img src={vectorOddLaptop} alt="arrow" />
                        <div className="tablet-repair-info-item-img">
                            <div className="tablet-repair-info-item-img-border">
                                <img src={icon1Laptop} alt="" />
                            </div>
                        </div>
                        <p className="tablet-repair-info-item-num">01</p>
                    </div>
                    <img className="tablet-repair-info-vector" src={vectorLaptop} alt="Vector" />

                    <div className="tablet-repair-info-item-even">
                        <p className="tablet-repair-info-item-num">02</p>
                        <div className="tablet-repair-info-item-img">
                            <div className="tablet-repair-info-item-img-border">
                                <img src={icon2Laptop} alt="" />
                            </div>
                        </div>
                        <img src={vectorEvenLaptop} alt="arrow" />
                        <div className="tablet-repair-info-item-text">
                            <h3>Проблемы со звуком</h3>
                            <p>Причин тому, что динамики планшета не работают, может быть несколько. Однако практика показывает, что наиболее частыми причинами отсутствия звука являются неисправный разъем для наушников либо вышедшая из строя аудиокарта.</p>
                        </div>                     
                    </div>
                    <img className="tablet-repair-info-vector" src={vectorLaptop} alt="Vector" />

                    <div className="tablet-repair-info-item-odd">
                        <div className="tablet-repair-info-item-text">
                            <h3>Невозможность соединения с сетью</h3>
                            <p>Грамотную диагностику этой проблемы может провести только квалифицированный специалист. Поэтому при отсутствии соединения необходимо обратиться в мастерскую. Наиболее частыми причинами отсутствия соединения являются неправильные настройки или некорректная работа прошивки.</p>
                        </div>
                        <img src={vectorOddLaptop} alt="arrow" />
                        <div className="tablet-repair-info-item-img">
                            <div className="tablet-repair-info-item-img-border">
                                <img src={icon3Laptop} alt="" />
                            </div>
                        </div>
                        <p className="tablet-repair-info-item-num">03</p>
                    </div>
                    <img className="tablet-repair-info-vector" src={vectorLaptop} alt="Vector" />

                    <div className="tablet-repair-info-item-even">
                        <p className="tablet-repair-info-item-num">04</p>
                        <div className="tablet-repair-info-item-img">
                            <div className="tablet-repair-info-item-img-border">
                                <img src={icon4Laptop} alt="" />
                            </div>
                        </div>
                        <img src={vectorEvenLaptop} alt="arrow" />
                        <div className="tablet-repair-info-item-text">
                            <h3>Проблемы с запуском</h3>
                            <p>Причины могут быть самые различные, от некорректной работы загрузочного программного обеспечения до неисправностей в линии подачи питания. В любом случае, если стандартные пользовательские средства не помогают, необходим срочный ремонт.</p>
                        </div>                     
                    </div>
                    <img className="tablet-repair-info-vector" src={vectorLaptop} alt="Vector" />

                    <div className="tablet-repair-info-item-odd">
                        <div className="tablet-repair-info-item-text">
                            <h3>Некорректная работа тачскрина</h3>
                            <p> Источником проблемы могут быть как программные так и аппаратные неполадки, для устранения которых применяют различные методы – от перепрошивки до замены шлейфа или самого тачскрина. </p>
                        </div>
                        <img src={vectorOddLaptop} alt="arrow" />
                        <div className="tablet-repair-info-item-img">
                            <div className="tablet-repair-info-item-img-border">
                                <img src={icon5Laptop} alt="" />
                            </div>
                        </div>
                        <p className="tablet-repair-info-item-num">05</p>
                    </div>
                    <img className="tablet-repair-info-vector" src={vectorLaptop} alt="Vector" />

                    <div className="tablet-repair-info-item-even">
                        <p className="tablet-repair-info-item-num">06</p>
                        <div className="tablet-repair-info-item-img">
                            <div className="tablet-repair-info-item-img-border">
                                <img src={icon6Laptop} alt="" />
                            </div>
                        </div>
                        <img src={vectorEvenLaptop} alt="arrow" />
                        <div className="tablet-repair-info-item-text">
                            <h3>Неисправности дисплея</h3>
                            <p>В большинстве случаев источником проблемы является неисправная матрица или соединительный шлейф. Не менее распространенными являются механические повреждения экрана. Что именно вышло из строя поможет понять грамотное диагностирование</p>
                        </div>

                </div>
            </div>

            <div className="tablet-repair-button">
                <p>Если ваш электронный планшет стал некорректно работать, приносите его к нам. Наши мастера ждут вас и всегда готовы сделать ремонт.</p>
                <RepairOrderButton classProps='tablet-repair-button-class'  handleClickOrder={handleClickOrder} />
            </div>
            <Modal active={modalActiveOrder} setActive={setModalActiveOrder}><ModalOrderComponent/></Modal>
        </div>
        </div>
    );
}

export default LaptopRepairComponent;