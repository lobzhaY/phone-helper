import React from "react";
import './repair-notebook-component.css';

import Title from '../../building-components/title-component/title-component';
import ModelSqare from "../../building-components/model-sqare/model-sqare";
import RepairOrderButton from "../../building-components/buttons-components/repair-order-component/repair-order-component";
import ItemRepair from "../../building-components/repair-items/repair-item";
import ItemRepairColor from "../../building-components/repair-items/repair-item-color/repair-item-color";

import vectorTitle from './img/vectorTitel.png';
import vector1 from './img/vector1.png';
import vector2 from './img/vector2.png';
import vector3 from './img/vector3.png';
import vector4 from './img/vector4.png';
import vector5 from './img/vector5.png';

function NotebookRepairComponent() {
    return (
        <div class="container">
            <Title name={'Ремонт НОУТБУКОВ'} text1={'Ремонт компьютеров и ноутбуков выполняется нами с применением оригинальных сертифицированных комплектующих и материалов.'} hrWidth={662}/>

            <div class="laptop-repair-models">
                <ul>
                    <ModelSqare name={'Macbook'} />
                    <ModelSqare name={'Samsung'} />
                    <ModelSqare name={'HP'} />
                    <ModelSqare name={'Acer'} />
                    <ModelSqare name={'Dell'} />
                    <ModelSqare name={'Asus'} />
                    <ModelSqare name={'Lenovo'} />
                    <ModelSqare name={'Sony'} />
                    <ModelSqare name={'Toshiba'} />
                    <ModelSqare name={'MSI'} />
                </ul>
            </div>

            <div class="laptop-repair-main-image"></div>

            <div class="laptop-repair-info">

                <div class="laptop-repair-info-container">

                    <div class="laptop-repair-info-items">

                        <div class="laptop-repair-info-item-left">

                            <h3>Чем «болеют» ноутбуки и как с этим бороться?</h3>
                            <img src={vectorTitle} alt="" class="laptop-repair-vector-titel" />

                            <ItemRepair classItem={'laptop-repair-info-item-polygon users-problem'} text1={<div class="laptop-repair-info-item-main-polygon-text"><span class="laptop-repair-text-span">Неаккуратность</span> пользователя</div>} />

                            <ItemRepair classItem={'laptop-repair-info-item-polygon system-problem'} text1={<div class="laptop-repair-info-item-main-polygon-text">Некорректная <span class="laptop-repair-text-span">работа системы питания</span></div>} />

                            <ItemRepairColor classColor={'laptop-repair-info-item-polygon-color-yellow'} classText={'laptop-repair-info-item-polygon-text-yellow'} text={'наша мастерская всегда готова устранить последствия и вернуть ноутбук в строй.'}/>

                            <ItemRepair classItem={'laptop-repair-info-item-polygon keyboard-problem'} text1={<div class="laptop-repair-info-item-main-polygon-text">Самым  слабым местом является <span class="laptop-repair-text-span">клавиатура</span></div>}/>

                            <ItemRepairColor classColor={'laptop-repair-info-item-polygon-color-grey'} classText={'laptop-repair-info-item-polygon-text-grey'} text={'мы проведем глубокую диагностику, что позволит нам выявить малейшие повреждения.'}/>

                            <ItemRepair classItem={'laptop-repair-info-item-polygon frame-problem'} text1={<div class="laptop-repair-info-item-main-polygon-text"><span class="laptop-repair-text-span">Корпус и функциональные узлы</span> портативного компьютера</div>}/>

                            <img src={vector1} alt="" class="laptop-repair-vector-01" />

                            <p>Внутренние компоненты ноутбуков защищены прочным корпусом, который достаточно легко повредить.</p>

                            <img src={vector2} alt="" class="laptop-repair-vector-02" />

                            <div class="laptop-repair-info-item-polygon-container">
                                <div class="laptop-repair-info-item-polygon-container-text">Ремонт корпуса на ноутбуке необходимы в срочном порядке при малейших признаках повреждений</div>
                            </div>

                            <img src={vector3} alt="" class="laptop-repair-vector-03" />

                            <p class="laptop-repair-text-01">Попадание под клавиши воды, остатков пищи, комнатной пыли </p>

                            <img src={vector4} alt="" class="laptop-repair-vector-04" />

                            <p class="laptop-repair-text-02">Необходим срочный ремонт</p>

                            <img src={vector5} alt="" class="laptop-repair-vector-05" />

                            <p class="laptop-repair-text-03">При возникновении любых подобных неприятностей <span class="laptop-repair-text-span">обращайтесь в наш сервисный центр</span></p>

                        </div>

                    </div>

                </div>
            </div>

          
            <div class="laptop-repair-button">
                <RepairOrderButton buttonWidth={'337px'} buttonHeight={'64px'}/>
            </div>
        </div>
    );
}

export default NotebookRepairComponent;