import React from "react";
import '../scss/pages/glass.css';

import { Title, ConsultationButton, Modal, ModalConsultationComponent } from '../components/index';

import { mainImageGlassReplacement, vectorReasonsGlass1, vectorReasonsGlass2, vectorReasonsGlass3, vectorReasonsGlass4, icon1Glass, icon2Glass, icon3Glass, icon4Glass, icon5Glass, vectorOddGlass, vectorEvenGlass } from './images';

import { useState } from 'react';

function RepairGlassComponent() {
    const [modalActive, setModalActive] = useState(false);
   let handleClickButton = (active) => {
        setModalActive(active);
    }
    return (
        <div className="container">

            <Title name={'ЗАМЕНА СТЕКЛА'} classTitle={'glass-replacement-title'} />

            <div className="glass-replacement-reasons">
                <div className="glass-replacement-reasons-container">

                    <img src={mainImageGlassReplacement} alt="" className="glass-replacement-reason-image" />

                    <div className="glass-replacement-reasons-info address">
                        <p><span>Вы пришли по адресу!</span></p>
                        <img src={vectorReasonsGlass1} alt="" />
                    </div>
                    <div className="glass-replacement-reasons-info phone">
                        <p>Если у вас телефон или планшет с разбитым стеклом и вам везде говорят что нужно менять дисплейный модуль, не расстраивайтесь. </p>
                        <img src={vectorReasonsGlass3} alt="" />
                    </div>
                    <div className="glass-replacement-reasons-info glass">
                        <img src={vectorReasonsGlass2} alt="" />
                        <p>В нашем сервисном центре, вы сможете заменить разбитое стекло.</p>
                    </div>
                    <div className="glass-replacement-reasons-info display">
                        <img src={vectorReasonsGlass4} alt="" />
                        <p>Мы можем срезать разбитое стекло  и вернуть ваш дисплейный модуль в исходное состояние до падения. </p>
                    </div>

                </div>
            </div>

            <div className="glass-replacement-process">
                <div className="process-container">

                    <h3>ПРОЦЕСС СРЕЗА СТЕКЛА</h3>

                    <div className="glass-replacement-process-instruction">
                        <div className="process-instruction-01">

                            <img src={icon1Glass} alt="Icon" className="process-instruction-icon" />
                            <img src={vectorOddGlass} alt="Vector" className="process-instruction-vector" />

                            <div className="process-instruction-container-01">
                                <div className="process-instruction-container-num process-01">
                                    <p>01</p>
                                </div>
                                <p className="process-instruction-container-text-01">
                                    Разбираем телефон или планшет и аккуратно достаем дисплей.
                                </p>
                            </div>

                        </div>

                        <div className="process-instruction-02">
                            <div className="process-instruction-container-02">
                                <p className="process-instruction-container-text-02">
                                    С помощью специальных жидкостей убираем остатки старого клея.
                                </p>
                                <div className="process-instruction-container-num process-02">
                                    <p>02</p>
                                </div>
                            </div>
                            <img src={vectorEvenGlass} alt="Vector" className="process-instruction-vector" />
                            <img src={icon2Glass} alt="" className="process-instruction-icon" />
                        </div>

                        <div className="process-instruction-01">

                            <img src={icon3Glass} alt="" className="process-instruction-icon" />
                            <img src={vectorOddGlass} alt="Vector" className="process-instruction-vector" />

                            <div className="process-instruction-container-01">
                                <div className="process-instruction-container-num process-01">
                                   <p>03</p>
                                </div>
                                <p className="process-instruction-container-text-01">
                                    В беспылевой комнате наносим новую пленку, устанавливаем новое стекло.
                                </p>
                            </div>
                        </div>

                        <div className="process-instruction-02">
                            <div className="process-instruction-container-02">
                                <p className="process-instruction-container-text-02">
                                    Ламинируем, выкачиваем воздух в специальном ламинаторе под давлениием и убираем пузырьки воздуха.
                                </p>
                                <div className="process-instruction-container-num process-02">
                                  <p>04</p>
                                </div>
                            </div>
                            <img src={vectorEvenGlass} alt="Vector" className="process-instruction-vector" />
                            <img src={icon4Glass} alt="" className="process-instruction-icon" />
                        </div>

                        <div className="process-instruction-01">
                            <img src={icon5Glass} alt="" className="process-instruction-icon" />
                            <img src={vectorOddGlass} alt="Vector" className="process-instruction-vector" />
                            <div className="process-instruction-container-01">
                                <div className="process-instruction-container-num process-01">
                                    <p>05</p>
                                </div>
                                <p className="process-instruction-container-text-01">
                                    Собираем телефон.
                                </p>
                            </div>
                        </div>

                    </div>

                    <ConsultationButton classProps="glass-replacement-button" handleClickButton={handleClickButton} />
                    <Modal active={modalActive} setActive={setModalActive}><ModalConsultationComponent/></Modal>

                </div>
            </div>

        </div>
    );
}

export default RepairGlassComponent;