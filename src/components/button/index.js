import React, { Component } from 'react';
import { translate } from 'react-i18next';
import style from './theme.styl';

export default (props) => (
    <div className={props.type ? style[props.type] : style.normal}>
       <span>{props.text}</span>
       {props.icon ? <i className="material-icons">{props.icon}</i> : ''}
    </div>
)
