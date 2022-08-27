import React from "react";
import './infoMainPage.css';
import InformationItemMainPage from "../../../building-components/information-item-main-page/information-item";

import imgNum1 from '../img/infoMainPage/01.png';
import imgNum2 from '../img/infoMainPage/02.png';
import imgNum3 from '../img/infoMainPage/03.png';
import imgNum4 from '../img/infoMainPage/04.png';
import brokenComputer from '../img/infoMainPage/brokenComputer.png';
import computerSupport from '../img/infoMainPage/computerSupport.png';
import workspace from '../img/infoMainPage/workspace.png';
import touchpad from '../img/infoMainPage/touchpad.png';
import group from '../img/infoMainPage/group.png';

function InforMainPage() {
    const elemH5 = <h5>ОБРАТИТЕСЬ К НАМ</h5>;
    return (
        <div class="main-page-info">
            <div class="info-container">

                <InformationItemMainPage imgNum={imgNum1} imgIcon={brokenComputer} imgVector={group} text={'Ваш девайс не реагирует на нажатие клавиш, работает замедленно или вообще отказывается работать?'} />
                <InformationItemMainPage imgNum={imgNum2} imgIcon={computerSupport} imgVector={group} text={'Необходима помощь специалиста, который поможет решить любую проблему в работе вашего девайса.'} />
                <InformationItemMainPage imgNum={imgNum3} imgIcon={workspace} imgVector={group} text={'Не знаете, к кому обратиться за квалифицированной помощью по ремонту.'} elem={elemH5} />
                <InformationItemMainPage imgNum={imgNum4} imgIcon={touchpad} imgVector={group} text={'Мы в кратчайшие сроки вернем ваш девайс в привычный для вас режим работы.'} />

            </div>
        </div>
    );
}

export default InforMainPage;