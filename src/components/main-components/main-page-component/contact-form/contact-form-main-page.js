import React from "react";
import './contact-form-main-page.css';

import EndCallMale from '../img/contact-form/EndCallMale.png';

function ContactFormOnMainPage() {
    return(
        <div class="connection">
                <div class="call-text">
                    <p><span class="call">Вызовите мастера</span> и Ваш девайс начнёт работать как нужно</p>
                </div>
                <div class="call-img">
                    <img src={EndCallMale} />
                </div>
                <div class="call-master">
                    <p>Номер телефона</p>
                    <div class="call-number">
                        <input type="phone"/>
                        <button type="submit">Вызвать мастера</button>
                    </div>
                </div>
            </div>
    );
}

export default ContactFormOnMainPage;