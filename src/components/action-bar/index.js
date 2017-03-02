import React, { Component } from 'react';
import { translate } from 'react-i18next';
import style from './style.styl';
import GoBackButton from '../go-back-button';

export default (props) => (
    <div id="action-bar" className={style['action-bar']}>
        <GoBackButton {...props} title="Settings"/>
        <div className={style['buttons']}>
            <li>
                <i data-toggle="tooltip" data-placement="left" title={props.t('Keyboard Shortcuts')} className="material-icons">keyboard</i>
            </li>
            <li>
                <i data-toogle="tooltip" data-placement="left" title={props.t('Help Section')} className="material-icons">help_outline</i>
            </li>
            <li>
                <i data-toggle="tooltip" data-placement="left" title={props.t('Show Advanced Settings')} className="material-icons">filter_list</i>
                <input type="checkbox" onChange={props.action.toggleAdvanced}/>
            </li>
        </div>
    </div>
)
