import React from "react";
import './repair-smart-watch-component.css';
import RepairOrderButton from "../../building-components/buttons-components/repair-order-component/repair-order-component";
import Title from '../../building-components/title-component/title-component';
import ConsultationButton from "../../building-components/buttons-components/consultation-component/consultation-component";
import OptionItemSmartWatch from "./option-item/option-item";

function RepairSmartWatchComponent() {
    return (
        <div className="container">

            <section class="smart-wathc-slider">
                <Title name={'Ремонт смарт часов'} hrWidth={696} text1={'Диагностируем неисправность. Для ремонта используем комплектующие самого высокого качества, что гарантирует вам безопасный и быстрый ремонт.'} />
                <RepairOrderButton buttonWidth={'337px'} />
            </section>

            <section class="smart-watch-info">

                <div class="smart-watch-options">

                    <OptionItemSmartWatch classItem={'smart-watch-container glass'} text={'Замена стекла'}/>
                    <OptionItemSmartWatch classItem={'smart-watch-container screen'} text={'Замена экрана'}/>
                    <OptionItemSmartWatch classItem={'smart-watch-container buttons'} text={'Замена, чистка кнопок'}/>
                    <OptionItemSmartWatch classItem={'smart-watch-container battery'} text={'Замена аккумулятора'}/>
                    <OptionItemSmartWatch classItem={'smart-watch-container board'} text={'Ремонт платы'}/>
                    <OptionItemSmartWatch classItem={'smart-watch-container os'} text={'Настройка, восстанолвение ОС, прошивка'}/>
                    
                </div>

                <div class="smart-watch-info-text">
                    В нашем серфисном центре вы можете отремонтировать смарт часы практически любой фирмы. <span>В случае сомнений свяжитесь с нами.</span> <br/> Мы будем рады ответить на ваши вопросы.
                </div>

                <ConsultationButton class="smart-watch-consultation"/>
            </section>
        </div>
    );
}

export default RepairSmartWatchComponent;