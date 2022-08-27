import React from "react";

function ProcessInstructionOdd(props) {
    return(
        <div className="process-instruction-01">
        <img src={props.imgSrcIcon} alt="Icon" class="process-instruction-icon" />
        <img src={props.imgSrcVector} alt="Vector" class="process-instruction-vector" />

        <div class="process-instruction-container-01">
            <div class="process-instruction-container-num process-01">
                <img src={props.imgSrcNum} alt="01" />
            </div>
            <p class="process-instruction-container-text-01">
                Разбираем телефон или планшет и аккуратно достаем дисплей.
            </p>
        </div>
    </div>
    );
}

export default ProcessInstructionOdd;