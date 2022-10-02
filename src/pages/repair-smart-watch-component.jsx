import React from "react";
import '../scss/pages/smart-watch.css';
import { Title, RepairOrderButton, ConsultationButton, ModalConsultationComponent, ModalOrderComponent, Modal } from '../components/index';

import { mainImageSmartWatch, glassImg, screenImg, buttonsImg, batteryImg, boardImg, osImg, glassScreenImg } from './images'

import { useState } from 'react';

function RepairSmartWatchComponent() {
    const [modalActive, setModalActive] = useState(false);
    const [modalActiveOrder, setModalActiveOrder] = useState(false);
   let handleClickButton = (active) => {
        setModalActive(active);
    }
    let handleClickOrder = (active) => {
        setModalActiveOrder(active);
    }

    let smartWatchSlider = {
        backgroundImage: `url(${mainImageSmartWatch})`
    }
    let glassScreen = {
        backgroundImage: `url(${glassScreenImg})`
    }
    let glassBI = {
        backgroundImage: `url(${glassImg})`
    }
    let screenBI = {
        backgroundImage: `url(${screenImg})`
    }
    let buttonsBI = {
        backgroundImage: `url(${buttonsImg})`
    }
    let batteryBI = {
        backgroundImage: `url(${batteryImg})`
    }
    let boardBI = {
        backgroundImage: `url(${boardImg})`
    }
    let osBI = {
        backgroundImage: `url(${osImg})`
    }
    return (
        <div className="container">

            <section className="smart-watch-slider" style={smartWatchSlider}>
                <Title classTitle={"smart-watch-title"} name={'Ремонт смарт часов'} text1={'Диагностируем неисправность. Для ремонта используем комплектующие самого высокого качества, что гарантирует вам безопасный и быстрый ремонт.'} />
                <RepairOrderButton handleClickOrder={handleClickOrder} />
                <Modal active={modalActiveOrder} setActive={setModalActiveOrder}><ModalOrderComponent/></Modal>
            </section>

            <section className="smart-watch-info">

                <div className="smart-watch-options">

                    <div className="smart-watch-container glass-smart" style={glassBI}>
                        <div className="smart-watch-glass" style={glassScreen}>Замена стекла</div>
                    </div>
                    <div className="smart-watch-container screen" style={screenBI}>
                        <div className="smart-watch-glass" style={glassScreen}>Замена экрана</div>
                    </div>
                    <div className="smart-watch-container buttons" style={buttonsBI}>
                        <div className="smart-watch-glass" style={glassScreen}>Замена, чистка кнопок</div>
                    </div>
                    <div className="smart-watch-container battery" style={batteryBI}>
                        <div className="smart-watch-glass" style={glassScreen}>Замена аккумулятора</div>
                    </div>
                    <div className="smart-watch-container board" style={boardBI}>
                        <div className="smart-watch-glass" style={glassScreen}>Ремонт платы </div>
                    </div>
                    <div className="smart-watch-container os" style={osBI}>
                        <div className="smart-watch-glass" style={glassScreen}>Настройка, восстанолвение ОС, прошивка</div>
                    </div>


                </div>

                <div className="smart-watch-info-text">
                    В нашем серфисном центре вы можете отремонтировать смарт часы практически любой фирмы. <span>В случае сомнений свяжитесь с нами.</span> <br /> Мы будем рады ответить на ваши вопросы.
                </div>

                <ConsultationButton classProps="smart-watch-consultation" handleClickButton={handleClickButton} />
                <Modal active={modalActive} setActive={setModalActive}><ModalConsultationComponent/></Modal>
            </section>
        </div>
    );
}

export default RepairSmartWatchComponent;