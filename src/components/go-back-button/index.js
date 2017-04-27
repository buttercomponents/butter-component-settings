import React, { Component } from 'react';
import { translate } from 'react-i18next';
import style from './style.styl';

export default (props) => (
    <a className={style['go-back']} onClick={props.action}>
        <i className="material-icons">arrow_back</i>
        <span>{props.t(props.title)}</span>
    </a>
)
