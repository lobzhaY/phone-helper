import React, { useState, useEffect } from 'react';
import './header-component.css';
import HeaderInfoItem from '../../building-components/header-item/header-item';
import HeaderInput from '../../building-components/inputs/header-inputs/header-input';
import Logo from '../../building-components/logo/logo';
import Navigation from '../../building-components/navigation/navigation';

import placeIcon from './img/placeIcon.png';
import phoneIcon from './img/phoneIcon.png';
import mailIcon from './img/mailIcon.png';
import telegramIcon from './img/telegramIcon.png';
import instagramIcon from './img/instagramIcon.png';


function HeaderComponent() {
    return (
        <div class="container">
            <div class="header-info">
                <div class="header-info-contacts">
                    <HeaderInfoItem imgSrc={placeIcon} text={'г.Минск, ул. Макаёнка, 12В'} />
                    <HeaderInfoItem imgSrc={phoneIcon} text={'+ ххх (хх) ххх-хх-хх'} />
                    <HeaderInfoItem imgSrc={mailIcon} text={'@gmail.com'} />
                    <HeaderInfoItem imgSrc={telegramIcon} />
                    <HeaderInfoItem imgSrc={instagramIcon} />
                    <HeaderInput />
                </div>
                
            </div>
            <div class="header-navigation">
                    <Logo />
                    <Navigation />
                </div>
        </div>
    );
}

export default HeaderComponent;