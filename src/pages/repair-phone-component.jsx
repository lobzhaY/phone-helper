import React from "react";
import { Link } from 'react-router-dom';
import '../scss/pages/phone.css';

import { Title, RepairOrderButton, Modal, ModalOrderComponent } from '../components/index';

import { mainImagePhoneHelper, itemPhoneRepair, itemFirstPhoneRepair, itemSecondPhoneRepair, itemThirdPhoneRepair, itemForthPhoneRepair } from './images';

import { useState } from 'react';

const modelPhone = ['Oppo', 'iPhone', 'Realme', 'Samsung', 'Sony', 'Xiaomi', 'Nokia', 'Huawei', 'Asus', 'Honor', 'BlackBerry', 'Meizu', 'Google', 'LG', 'Motorola', 'OnePlus', 'Poco', 'Vivo', 'Blackview'];
const classModelsPhone = ['phone-repair-oppo', 'phone-repair-iphone', 'phone-repair-realme', 'phone-repair-samsung', 'phone-repair-sony', 'phone-repair-xiaomi', 'phone-repair-nokia', 'phone-repair-huawei', 'phone-repair-asus', 'phone-repair-honor', 'phone-repair-blackberry', 'phone-repair-meizu', 'phone-repair-google', 'phone-repair-lg', 'phone-repair-motorola', 'phone-repair-oneplus', 'phone-repair-poco', 'phone-repair-vivo', 'phone-repair-blackview'];

function PhoneRepairComponent() {
    const [modalActiveOrder, setModalActiveOrder] = useState(false);
    let handleClickOrder = (active) => {
        setModalActiveOrder(active);
    }
    const phoneRepairBI = {
        backgroundImage: `url(${mainImagePhoneHelper})`
    }
    const itemRepairBI = {
        backgroundImage: `url(${itemPhoneRepair})`
    }
    return (
        <div className="container">
            <Title classTitle={'container-title phone-repair-title'} name={'Ремонт телефонов'} text1={'Отремонтируем практически любую модель телефона, надежно, быстро, с гарантией.'} />

            <div className="phones-repair-lists">
                    {
                        modelPhone.map((el, index) =>
                            <Link to="/brandPhone" className="model-active">
                                <div key={index} className={classModelsPhone[index]}>
                                    <div className="triangle">
                                        <p className="model-triangle-text">{el}</p>
                                    </div>
                                </div>
                            </Link>
                        )}
            </div>
            <div className="phone-repair-main-img" style={phoneRepairBI}></div>

            <div className="phone-repair-info">
                <div className="phone-repair-item" style={itemRepairBI}>
                    <img src={itemFirstPhoneRepair} alt="" />
                    <h3>Профессиональный сервисный центр по ремонту телефонов</h3>
                    <p>Что бы ни случилось с вашим телефоном, мы подарим ему вторую жизнь. Наш сервисный центр оснащен по последнему слову техники, поэтому мы решаем задачи любого объема и сложности в кратчайшие сроки.</p>
                </div>
                <div className="phone-repair-item" style={itemRepairBI}>
                    <img src={itemSecondPhoneRepair} alt="" />
                    <h3>53% наших клиентов – постоянные или пришедшие по рекомендации</h3>
                    <p>Нашему сервисному центру доверяют сотни и тысячи клиентов. Наш девиз: абсолютная честность перед клиентом и наивысшее качество результата.</p>
                </div>
                <div className="phone-repair-item info-work" style={itemRepairBI}>
                    <img src={itemThirdPhoneRepair} alt="" />
                    <h3>Работаем комфортно для вас</h3>
                    <p> С ХХ утра до ХХ вечера. Прием и выдача заказов осуществляется  оперативно. Диагностика неисправностей проводится бесплатно.</p>
                </div>
                <div className="phone-repair-item info-guarantee" style={itemRepairBI}>
                    <img src={itemForthPhoneRepair} alt="" />
                    <h3>Гарантия качества!</h3>
                    <p>На выполненные работы вы получаете гарантию и можете быть уверены в безупречной работе телефона, а непредвиденные поломки исправляются бесплатно.</p>
                </div>
            </div>

            <div className="phone-repair-button">
                <h2>отремонтируйте телефон качественно и с комфортом!</h2>
                <RepairOrderButton handleClickOrder={handleClickOrder} />
            </div>
            <Modal active={modalActiveOrder} setActive={setModalActiveOrder}><ModalOrderComponent/></Modal>
        </div>
    );
}

export default PhoneRepairComponent;