import React from "react";
import './guarantee-component.css';
import GuaranteeNavigationConnect from "../../building-components/guarantee-navigation-connect/guarantee-navigation-connect";
import GuaranteeItem from "../../building-components/guarantee-item/guarantee-item";

import vectorSquare from './img/guarantee-square.png';
import vectorGuarantee from './img/guarantee-vector.png';
import vectorSmall from './img/vector-small.png';
import vectorVertical from './img/vector-vertical.png';
import img1 from './img/image-1.png';
import img2 from './img/image-2.png';
import img3 from './img/image-3.png';
import img4 from './img/image-4.png';

function GuaranteeComponent() {
    return (
        <div className='container'>
            <div class="guarantee">

                <div class="guarantee-titel">
                    <h2>ГАРАНТИЯ</h2>
                    <div class="guarantee-about">Гарантийный ремонт осуществляется каждый день кроме Субботы и Воскресенья.</div>
                    <div class="guarantee-about-vector">
                        <img src={vectorSquare} alt="" class="guarantee-square-vector" />
                        <img src={vectorGuarantee} alt="" class="guarantee-about-vector-horizon" />
                    </div>
                </div>

                <div class="guarantee-navigation">
                    <GuaranteeNavigationConnect imgSrcSquare={vectorSquare} imgVector={vectorSmall} />
                    <img src={vectorVertical} alt="" class="guarantee-navigation-vertical" />
                    <GuaranteeNavigationConnect imgSrcSquare={vectorSquare} imgVector={vectorSmall} />
                    <img src={vectorVertical} alt="" class="guarantee-navigation-vertical" />
                    <GuaranteeNavigationConnect imgSrcSquare={vectorSquare} imgVector={vectorSmall} />
                    <img src={vectorVertical} alt="" class="guarantee-navigation-vertical" />
                    <GuaranteeNavigationConnect imgSrcSquare={vectorSquare} imgVector={vectorSmall} />
                </div>

                <div class="guarantee-info">
<GuaranteeItem text={<div class="guarantee-info-text">
                            На все выполненные работы в нашем сервисном центре по ремонту сотовых телефонов, смартфонов или iPhone наша организация предоставляет гарантию от 2-х недель.
                        </div>} imgSrc={img1}/>
                        <GuaranteeItem text={<div class="guarantee-info-text">
                            Замена экранов, сенсоров и стёкол для телефонов гарантия 14 дней.
                            <hr />
                            Дисплеи и Тачскрины со следами падений, трещин, придавливаний, нагревов, сильных царапин, самостоятельного разбора, бесплатной гарантийной замене НЕ ПОДЛЕЖАТ.
                        </div>} imgSrc={img2}/>
                        <GuaranteeItem text={<div class="guarantee-info-text">
                            Пайка системных разъёмов, перекатка микросхем, восстановление шлейфов, системных коннекторов, наплатных кнопок, восстановление материнских плат 2 недели.
                        </div>} imgSrc={img3}/>
                        <GuaranteeItem text={<div class="guarantee-info-text">
                            На телефоны которые восстановили после воды гарантия не распростроняется.
                        </div>} imgSrc={img4}/>


                </div>
            </div>
        </div>
    );
}

export default GuaranteeComponent;