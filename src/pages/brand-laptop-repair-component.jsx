import React from 'react';
import '../scss/pages/brand-laptop.css';
import { Title, OtherBrandRepair, RepairOrderButton, ConsultationButton, ItemsEvenBrand, ItemsOddBrand, Modal, ModalOrderComponent, ModalConsultationComponent  } from '../components/index';
import { vectorBrandOdd, vectorBrandEven, icon12BrandPhone, icon3BrandPhone, icon4BrandPhone, icon5BrandPhone, icon6BrandPhone, icon7BrandPhone, icon8BrandPhone } from './images';

import { useState } from 'react';

function BrandLaptopRepairComponent() {
    const [modalActive, setModalActive] = useState(false);
    const [modalActiveOrder, setModalActiveOrder] = useState(false);
   let handleClickButton = (active) => {
        setModalActive(active);
    }
    let handleClickOrder = (active) => {
        setModalActiveOrder(active);
    }
    return (
        <div className="container">

    <Title classTitle={'tablet-repair-brand-title'} name={'Apple iPad'} text1={'Мы оказываем  услуги тысокого высокого качества.'} text2={'И каждый, кто решит заказать ремонт планшета именно у нас, сделает правильный выбор.'} hrWidth={309} />

            <div class="tablet-repair-brand-info">
                <div className="tablet-repair-brand-info-main-vector"></div>

                <ItemsOddBrand imgIcon={icon12BrandPhone} imgVector={vectorBrandOdd} text={'Замена стекла'} classNameOdd="phone-repair-brand-info-items-odd item1"/>
                <ItemsEvenBrand imgIcon={icon12BrandPhone} imgVector={vectorBrandEven} text={'Замена дисплея'} classNameEven="phone-repair-brand-info-items-even item2"/>
                <ItemsOddBrand imgIcon={icon3BrandPhone} imgVector={vectorBrandOdd} text={'Замена разъёма сим карты'} classNameOdd="phone-repair-brand-info-items-odd item3"/>
                <ItemsEvenBrand imgIcon={icon4BrandPhone} imgVector={vectorBrandEven} text={'Замена разъёма питания'} classNameEven="phone-repair-brand-info-items-even item4"/>
                <ItemsOddBrand imgIcon={icon5BrandPhone} imgVector={vectorBrandOdd} text={'Замена динамика'} classNameOdd="phone-repair-brand-info-items-odd item5"/>
                <ItemsEvenBrand imgIcon={icon6BrandPhone} imgVector={vectorBrandEven} text={'Замена аккумулятора'} classNameEven="phone-repair-brand-info-items-even item6"/>
                <ItemsOddBrand imgIcon={icon7BrandPhone} imgVector={vectorBrandOdd} text={'Ремонт после воды'} classNameOdd="phone-repair-brand-info-items-odd item7"/>
                <ItemsEvenBrand imgIcon={icon8BrandPhone} imgVector={vectorBrandEven} text={'Замена микрофона'} classNameEven="phone-repair-brand-info-items-even item8"/>            
            </div>

            <OtherBrandRepair />
            <div class="tablet-repair-brand-buttons">
                <ConsultationButton classProps='tablet-repair-brand-buttons-consultation' handleClickButton={handleClickButton} />
                <RepairOrderButton classProps='tablet-repair-brand-buttons-order' handleClickOrder={handleClickOrder} />
            </div>
            <Modal active={modalActive} setActive={setModalActive}><ModalConsultationComponent/></Modal>
            <Modal active={modalActiveOrder} setActive={setModalActiveOrder}><ModalOrderComponent/></Modal>
        </div>
    );
}

export default BrandLaptopRepairComponent;