import React from "react";

const CustomPrevArrow = (props) => (
    <button
        className='prevBtn'
        onClick={props.onClick}
        onKeyDown={props.onKeyDown} // Добавлен обработчик клавиш
        role="button"
        tabIndex={0}
    >
        <img src="/imgs/slider/left.png" alt="" />
    </button>
);

const CustomNextArrow = (props) => (
    <button
        className='nextBtn'
        onClick={props.onClick}
        onKeyDown={props.onKeyDown} // Добавлен обработчик клавиш
        role="button"
        tabIndex={0}
    >
        <img src="/imgs/slider/right.png" alt="" />
    </button>
);

export { CustomPrevArrow, CustomNextArrow };
