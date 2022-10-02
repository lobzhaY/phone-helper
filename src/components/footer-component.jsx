import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../scss/components/footer.css';
import { iconPlaceHeader, iconInstagramHeader, iconTelegramHeader } from './images';

function FooterComponent() {
    return (
        <footer>

            <div className="container">
                <div className="footer-info">
                   <h5>Наши контакты</h5>
                   <Link to='/contact'><img className="icon" src={iconPlaceHeader} /></Link>
                    <div className="footer-info-text">
                        <p><a href="https://yandex.by/maps/org/phonehelper/111687532888/?from=mapframe&ll=27.625660%2C53.923764&z=14">Макаёнка 12-в, корпус 1</a></p>
                        <p><a href='tel:+375336235045'>+ 375 (33) 623-50-45</a></p>
                        <p><a href='tel:+375296235045'>+ 375 (29) 623-50-45</a></p>
                        <p><a href="mailto:sus2018cc@yandex.ru">sus2018cc@yandex.ru</a></p>
                        <p>Режим работы: 10:00 - 20:00х</p>
                    </div>
                    <div className="footer-info-icons">
                        <div className='footer-container'>
                            <a href='https://t.me/PhoneHelper'><img src={iconTelegramHeader} alt="Telegram" /></a>
                            <a href='https://t.me/PhoneHelper'><p>phonehelper.by</p></a>
                        </div>
                        <div className='footer-container'>
                            <a href='https://www.instagram.com/phonehelper.by/'><img src={iconInstagramHeader} alt="Instagram" /></a>
                            <a href='https://www.instagram.com/phonehelper.by/'><p>@PhoneHelper</p></a>
                        </div>
                    </div>
                </div>
            </div>

        </footer>
    );
}

export default FooterComponent;