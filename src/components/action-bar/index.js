import React, { Component } from 'react';
import { translate } from 'react-i18next';
import style from './style.styl';

export default (props) => (
    <ul id="action-bar" className={style['action-bar']}>
        <li>
            <i data-toggle="tooltip" data-placement="left" title={props.t('Keyboard Shortcuts')} className="material-icons">keyboard</i>
        </li>
        <li>
            <i data-toogle="tooltip" data-placement="left" title={props.t('Help Section')} className="material-icons magnet-link">help_outline</i>
        </li>
    </ul>
)
