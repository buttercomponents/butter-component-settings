import React, { Component } from 'react';
import { translate } from 'react-i18next';
import style from './style.styl';

export default (props) => (
    <div className={props.type ? style[props.type] : style.normal} onClick={props.handler}>
       <span>{props.text}</span>
       {props.icon ? <i className="material-icons">{props.icon}</i> : ''}
    </div>
)
