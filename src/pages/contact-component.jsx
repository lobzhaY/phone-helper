import React from "react";
import '../scss/pages/contact.css';

const mapPath = "https://yandex.ru/map-widget/v1/?z=12&ol=biz&oid=111687532888";

function ContactComponent() {
    return (
        <div className='container'>
            <div className="contacts">
            <div className="map">
                <iframe src={mapPath} width="986" height="664" frameBorder="0"></iframe>
            </div>
            <div className="map-info">
                <h2 className="map-title">Наши контакты</h2>
                <div className="map-contacts">
                    <ul>
                        <li><a href="tel:+375296235045">+ 375 (29) 623-50-45</a></li>
                        <li><a href="tel:+375336235045">+ 375 (33) 623-50-45</a></li>
                        <li><a href="https://yandex.by/maps/org/phonehelper/111687532888/?from=mapframe&ll=27.625660%2C53.923764&z=14">г. Минск, ул.Макаёнка 12-в, корпус 1</a></li>
                        <li className="contact-time">Время работы:</li>
                        <li>Пн-Вс. 10:00 – 20:00</li>
                    </ul>
                </div>
            </div>
            </div>
        </div>
    );
}

export default ContactComponent;