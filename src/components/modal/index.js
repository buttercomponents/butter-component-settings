import React, { Component } from 'react';
//import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { translate } from 'react-i18next';
import style from './style.styl';

export default ({position, action}) => (
    <div className={style.modal} data-position={position} onClick={action.apply}>
        <div className={style.widget}>
            <img src={"https://media.giphy.com/media/o0vwzuFwCGAFO/giphy.gif"} />
        </div>
        <div className={style.overlay}></div>
    </div>
)
