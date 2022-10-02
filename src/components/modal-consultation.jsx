import React from "react";
import '../scss/components/modal-consultation.css';

import { mainImageModelConsultation, iconCallModelConsultation, iconUserModelConsultation } from './images';


function ModalConsultationComponent() {
    const inputIconCallBI = {
        backgroundImage: `url(${iconCallModelConsultation})`
    };
    const inputIconUserBI = {
        backgroundImage: `url(${iconUserModelConsultation})`
    };
    return (
        <div id="modal-window-consultation" className="container">
        <div className="modal-window-consultation-image">
            <img src={mainImageModelConsultation} alt="Consultation" className="consultation-image" />
        </div>
        <div className="modal-window-consultation-info">
            <h1 className="modal-window-consultation-title">Получите бесплатную консультацию мастера</h1>
            <hr className="modal-window-consultation-line" />
            <p className="modal-window-consultation-text">Введите контактные данные, мы вам перезвоним</p>
            <div className="modal-window-consultation-form">
                <input type="text" placeholder="Введите ваше имя" className="modal-window-consultation-name" style={inputIconUserBI} />
                <input type="text" placeholder="Введите номер телефона" className="modal-window-consultation-phone" style={inputIconCallBI} />
                <button type="button" className="modal-window-consultation-button">Получить консультацию</button>
            </div>
        </div>
    </div>
    );
}

export default ModalConsultationComponent;