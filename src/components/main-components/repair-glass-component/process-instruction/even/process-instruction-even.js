import React from "react";

function ProcessInstructionEven(props) {
    return (
        <div class="process-instruction-02">
            <div class="process-instruction-container-02">
                <p class="process-instruction-container-text-02">{props.text}</p>
                <div class="process-instruction-container-num process-02">
                    <img src={props.imgSrcNum} alt="02" />
                </div>
            </div>
            <img src={props.imgSrcVector} alt="Vector" class="process-instruction-vector" />
            <img src={props.imgSrcIcon} alt="" class="process-instruction-icon" />
        </div>
    );
}

export default ProcessInstructionEven;