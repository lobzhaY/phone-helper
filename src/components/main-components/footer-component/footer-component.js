import React, { useState, useEffect } from 'react';
import './footer-component.css';
import FooterImg from '../../building-components/images/footer-img/footer-img';
import FooterText from '../../building-components/text/footer-text/footer-text';

import instagramIcon from './img/instagramIcon.png';
import placeMarker from './img/placeMarker.png';
import telegramIcon from './img/telegramIcon.png';

function FooterComponent() {
    return (
        <div class="container">
            <div class="footer-info">
                <h5>Наши контакты</h5>
                <img class="icon" src={placeMarker} />
                <div class="footer-info-text">
                    <FooterText text={"Адрес"} />
                    <FooterText text={"+ ххх (хх) ххх-хх-хх"} />
                    <FooterText text={"@gmail.com"} />
                    <FooterText text={"Режим работы: хх:хх - хх:хх"} />
                </div>
                <div class="footer-info-icons">
                    <FooterImg imgSrc={instagramIcon} />
                    <FooterImg imgSrc={telegramIcon} />
                </div>
            </div>
        </div>
    );
}

export default FooterComponent;