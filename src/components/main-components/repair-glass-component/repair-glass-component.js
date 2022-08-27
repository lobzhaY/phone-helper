import React from "react";
import './repair-glass-component.css';
import ConsultationButton from "../../building-components/buttons-components/consultation-component/consultation-component";
import Title from '../../building-components/title-component/title-component';
import ReasonsInfoItem from "./reasons-info-item/reasons-info-item";
import ReasonsInfoItemSecond from "./reasons-info-item/reasons-info-item-second";
import ProcessInstructionOdd from "./process-instruction/odd/process-instruction-odd";
import ProcessInstructionEven from "./process-instruction/even/process-instruction-even";

import mainImg from './img/glassReplacementMainImg.png';
import vectorReasons4 from './img/vectorReasons4.png';
import vectorReasons2 from './img/vectorReasons2.png';
import vectorReasons3 from './img/vectorReasons3.png';
import vectorReasons1 from './img/vectorReasons1.png';

import icon01 from './img/img1.png';
import num01 from './img/01.png';
import icon02 from './img/img2.png';
import num02 from './img/02.png';
import icon03 from './img/img3.png';
import num03 from './img/03.png';
import icon04 from './img/img4.png';
import num04 from './img/04.png';
import icon05 from './img/img5.png';
import num05 from './img/05.png';
import vectorOdd from './img/vectorInfo1.png';
import vectorEven from './img/vectorInfo2.png';


function RepairGlassComponent() {
    return (
        <div class="container">

            <Title name={'ЗАМЕНА СТЕКЛА'} hrWidth={501} />

            <div class="glass-replacement-reasons">
                <div class="glass-replacement-reasons-container">

                    <img src={mainImg} alt="" class="glass-replacement-reasosn-image" />

                    <ReasonsInfoItemSecond classDiv={'glass-replacement-reasons-info adress'} imgSrc={vectorReasons1} text={<span>Вы пришли по адресу!</span>} />
                    <ReasonsInfoItemSecond classDiv={'glass-replacement-reasons-info phone'} imgSrc={vectorReasons3} text={'Если у вас телефон или планшет с разбитым стеклом и вам везде говорят что нужно менять дисплейный модуль, не расстраивайтесь.'} />
                    <ReasonsInfoItem classDiv={'glass-replacement-reasons-info glass'} imgSrc={vectorReasons2} text={'В нашем сервисном центре, вы сможете заменить разбитое стекло.'} />
                    <ReasonsInfoItem classDiv={'glass-replacement-reasons-info display'} imgSrc={vectorReasons4} text={'Мы можем срезать разбитое стекло  и вернуть ваш дисплейный модуль в исходное состояние до падения.'} />

                </div>
            </div>

            <div class="glass-replacement-process">
                <div class="process-container">

                    <h3>ПРОЦЕСС СРЕЗА СТЕКЛА</h3>

                    <div class="glass-replacement-process-instruction">
                        <ProcessInstructionOdd imgSrcIcon={icon01} imgSrcVector={vectorOdd} imgSrcNum={num01} text={' Разбираем телефон или планшет и аккуратно достаем дисплей.'} />

                        <ProcessInstructionEven text={'С помощью специальных жидкостей убираем остатки старого клея.'} imgSrcNum={num02} imgSrcVector={vectorEven} imgSrcIcon={icon02} />

                        <ProcessInstructionOdd imgSrcIcon={icon03} imgSrcVector={vectorOdd} imgSrcNum={num03} text={'В беспылевой комнате наносим новую пленку, устанавливаем новое стекло.'} />

                        <ProcessInstructionEven text={'Ламинируем, выкачиваем воздух в специальном ламинаторе под давлениием и убираем пузырьки воздуха.'} imgSrcNum={num04} imgSrcVector={vectorEven} imgSrcIcon={icon04} />

                        <ProcessInstructionOdd imgSrcIcon={icon05} imgSrcVector={vectorOdd} imgSrcNum={num05} text={'Собираем телефон.'} />

                    </div>

                    <ConsultationButton className="glass-replacement-button" />

                </div>
            </div>

        </div>
    );
}

export default RepairGlassComponent;