import React from "react";
import { Link } from 'react-router-dom';
import '../scss/pages/notebook.css';

import { Title, RepairOrderButton,  Modal, ModalOrderComponent } from '../components/index';

import { mainImageNotebook, modelNotebookRepair, polygonNotebook1, polygonNotebook2, polygonNotebook3, polygonNotebook4, polygonScreenImg, polygonColorYellow, polygonColorGrey, polygonContainer, vectorTitleNotebook, vector1Notebook, vector2Notebook, vector3Notebook, vector4Notebook, vector5Notebook } from './images';

import { useState } from 'react';

const modelNotebook = ['Macbook', 'Samsung', 'HP', 'Acer', 'Dell', 'Asus', 'Lenovo', 'Sony', 'Toshiba', 'MSI'];

function NotebookRepairComponent() {
    const [modalActiveOrder, setModalActiveOrder] = useState(false);
    let handleClickOrder = (active) => {
        setModalActiveOrder(active);
    }
    const notebookRepairBI = {
        backgroundImage: `url(${mainImageNotebook})`
    }
    const modelNotebookBI = {
        backgroundImage: `url(${modelNotebookRepair})`
    }
    const polygon1BI = {
        backgroundImage: `url(${polygonNotebook1})`
    }
    const polygon2BI = {
        backgroundImage: `url(${polygonNotebook2})`
    }
    const polygon3BI = {
        backgroundImage: `url(${polygonNotebook3})`
    }
    const polygon4BI = {
        backgroundImage: `url(${polygonNotebook4})`
    }
    const polygonScreenBI = {
        backgroundImage: `url(${polygonScreenImg})`
    }
    const polygonColorYellowBI = {
        backgroundImage: `url(${polygonColorYellow})`
    }
    const polygonColorGreyBI = {
        backgroundImage: `url(${polygonColorGrey})`
    }
    const polygonContainerBI = {
        backgroundImage: `url(${polygonContainer})`
    }
    return (
        <div className="container">
            <Title classTitle={"laptop-repair-title"} name={'Ремонт НОУТБУКОВ'} text1={'Ремонт компьютеров и ноутбуков выполняется нами с применением оригинальных сертифицированных комплектующих и материалов.'} />

            <div className="laptop-repair-models">
             
                    {
                        modelNotebook.map((el, index) =>
                            <Link to='/brandNotebook'>
                                 <div key={index}>
                                    <div className="triangle">
                                        <p className="model-triangle-text">{el}</p>
                                    </div>
                                </div>
                            </Link>
                        )}
              
            </div>

            <div className="laptop-repair-main-image" style={notebookRepairBI}></div>

            <div className="laptop-repair-info">

                <div className="laptop-repair-info-container">

                    <div className="laptop-repair-info-items">

                    <div className="laptop-repair-info-item-left">
                            <h3>Чем «болеют» ноутбуки и как с этим бороться?</h3>
                            <img src={vectorTitleNotebook} alt="" className="laptop-repair-vector-title" />

                            <div className="laptop-repair-info-item-polygon users-problem" style={polygon1BI}>
                                <div className="laptop-repair-info-item-main-polygon" style={polygonScreenBI}>
                                    <div className="laptop-repair-info-item-main-polygon-text"><span className="laptop-repair-text-span">Неаккуратность</span> пользователя</div>
                                </div>
                            </div>

                            <div className="laptop-repair-info-item-polygon system-problem" style={polygon2BI}>
                                <div className="laptop-repair-info-item-main-polygon" style={polygonScreenBI}>
                                    <div className="laptop-repair-info-item-main-polygon-text">Некорректная <span className="laptop-repair-text-span">работа системы питания</span></div>
                                </div>
                            </div>

                            <div className="laptop-repair-info-item-polygon-color-yellow" style={polygonColorYellowBI}>
                                <div className="laptop-repair-info-item-polygon-text-yellow">наша мастерская всегда готова устранить последствия и вернуть ноутбук в строй.</div>
                            </div>
                           
                            <div className="laptop-repair-info-item-polygon keyboard-problem" style={polygon3BI}>
                                <div className="laptop-repair-info-item-main-polygon" style={polygonScreenBI}>
                                    <div className="laptop-repair-info-item-main-polygon-text">Самым  слабым местом является <span className="laptop-repair-text-span">клавиатура</span></div>
                                </div>
                            </div>

                            <div className="laptop-repair-info-item-polygon-color-grey" style={polygonColorGreyBI}>
                                <div className="laptop-repair-info-item-polygon-text-grey">мы проведем глубокую диагностику, что позволит нам выявить малейшие повреждения.</div>
                            </div>

                            <div className="laptop-repair-info-item-polygon frame-problem" style={polygon4BI}>
                                <div className="laptop-repair-info-item-main-polygon" style={polygonScreenBI}>
                                    <div className="laptop-repair-info-item-main-polygon-text"><span className="laptop-repair-text-span">Корпус и функциональные узлы</span> портативного компьютера</div>
                                </div>
                            </div>

                            <img src={vector1Notebook} alt="" className="laptop-repair-vector-01" />

                            <p>Внутренние компоненты ноутбуков защищены прочным корпусом, который достаточно легко повредить.</p>

                            <img src={vector2Notebook} alt="" className="laptop-repair-vector-02" />

                            <div className="laptop-repair-info-item-polygon-container" style={polygonContainerBI}>
                                <div className="laptop-repair-info-item-polygon-container-text">Ремонт корпуса на ноутбуке необходимы в срочном порядке при малейших признаках повреждений</div>
                            </div>

                            <img src={vector3Notebook} alt="" className="laptop-repair-vector-03" />

                            <p  className="laptop-repair-text-01">Попадание под клавиши воды, остатков пищи, комнатной пыли </p>

                            <img src={vector4Notebook} alt="" className="laptop-repair-vector-04" />

                            <p  className="laptop-repair-text-02">Необходим срочный ремонт</p>

                            <img src={vector5Notebook} alt="" className="laptop-repair-vector-05" />

                            <p  className="laptop-repair-text-03">При возникновении любых подобных неприятностей <span className="laptop-repair-text-span">обращайтесь в наш сервисный центр</span></p>

                        </div>

                    </div>

                </div>
            </div>       
          
                <RepairOrderButton classProps='laptop-repair-button' handleClickOrder={handleClickOrder} />
                <Modal active={modalActiveOrder} setActive={setModalActiveOrder}><ModalOrderComponent/></Modal>
        </div>
    );
}

export default NotebookRepairComponent;