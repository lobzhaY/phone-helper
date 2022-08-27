import React from "react";
import './repair-laptop-component.css';

import RepairOrderButton from "../../building-components/buttons-components/repair-order-component/repair-order-component";
import Title from '../../building-components/title-component/title-component';
import ModelSqare from "../../building-components/model-sqare/model-sqare";
import LaptopRepairItemOdd from "../../building-components/laptop-repair-item/laptop-odd/laptop-repair-item-odd";
import LaptopRepairItemEven from "../../building-components/laptop-repair-item/laptop-even/laptop-repair-item-even";

import img1 from './img/tablet-repair-info-img-01.png';
import num1 from './img/tablet-repair-info-num-01.png';
import img2 from './img/tablet-repair-info-img-02.png';
import num2 from './img/tablet-repair-info-num-02.png';
import img3 from './img/tablet-repair-info-img-03.png';
import num3 from './img/tablet-repair-info-num-03.png';
import img4 from './img/tablet-repair-info-img-04.png';
import num4 from './img/tablet-repair-info-num-04.png';
import img5 from './img/tablet-repair-info-img-05.png';
import num5 from './img/tablet-repair-info-num-05.png';
import img6 from './img/tablet-repair-info-img-06.png';
import num6 from './img/tablet-repair-info-num-06.png';
import vector from './img/tablet-repair-info-vector.png'
import arrowOdd from './img/arrowOdd.png';
import arrowEven from './img/arrowEven.png';

function LaptopRepairComponent() {
    return (
        <div class="container">
            <Title classTitle={'container-title tablet-repair-title'} hrWidth={650} name={'Ремонт планшетов'} text1={'Планшеты являются более удобными в эксплуатации, чем ноутбуки или нетбуки, однако в сравнении с последними сильнее подвержены износу.'} />

            <div class="taplet-repair-models">
                <ul>
                    <ModelSqare name={'Apple iPad'} />
                    <ModelSqare name={'Samsung'} />
                    <ModelSqare name={'Asus'} />
                    <ModelSqare name={'Sony'} />
                    <ModelSqare name={'Xiaomi'} />
                    <ModelSqare name={'Google'} />
                </ul>
            </div>

            <div class="tablet-repair-main-image"></div>

            <div class="tablet-repair-info">
                <div class="tablet-repair-info-container">
                    <LaptopRepairItemOdd itemTitle={'Механические повреждения'} text={'Причины механических повреждений могут быть самые различные, от внезапного удара посторонними предметами до падения на пол. В результате может потребоваться либо косметический ремонт или замена поврежденных внешних элементов, либо полная замена электроники.'}
                        vector={arrowOdd} imgSrc={img1} numSrc={num1} />

                    <img class="tablet-repair-info-vector" src={vector} alt="Vector" />

                    <LaptopRepairItemEven itemTitle={'Проблемы со звуком'} text={'Причин тому, что динамики планшета не работают, может быть несколько. Однако практика показывает, что наиболее частыми причинами отсутствия звука являются неисправный разъем для наушников либо вышедшая из строя аудиокарта.'}
                        vector={arrowEven} imgSrc={img2} numSrc={num2} />

                    <img class="tablet-repair-info-vector" src={vector} alt="Vector" />

                    <LaptopRepairItemOdd itemTitle={'Невозможность соединения с сетью'} text={'Грамотную диагностику этой проблемы может провести только квалифицированный специалист. Поэтому при отсутствии соединения необходимо обратиться в мастерскую. Наиболее частыми причинами отсутствия соединения являются неправильные настройки или некорректная работа прошивки.'}
                        vector={arrowOdd} imgSrc={img3} numSrc={num3} />

                    <img class="tablet-repair-info-vector" src={vector} alt="Vector" />

                    <LaptopRepairItemEven itemTitle={'Проблемы с запуском'} text={'Причины могут быть самые различные, от некорректной работы загрузочного программного обеспечения до неисправностей в линии подачи питания. В любом случае, если стандартные пользовательские средства не помогают, необходим срочный ремонт.'}
                        vector={arrowEven} imgSrc={img4} numSrc={num4} />


                    <img class="tablet-repair-info-vector" src={vector} alt="Vector" />

                    <LaptopRepairItemOdd itemTitle={'Некорректная работа тачскрина'} text={'Источником проблемы могут быть как программные так и аппаратные неполадки, для устранения которых применяют различные методы – от перепрошивки до замены шлейфа или самого тачскрина.'}
                        vector={arrowOdd} imgSrc={img5} numSrc={num5} />

                    <img class="tablet-repair-info-vector" src={vector} alt="Vector" />

                    <LaptopRepairItemEven itemTitle={'Неисправности дисплея'} text={'В большинстве случаев источником проблемы является неисправная матрица или соединительный шлейф. Не менее распространенными являются механические повреждения экрана. Что именно вышло из строя поможет понять грамотное диагностирование.'}
                        vector={arrowEven} imgSrc={img6} numSrc={num6} />

                </div>
            </div>

            <div class="tablet-repair-button">
                <p>Если ваш электронный планшет стал некорректно работать, приносите его к нам. Наши мастера ждут вас и всегда готовы сделать ремонт.</p>
                <RepairOrderButton buttonWidth={'337px'} buttonHeight={'64px'} />
            </div>
        </div>
    );
}

export default LaptopRepairComponent;