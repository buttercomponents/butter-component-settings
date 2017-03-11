import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import style from './style.styl';

export default ({position, action}) => (
    <div className={style.modal} data-position={position} onClick={action.apply} key={style.modal}>
        <div className={style.widget}>
            <img src={"https://media.giphy.com/media/o0vwzuFwCGAFO/giphy.gif"} />
        </div>
    </div>
)
