import React from "react";
import '../scss/components/repair-order.css';

import { mainImageModelOrder, iconCallModelOrder, iconProblemModelOrder, iconUserModelOrder} from './images';


function RepairOrderComponent() {
    const inputIconCallBI = {
        backgroundImage: `url(${iconCallModelOrder})`
    };
    const inputIconProblemBI = {
        backgroundImage: `url(${iconProblemModelOrder})`
    };
    const inputIconUserBI = {
        backgroundImage: `url(${iconUserModelOrder})`
    };
    return (
        <div className="container" id="modal-window-order">
            <div className="modal-window-order-image">
                <img src={mainImageModelOrder} alt="Consultation" className="order-image" />
            </div>
            <div className="modal-window-order-info">
                <h1 className="modal-window-order-title">Закажи ремонт</h1>
                <hr className="modal-window-order-line" />
                <p className="modal-window-order-text">Введите данные, мы с вами свяжемся для уточнения деталей</p>
                <div className="modal-window-order-form">
                    <input type="text" placeholder="Введите ваше имя" className="modal-window-order-name" style={inputIconUserBI} />
                    <input type="text" placeholder="Введите номер телефона" className="modal-window-order-phone" style={inputIconCallBI} />
                    <input type="text" placeholder="Опишите проблему" className="modal-window-order-problem" style={inputIconProblemBI} />
                    <button type="button" className="modal-window-order-button">Заказ ремонта</button>
                </div>
            </div>
        </div>
    );
}

export default RepairOrderComponent;