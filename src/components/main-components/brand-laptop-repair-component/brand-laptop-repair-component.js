import React from 'react';
import './brand-laptop-repair-component.css';
import Title from '../title-component/title-component';
import ConsultationButton from '../buttons-components/consultation-component/consultation-component';
import RepairOrderButton from '../buttons-components/repair-order-component/repair-order-component';
import OtherTypesOfBrandRepair from '../other-types-of-brand-repair/other-types-of-brand-repair';
import ItemsOddBrandRepair from '../brand-phone-repair-component/items/items-odd/items-odd-component';
import ItemsEvenBrandRepair from '../brand-phone-repair-component/items/items-even/items-even-component';

import mainvector from './img/mainVector.png';
import item1 from './img/item12.png';
import item2 from './img/item12.png';
import item3 from './img/item3.png';
import item4 from './img/item4.png';
import item5 from './img/item5.png';
import item6 from './img/item6.png';
import item7 from './img/item7.png';
import item8 from './img/item8.png';
import vectorodd from './img/vectorOdd.png';
import vectoreven from './img/vectorEven.png';

function BrandLaptopRepairComponent() {
    return (
        <div className="container">

    <Title name={'Apple iPad'} text1={'Мы оказываем  услуги тысокого высокого качества.'} text2={'И каждый, кто решит заказать ремонт планшета именно у нас, сделает правильный выбор.'} hrWidth={309} />

            <div class="tablet-repair-brand-info">
                <div className="tablet-repair-brand-info-main-vector">
                    <img src={mainvector} alt="" />
                </div>

                <ItemsOddBrandRepair image={item1} imgVector={vectorodd} text={'Замена стекла'} classNameOdd="phone-repair-brand-info-items-odd item1"/>
                <ItemsEvenBrandRepair image={item2} imgVector={vectoreven} text={'Замена дисплея'} classNameEven="phone-repair-brand-info-items-even item2"/>
                <ItemsOddBrandRepair image={item3} imgVector={vectorodd} text={'Замена разъёма сим карты'} classNameOdd="phone-repair-brand-info-items-odd item3"/>
                <ItemsEvenBrandRepair image={item4} imgVector={vectoreven} text={'Замена разъёма питания'} classNameEven="phone-repair-brand-info-items-even item4"/>
                <ItemsOddBrandRepair image={item5} imgVector={vectorodd} text={'Замена динамика'} classNameOdd="phone-repair-brand-info-items-odd item5"/>
                <ItemsEvenBrandRepair image={item6} imgVector={vectoreven} text={'Замена аккумулятора'} classNameEven="phone-repair-brand-info-items-even item6"/>
                <ItemsOddBrandRepair image={item7} imgVector={vectorodd} text={'Ремонт после воды'} classNameOdd="phone-repair-brand-info-items-odd item7"/>
                <ItemsEvenBrandRepair image={item8} imgVector={vectoreven} text={'Замена микрофона'} classNameEven="phone-repair-brand-info-items-even item8"/>            
            </div>

            <OtherTypesOfBrandRepair />
            <div class="tablet-repair-brand-buttons">
                <ConsultationButton />
                <RepairOrderButton />
            </div>

        </div>
    );
}

export default BrandLaptopRepairComponent;