import React from "react";
import './repair-order-component.css';
import RepairOrderButton from '../../../building-components/buttons-components/repair-order-button-component/repair-order-button-component'
import InputFormField from '../input-form-component/input-form-component';
import Title from '../../title-component/title-component';

import orderImage from '../img/order/order.png';
import orderProblem from '../img/order/problem.png';
import orderPhone from '../img/order/call.png';
import orderUser from '../img/order/user-male.png';

function RepairOrderComponent() {
    return (
        <div className="container" id="modal-window-order">
            <div class="modal-window-order-image">
                <img src={orderImage} alt="Consultation" class="order-image" />
            </div>
            <div class="modal-window-order-info">
                {/* <Title name={'Закажи ремонт'} text1={'Введите данные, мы с вами свяжемся для уточнения деталей'} hrWidth={102} mBottom={53}/> */}
 <h1 class="modal-window-order-title">Закажи ремонт</h1>
                <hr class="modal-window-order-line" />
                <p class="modal-window-order-text">Введите данные, мы с вами свяжемся для уточнения деталей</p>
                <div class="modal-window-order-form">
                    <InputFormField inputPlaceholder={'Введите ваше имя'} inputUrl={orderUser}/>
                    <InputFormField inputPlaceholder={'Введите номер телефона'} inputUrl={orderPhone}/>
                    <InputFormField inputPlaceholder={'Опишите проблему'} inputUrl={orderProblem}/>
                    <RepairOrderButton />
                </div>
            </div>
        </div>
    );
}

export default RepairOrderComponent;