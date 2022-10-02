import React, { useState, useEffect } from 'react';
import '../scss/components/header.css';
import { Logo, HeaderItem } from './index';
import { iconSearchHeader, iconInstagramHeader, iconMailHeader, iconPhoneHeader, iconPlaceHeader, iconTelegramHeader } from './images';
import { Link } from 'react-router-dom';

function HeaderComponent() {
    const inputHeaderBI = {
        backgroundImage: `url(${iconSearchHeader})`
    }
    return (
        <div className="container">
            <div className="header-info">
                <div className="header-info-contacts">
                    <HeaderItem imgSrc={iconPlaceHeader} text={'Макаёнка 12-в, корпус 1'} info={'https://yandex.by/maps/org/phonehelper/111687532888/?from=mapframe&ll=27.625660%2C53.923764&z=14'} />
                    <HeaderItem imgSrc={iconPhoneHeader} text={'+ 375 (33) 623-50-45'}  info={'tel:+375336235045'}/>
                    <HeaderItem imgSrc={iconPhoneHeader} text={'+ 375 (29) 623-50-45'} info={'tel:+375296235045'} />
                    <HeaderItem imgSrc={iconMailHeader} text={'sus2018cc@yandex.ru'} info={'mailto:sus2018cc@yandex.ru'} />
                    <HeaderItem imgSrc={iconTelegramHeader} text={'phonehelper.by'} info={'https://t.me/PhoneHelper'} />
                    <HeaderItem imgSrc={iconInstagramHeader} text={'@PhoneHelper'} info={'https://www.instagram.com/phonehelper.by/'} />
                    <div className="header-info-search">
                        <input type="text" style={inputHeaderBI} />
                    </div>
                </div>

            </div>
            <div className="header-navigation">
                <Logo />
                <nav>
                    <ul className="menu">
                        <li><Link to='/firstHelp'>Первая помощь</Link></li>
                        <li><Link to='/about'>О нас</Link></li>
                        <li><Link to='/guarantee'>Гарантия</Link></li>
                        <li><Link to='/contact'>Контакты</Link></li>
                    </ul>
                </nav>
            </div>
        </div> 
    );
}

export default HeaderComponent;