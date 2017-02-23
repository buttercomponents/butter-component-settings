import React, { Component } from 'react';
import { translate } from 'react-i18next';
import style from './style.styl';

export default (props) => (
    <div className={style.row}>
        <i className="material-icons">{props.icon}</i>
        <div className={style.text}>
            <div className="item-title">{props.title}</div>
            <div className={style.helper}>{props.helper}</div>
        </div>
        <div className={style.action}>
            {props.action}
        </div>
    </div>
)
