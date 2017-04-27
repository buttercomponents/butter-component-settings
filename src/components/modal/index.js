import React, { Component } from 'react';
import style from './style.styl';

export default ({position, action}) => (
    <div className={style.modal} data-position={position} onClick={action.apply} key={style.modal}>
        <div className={style.widget}>
            <img src={"https://media.giphy.com/media/o0vwzuFwCGAFO/giphy.gif"} />
        </div>
        <div className={style.overlay}></div>
    </div>
)
