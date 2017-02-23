import React, { Component } from 'react';
import { translate } from 'react-i18next';
import style from './style.styl';

export default (props) => (
    <div className={style['success']}>
        <span>{props.message}</span>
        <i className="material-icons">check</i>
    </div>
)
