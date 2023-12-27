import React from "react";
import styles from './SliderProducts.module.scss'

const CustomPrevArrow = (props) => (
    <div className='prevBtn' onClick={props.onClick}>
        <img src="/imgs/slider/left.png" alt="" />
    </div>
);

const CustomNextArrow = (props) => (
    <div className='nextBtn' onClick={props.onClick}>
        <img src="/imgs/slider/right.png" alt="" />
    </div>
);

export { CustomPrevArrow, CustomNextArrow };
