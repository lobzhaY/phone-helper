import React from "react";
import './repair-phone-component.css';

import Title from '../../building-components/title-component/title-component';
import ModelSqare from "../../building-components/model-sqare/model-sqare";
import RepairOrderButton from "../../building-components/buttons-components/repair-order-component/repair-order-component";
import PhoneRepairItem from "../../building-components/phone-repair-item/phone-repair-item";

import item1 from './img/firstItem.png';
import item2 from './img/secondItem.png';
import item3 from './img/thirdItem.png';
import item4 from './img/forthItem.png';

function PhoneRepairComponent() {
    return(
        <div class="container">
            <Title classTitle={'container-title phone-repair-title'} name={'Ремонт телефонов'} text1={'Отремонтируем практически любую модель телефона, надежно, быстро, с гарантией.'} hrWidth={653}/>
          
            <div class="phones-repair-lists">
                <ul>
                    <ModelSqare name={'Oppo'} classModelSquare={'phone-repair-oppo'}/>
                    <ModelSqare name={'Oppo'} classModelSquare={'phone-repair-oppo'}/>
                    <ModelSqare name={'iPhone'} classModelSquare={'phone-repeir-iphone'}/>
                    <ModelSqare name={'Realme'} classModelSquare={'phone-repair-realme'}/>
                    <ModelSqare name={'Samsung'} classModelSquare={'phone-repair-samsung'}/>
                    <ModelSqare name={'Sony'} classModelSquare={'phone-repair-sony'}/>

                    <ModelSqare name={'Xiaomi'} classModelSquare={'phone-repair-xiaomi'}/>
                    <ModelSqare name={'Nokia'} classModelSquare={'phone-repair-nokia'}/>
                    <ModelSqare name={'Huawei'} classModelSquare={'phone-repair-huawei'}/>
                    <ModelSqare name={'Asus'} classModelSquare={'phone-repair-asus'}/>
                    <ModelSqare name={'Honor'} classModelSquare={'phone-repair-honor'}/>

                    <ModelSqare name={'BlackBerry'} classModelSquare={'phone-repair-blackberry'}/>
                    <ModelSqare name={'Meizu'} classModelSquare={'phone-repair-meizu'}/>
                    <ModelSqare name={'Google'} classModelSquare={'phone-repair-google'}/>
                    <ModelSqare name={'LG'} classModelSquare={'phone-repair-lg'}/>
                    <ModelSqare name={'Motorola'} classModelSquare={'phone-repair-motorola'}/>

                    <ModelSqare name={'OnePlus'} classModelSquare={'phone-repair-oneplus'}/>
                    <ModelSqare name={'Poco'} classModelSquare={'phone-repair-poco'}/>
                    <ModelSqare name={'Vivo'} classModelSquare={'phone-repair-vivo'}/>
                    <ModelSqare name={'Blackview'} classModelSquare={'phone-repair-blackview'}/>
                </ul>
            </div>

            <div class="phone-repair-main-img"></div>

            <div class="phone-repair-info">
                <PhoneRepairItem imgSrc={item1} itemTitle={'Профессиональный сервисный центр по ремонту телефонов'} text={'Что бы ни случилось с вашим телефоном, мы подарим ему вторую жизнь. Наш сервисный центр оснащен по последнему слову техники, поэтому мы решаем задачи любого объема и сложности в кратчайшие сроки.'} />
                <PhoneRepairItem imgSrc={item2} itemTitle={'53% наших клиентов – постоянные или пришедшие по рекомендации'} text={'Нашему сервисному центру доверяют сотни и тысячи клиентов. Наш девиз: абсолютная честность перед клиентом и наивысшее качество результата.'} />
                <PhoneRepairItem imgSrc={item3} itemTitle={'Работаем комфортно для вас'} text={'С ХХ утра до ХХ вечера. Прием и выдача заказов осуществляется  оперативно. Диагностика неисправностей проводится бесплатно.'} />
                <PhoneRepairItem imgSrc={item4} itemTitle={'Гарантия качества!'} text={'На выполненные работы вы получаете гарантию и можете быть уверены в безупречной работе телефона, а непредвиденные поломки исправляются бесплатно.'} />
            </div>

            <div class="phone-repair-button">
                <h2>отремонтируйте телефон качественно и с комфортом!</h2>
                <RepairOrderButton buttonWidth={'337px'} buttonHeight={'64px'}/>
            </div>
        </div>
    );
}

export default PhoneRepairComponent;