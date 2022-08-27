import React from "react";
import './contact-component.css';

import map from './map.png'

function ContactComponent() {
    return (
        <div className='container'>
            <div className="contacts">
            <div class="map">
                <img src={map} alt="Map" />
            </div>
            <div class="map-info">
                <h2 class="map-titel">Наши контакты</h2>
                <div class="map-contacts">
                    <ul>
                        <li>+375 (17) ХХХ-ХХ-ХХ</li>
                        <li>+375 (29) ХХХ-ХХ-ХХ</li>
                        <li>г. Минск, ул.Макаенка,</li>
                        <li>Время работы:</li>
                        <li>Пн-Вс. 10:00 – 20:00</li>
                    </ul>
                </div>
            </div>
            </div>
        </div>
    );
}

export default ContactComponent;